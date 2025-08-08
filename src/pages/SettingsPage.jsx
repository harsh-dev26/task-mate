import React from 'react';
import ProfileSettings from '../components/ProfileSettings';
import NotificationSettings from '../components/NotificationSettings';
import AppearanceSettings from '../components/AppearanceSettings';
import IntegrationSettings from '../components/IntegrationSettings';

const SettingsPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <ProfileSettings />
        <NotificationSettings />
        <AppearanceSettings />
        <IntegrationSettings />
      </div>
    </div>
  );
};

export default SettingsPage;
