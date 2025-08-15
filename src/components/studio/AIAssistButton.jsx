import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useSettingsStore } from '../../hooks/useSettingsStore';
import { generateText } from '../../lib/ai/service';
import toast from 'react-hot-toast';

const AIAssistButton = ({ prompt, onComplete, helpText = "Generate with AI" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getApiKey } = useSettingsStore();

  const handleClick = async () => {
    // For now, hardcode to openai. Later, this could come from a user selection.
    const provider = 'openai';
    const apiKey = getApiKey(provider);

    if (!apiKey) {
      toast.error(`Please set your ${provider} API key in Settings first.`);
      return;
    }
    if (!prompt) {
        toast.error("Cannot generate text without a prompt.");
        return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Asking the AI...');

    try {
      const result = await generateText(provider, apiKey, prompt);
      toast.dismiss(loadingToast);

      if (result) {
        toast.success('AI generation complete!');
        onComplete(result);
      } else {
        // Specific errors are handled in the provider, so this is a fallback.
        toast.error('AI generation failed.');
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('An unexpected error occurred.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-brand-secondary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      title={helpText}
    >
      <Sparkles className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
      <span className="ml-2">{isLoading ? 'Generating...' : 'AI Assist'}</span>
    </button>
  );
};

export default AIAssistButton;
