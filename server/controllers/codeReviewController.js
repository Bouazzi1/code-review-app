const { getGeminiComments } = require('../services/geminiService');

const reviewCode = async (req, res) => {
  try {
    const { code } = req.body;
    if (!code || code.trim() === '') {
      return res.status(400).send({ error: 'Code is required and cannot be empty' });
    }
    const comments = await getGeminiComments(code);
    res.send({ comments });
  } catch (error) {
    console.error('Error reviewing code:', error);
    res.status(500).send({ error: 'Failed to review code' });
  }
};

module.exports = { reviewCode }; // Ensure this export statement is included