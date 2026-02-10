
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHealthAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are "Sakhi AI", a compassionate and expert virtual assistant for SakhiSanitize, a women's healthcare startup. 
        Provide medically sound, private, and supportive advice on menstrual health, hygiene, and general well-to-be. 
        Always recommend consulting a real doctor for serious symptoms. Keep responses friendly and concise. 
        Do not provide definitive medical diagnoses.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please reach out to our human experts for immediate help.";
  }
};

export const getMedicineSuggestions = async (symptoms: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest general supportive care or OTC recommendations for these symptoms: ${symptoms}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  purpose: { type: Type.STRING },
                  caution: { type: Type.STRING }
                }
              }
            },
            generalAdvice: { type: Type.STRING }
          },
          required: ["suggestions", "generalAdvice"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Medicine Suggestion Error:", error);
    return null;
  }
};
