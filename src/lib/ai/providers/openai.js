import toast from 'react-hot-toast';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

/**
 * Generates text using the OpenAI Chat Completions API.
 * @param {string} apiKey - The user's OpenAI API key.
 * @param {string} prompt - The prompt to send to the model.
 * @param {object} options - Optional parameters like temperature, max_tokens.
 * @returns {Promise<string|null>} The generated text or null if an error occurs.
 */
export const generateWithOpenAI = async (apiKey, prompt, options = {}) => {
  if (!apiKey) {
    toast.error('OpenAI API key is missing. Please add it in Settings.');
    return null;
  }

  const { temperature = 0.7, max_tokens = 150, model = 'gpt-3.5-turbo' } = options;

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: 'user', content: prompt }],
        temperature: temperature,
        max_tokens: max_tokens,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error?.message || 'An unknown error occurred with the OpenAI API.';
      toast.error(`OpenAI API Error: ${errorMessage}`);
      console.error('OpenAI API Error:', errorData);
      return null;
    }

    const data = await response.json();
    return data.choices[0]?.message?.content?.trim() || null;

  } catch (error) {
    toast.error('Failed to connect to OpenAI. Check your network connection.');
    console.error('Network or other error:', error);
    return null;
  }
};
