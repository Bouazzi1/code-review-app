const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getGeminiComments = async (code) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Provide code review comments for the following code:\n${code}\n`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response;
  } catch (error) {
    console.error('Error fetching comments from Gemini API:', error);
    throw new Error('Failed to fetch comments from Gemini API');
  }
};

module.exports = { getGeminiComments };