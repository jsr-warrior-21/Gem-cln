 import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_YOUR_API_KEY });

async function main(prompt) {
  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }]
  });

  const candidate = result.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text;

  if (!text) {
    console.error("No text found in model response:", result);
    return;
  }

  console.log(text);
  return text;
}

export default main;