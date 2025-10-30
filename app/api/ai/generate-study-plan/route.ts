import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { subjects, examDate, hoursPerDay, goals } = await req.json()

    console.log("[v0] Received study plan request:", { subjects, examDate, hoursPerDay, goals })

    if (!subjects || !examDate || !hoursPerDay) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 })
    }

    console.log("[v0] Calling Gemini API directly...")

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
                  text: `Create a comprehensive study plan with the following details:
      
      Subjects: ${subjects}
      Exam Date: ${examDate}
      Available Study Hours Per Day: ${hoursPerDay}
      Goals: ${goals || "General exam preparation"}
      
      Generate a detailed weekly study schedule that:
      1. Distributes study time effectively across all subjects
      2. Includes specific topics to cover each day
      3. Incorporates breaks and review sessions
      4. Provides actionable study activities (reading, practice problems, flashcards, etc.)
      5. Includes study tips and strategies
      
      Return ONLY a valid JSON object (no markdown, no code blocks) with this structure:
      {
        "plan": {
          "title": "string",
          "duration": "string",
          "goals": ["string"],
          "schedule": [
            {
              "day": "string",
              "timeSlot": "string",
              "subject": "string",
              "topic": "string",
              "duration": "string",
              "activities": ["string"]
            }
          ],
          "tips": ["string"]
        }
      }
      
      Make the plan realistic and achievable for a student.`,
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
    console.log("[v0] Gemini API response received")

    // Extract text from Gemini response
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!text) {
      console.error("[v0] No text in response:", JSON.stringify(data))
      return NextResponse.json({ error: "No text in Gemini response" }, { status: 500 })
    }

    console.log("[v0] Response text length:", text.length)
    console.log("[v0] Response text preview:", text.substring(0, 200))

    // Remove markdown code blocks if present
    let jsonText = text.trim()
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.replace(/```json\n?/g, "").replace(/```\n?/g, "")
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/```\n?/g, "")
    }

    console.log("[v0] Parsing JSON...")
    const result = JSON.parse(jsonText)
    console.log("[v0] JSON parsed successfully")
    return NextResponse.json(result)
  } catch (error: any) {
    console.error("[v0] Error generating study plan:", error)
    console.error("[v0] Error message:", error?.message)
    console.error("[v0] Error stack:", error?.stack)

    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      {
        error: "Failed to generate study plan",
        message: errorMessage,
      },
      { status: 500 },
    )
  }
}
