import React from 'react';

const SettingsSection = ({ title, description, children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-ui-border">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="md:col-span-2">
        <div className="bg-ui-surface border border-ui-border rounded-xl shadow-soft">
            <div className="p-6">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
