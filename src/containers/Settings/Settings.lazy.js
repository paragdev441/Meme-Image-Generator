import React from 'react';

const SettingsLazy = React.lazy(() => import('./Settings'));

const Settings = props => (
  <React.Suspense fallback={null}>
    <SettingsLazy {...props} />
  </React.Suspense>
);

export default Settings;
