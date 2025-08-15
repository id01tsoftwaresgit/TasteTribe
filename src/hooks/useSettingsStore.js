import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// This store manages all user-specific settings that are persisted in localStorage.
// API keys are stored here and are NEVER sent to any server.

export const useSettingsStore = create(
  persist(
    (set, get) => ({
      // --- State ---
      theme: 'light',
      apiKeys: {
        openai: '',
        anthropic: '',
        google: '',
        mistral: '',
        maptiler: '',
      },
      hasAnalyticsConsent: null, // null: undecided, true: yes, false: no

      // --- Actions ---
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      setApiKey: (provider, key) => set((state) => ({
        apiKeys: {
          ...state.apiKeys,
          [provider]: key,
        },
      })),

      getApiKey: (provider) => {
        return get().apiKeys[provider] || '';
      },

      setAnalyticsConsent: (consent) => set({ hasAnalyticsConsent: consent }),
    }),
    {
      name: 'tastetribe-settings-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
