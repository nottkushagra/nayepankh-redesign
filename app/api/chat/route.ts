import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const runtime = "edge";

const system = `You are the helpful AI assistant for NayePankh Foundation's redesigned website.
Use only this organization context:
- NayePankh Foundation is a UP Government, 80G and 12A registered NGO.
- It is described as one of India's biggest student-led NGOs, operating in Kanpur, Ghaziabad and other cities.
- Its work includes free food, sanitary pads, clothes, education, volunteering and community support.
- Donations are stated as tax exempted under 80G of the Indian Income Tax Act.
- Contact: contact@nayepankh.com and +91 8318500748.
- Founder & President: Prashant Shukla.
Answer concisely, warmly and with practical next steps. If asked about official confirmation, recommend contacting the foundation directly.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new Response(
      "The Gemini API key is not configured. Add GOOGLE_GENERATIVE_AI_API_KEY to enable streaming AI responses.",
      { status: 503 }
    );
  }

  const result = streamText({
    model: google("gemini-1.5-flash"),
    system,
    messages
  });

  return result.toDataStreamResponse();
}
