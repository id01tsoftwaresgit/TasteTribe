import { generateWithOpenAI } from './providers/openai';
// Import other providers here as they are created
// import { generateWithAnthropic } from './providers/anthropic';

const providers = {
  openai: generateWithOpenAI,
  // anthropic: generateWithAnthropic,
};

/**
 * A central dispatcher for generating text with various AI providers.
 * @param {string} providerName - The name of the provider (e.g., 'openai').
 * @param {string} apiKey - The user's API key for the selected provider.
 * @param {string} prompt - The prompt to send to the model.
 * @param {object} options - Optional parameters for the generation.
 * @returns {Promise<string|null>} The generated text or null.
 */
export const generateText = async (providerName, apiKey, prompt, options = {}) => {
  const selectedProvider = providers[providerName];

  if (!selectedProvider) {
    console.error(`AI provider "${providerName}" is not supported.`);
    return null;
  }

  return selectedProvider(apiKey, prompt, options);
};
