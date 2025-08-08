import React from 'react';

const SettingsCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const InputField = ({ placeholder, type = 'text' }) => (
    <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
);


const AppearanceSettings = () => (
  <SettingsCard title="Appearance">
    <div className="flex items-center justify-between">
        <span className="text-gray-700">Theme</span>
        <div className="w-1/2">
            <InputField placeholder="e.g., Light, Dark" />
        </div>
    </div>
    <div className="flex items-center justify-between">
        <span className="text-gray-700">Font Size</span>
        <div className="w-1/2">
            <InputField placeholder="e.g., Normal, Large" />
        </div>
    </div>
  </SettingsCard>
);

export default AppearanceSettings;
