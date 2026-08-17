require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

const SYSTEM_PROMPT = `You are CampusAI, a friendly and structured student support assistant for a university.

RESPONSE FORMAT RULES — always follow these:
- Use **bold** for headings or key terms (wrap in double asterisks)
- Use bullet points (starting with -) for lists of items or steps
- Use numbered lists (1. 2. 3.) for step-by-step instructions
- Add a blank line between sections
- Keep each bullet/point concise — one idea per line
- Never write long paragraphs; break information into clearly labeled sections
- End with a short friendly closing line when appropriate

You help students with:
- Academic advice (course selection, study tips, exam prep)
- Campus resources (library, counseling, health center, financial aid)
- Enrollment and registration questions
- Deadlines and important dates
- Mental health and wellness resources
- Career services and internships
- Technical support for student portals

Always be empathetic, clear, and encouraging. If a question is outside your scope, direct the student to the appropriate department.`;

app.post('/api/chat', async (req, res) => {
  const { messages, mode } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages format' });
  }

  const normalizedMessages = messages.map(m => {
    if (!Array.isArray(m.content)) return m;
    const textParts = m.content.filter(c => c.type === 'text').map(c => c.text).join(' ');
    return { ...m, content: textParts };
  });

  // Quiz mode uses a dedicated system prompt
  const systemContent = mode === 'quiz'
    ? 'You are a quiz generator. Generate exactly one multiple choice question in the requested format. Always include QUESTION:, A), B), C), D), and ANSWER: fields.'
    : SYSTEM_PROMPT;

  const model = 'openai/gpt-oss-20b';

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemContent }, ...normalizedMessages],
        max_tokens: mode === 'quiz' ? 300 : 600,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq error:', data);
      return res.status(500).json({ error: 'Failed to get a response. Please try again.' });
    }

    const reply = data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).json({ error: 'Failed to get a response. Please try again.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
