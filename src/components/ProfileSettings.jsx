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


const ProfileSettings = () => (
  <SettingsCard title="Profile Settings">
    <InputField placeholder="Full Name" />
    <InputField placeholder="Email Address" />
    <InputField placeholder="Password" type="password" />
    <button className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
      Update Profile
    </button>
  </SettingsCard>
);

export default ProfileSettings;
