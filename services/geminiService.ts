import { GoogleGenAI, Type } from "@google/genai";
import { DesignConcept } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDesignConcepts = async (
  productName: string,
  brandVibe: string,
  additionalDetails: string
): Promise<DesignConcept[]> => {
  const prompt = `
    You are a world-class packaging designer for 'Paperly Studio', a premium design agency.
    A client has approached us with the following product:
    Product: ${productName}
    Brand Vibe: ${brandVibe}
    Details: ${additionalDetails}

    Please generate 3 distinct, high-end packaging design concepts that embody our philosophy of 'Elevated Minimalism'.
    Focus on sustainability, tactile materials, and a luxurious unboxing experience.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a senior creative director at a luxury packaging design studio.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              conceptName: { type: Type.STRING },
              visualStyle: { type: Type.STRING, description: "Description of colors, typography, and graphics." },
              materials: { type: Type.STRING, description: "Specific paper stocks, foils, or sustainable materials." },
              unboxingExperience: { type: Type.STRING, description: "How the user interacts with the package." }
            },
            required: ["conceptName", "visualStyle", "materials", "unboxingExperience"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as DesignConcept[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate design concepts.");
  }
};