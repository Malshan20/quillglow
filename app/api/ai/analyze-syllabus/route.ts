import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { syllabusText } = await req.json()

    if (!syllabusText) {
      return NextResponse.json({ error: "Syllabus text is required" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Analyze this syllabus and extract actionable study tasks with deadlines. 
      
      Syllabus:
      ${syllabusText}
      
      Return ONLY a valid JSON object (no markdown, no code blocks) with this structure:
      {
        "tasks": [
          {
            "title": "string",
            "description": "string",
            "dueDate": "YYYY-MM-DD (optional)",
            "priority": "low" | "medium" | "high",
            "subject": "string"
          }
        ]
      }
      
      Extract 3-5 key tasks that a student should focus on.`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
          },
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Gemini API error:", errorText)
      return NextResponse.json({ error: "Gemini API error", details: errorText }, { status: response.status })
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      return NextResponse.json({ error: "No text in Gemini response" }, { status: 500 })
    }

    // Remove markdown code blocks if present
    let jsonText = text.trim()
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.replace(/```json\n?/g, "").replace(/```\n?/g, "")
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/```\n?/g, "")
    }

    const result = JSON.parse(jsonText)
    return NextResponse.json(result)
  } catch (error) {
    console.error("[v0] Error analyzing syllabus:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: "Failed to analyze syllabus", details: errorMessage }, { status: 500 })
  }
}
