import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error("[v0] GEMINI_API_KEY not found in environment variables")
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" })

    const systemPrompt = `You are a compassionate and empathetic stress relief coach for students. Your role is to:
- Listen actively and validate their feelings
- Provide gentle, supportive guidance
- Suggest calming techniques like breathing exercises, mindfulness, or positive reframing
- Keep responses warm, concise (2-3 sentences), and encouraging
- Use a calm, soothing tone with occasional emojis (🌸, 🌿, ✨, 💙)
- Help them feel heard and less alone
- Never give medical advice - suggest professional help if needed
- Focus on immediate stress relief and emotional support

Remember: You're here to help them relax and feel better in this moment.`

    // Format messages for Gemini
    const chatHistory = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }))

    const lastMessage = messages[messages.length - 1].content

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'll be a compassionate stress relief coach for students." }],
        },
        ...chatHistory,
      ],
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 200,
      },
    })

    const result = await chat.sendMessage(lastMessage)
    const response = result.response
    const text = response.text()

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("[v0] Stress relief chat error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
