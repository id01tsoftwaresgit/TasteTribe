import React from 'react';
import { useTranslation } from 'react-i18next';
import SettingsSection from '../components/ui/SettingsSection';
import ApiKeyVault from '../components/settings/ApiKeyVault';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{t('settings.title')}</h1>
        <p className="mt-2 text-gray-600">{t('settings.subtitle')}</p>
      </div>

      <SettingsSection
        title="API Keys"
        description="Your keys are stored only in your browser's local storage and are never sent to our servers. They are required for AI and Map features."
      >
        <ApiKeyVault />
      </SettingsSection>

      <SettingsSection
        title="Appearance"
        description="Customize the look and feel of the application."
      >
        <div>
          {/* Theme switcher will go here */}
          <p className="text-gray-700">Theme customization options are coming soon.</p>
        </div>
      </SettingsSection>

      <SettingsSection
        title="Profile Information"
        description="This information will be displayed on your public profile."
      >
        <div>
          {/* Profile form will go here */}
          <p className="text-gray-700">Profile editing will be available shortly.</p>
        </div>
      </SettingsSection>

    </div>
  );
};

export default SettingsPage;
