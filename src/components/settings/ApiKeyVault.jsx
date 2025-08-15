import React, { useState } from 'react';
import { useSettingsStore } from '../../hooks/useSettingsStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const ApiKeyVault = () => {
  const { apiKeys, setApiKey } = useSettingsStore();
  const [localKeys, setLocalKeys] = useState(apiKeys);
  const [showKeys, setShowKeys] = useState({});

  const handleKeyChange = (provider, value) => {
    setLocalKeys(prev => ({ ...prev, [provider]: value }));
  };

  const handleSaveChanges = () => {
    Object.entries(localKeys).forEach(([provider, key]) => {
      setApiKey(provider, key);
    });
    toast.success('API keys saved!');
  };

  const toggleShowKey = (provider) => {
    setShowKeys(prev => ({ ...prev, [provider]: !prev[provider] }));
  };

  const keyProviders = [
    { id: 'openai', name: 'OpenAI' },
    { id: 'anthropic', name: 'Anthropic' },
    { id: 'google', name: 'Google (Gemini)' },
    { id: 'mistral', name: 'Mistral' },
    { id: 'maptiler', name: 'MapTiler' },
  ];

  return (
    <div className="space-y-6">
      {keyProviders.map(provider => (
        <div key={provider.id}>
          <label htmlFor={provider.id} className="block text-sm font-medium text-gray-700 mb-1">
            {provider.name} API Key
          </label>
          <div className="relative">
            <Input
              id={provider.id}
              type={showKeys[provider.id] ? 'text' : 'password'}
              value={localKeys[provider.id] || ''}
              onChange={(e) => handleKeyChange(provider.id, e.target.value)}
              placeholder={`Enter your ${provider.name} key`}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => toggleShowKey(provider.id)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showKeys[provider.id] ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <Button onClick={handleSaveChanges}>
          Save Keys
        </Button>
      </div>
    </div>
  );
};

export default ApiKeyVault;
