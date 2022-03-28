import React from 'react';

const ColorFieldLazy = React.lazy(() => import('./index'));

const ColorField = props => (
  <React.Suspense fallback={null}>
    <ColorFieldLazy {...props} />
  </React.Suspense>
);

export default ColorField;
