import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { question, correctAnswer, lastResponse, lastConcept, studentName } = await req.json();
    const safeLastResponse = lastResponse || "";
const safeConcept = lastConcept || "";
const safeName = studentName || "student";

    console.log("API HIT");
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
input: `You are Coach Elevé, a warm, confident mentor helping a student prepare for boards.

Student name: ${safeName}
Current concept: ${safeConcept}

You are in a live conversation.

Here is what you just said:
"${safeLastResponse}"

The student responded:
"${question}"

Your job:
- Continue the conversation naturally
- Guide their thinking (not just explain)
- Keep it 2–3 sentences max
- Sound human and conversational

If they say "yes" or agree:
- move to the next step

If they are unsure:
- simplify or break it down

If appropriate:
- mention if this is high-yield for boards

Occasionally ask:
- “Does that feel clear or still fuzzy?”

Do NOT restart explanation.
Continue from where you left off.

Correct Answer: ${correctAnswer}`,
    });
console.log("API RESPONSE RECEIVED");
    return new Response(
  JSON.stringify({ explanation: response.output_text }),
  { status: 200 }
);
  } catch (error) {
    console.error(error);
    return new Response(
  JSON.stringify({ explanation: "Error generating explanation" }),
  { status: 500 }
);
  }
}