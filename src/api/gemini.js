/**
 * Gemini API client for the command-panel chat.
 * Free tier: https://ai.google.dev/gemini-api/docs – get key at https://aistudio.google.com/apikey
 */

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const SYSTEM_INSTRUCTION = `You are a friendly, helpful chat assistant in a terminal on Saurav's portfolio site. You can talk about anything: general knowledge, coding, life, ideas, or small talk. Keep replies clear and natural. Use plain language and short paragraphs (2–4 sentences is ideal). If someone asks about Saurav specifically, you can say he's a front-end developer with 5+ years of experience (React, Angular, Vue, Next.js, TypeScript, D3.js) and suggest they check the rest of the portfolio or LinkedIn. Otherwise just answer normally and be conversational. Do not repeat the user's words back unnecessarily or output gibberish.`;

/**
 * @param {string} apiKey - REACT_APP_GEMINI_API_KEY
 * @param {{ role: 'user'|'model', text: string }[]} history - conversation so far
 * @returns {Promise<string>} - model reply text
 */
export async function sendChatMessage(apiKey, history) {
  const contents = history.map(({ role, text }) => ({
    role: role === 'assistant' ? 'model' : 'user',
    parts: [{ text }],
  }));

  const res = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.5,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gemini API error: ${res.status}`);
  }

  const data = await res.json();

  const candidate = data.candidates?.[0];
  let text = candidate?.content?.parts?.[0]?.text;

  if (typeof text === 'string' && text.trim() !== '') {
    return text.trim();
  }
  if (Array.isArray(candidate?.content?.parts)) {
    const part = candidate.content.parts.find((p) => p.text && String(p.text).trim());
    if (part) return String(part.text).trim();
  }

  const reason = candidate?.finishReason || data.promptFeedback?.blockReason;
  if (reason === 'SAFETY' || reason === 'RECITATION' || data.promptFeedback?.blockReason) {
    throw new Error('Response was blocked. Try a different question.');
  }
  if (candidate?.finishReason === 'MAX_TOKENS') {
    throw new Error('Reply was too long. Try a shorter question.');
  }
  if (data.error?.message) {
    throw new Error(data.error.message);
  }
  throw new Error('No reply from Gemini. Try again in a moment or use: hey, commands, about, skills.');
}
