import React from 'react';

const FontFieldFieldLazy = React.lazy(() => import('./index'));

const FontFieldField = props => (
  <React.Suspense fallback={null}>
    <FontFieldFieldLazy {...props} />
  </React.Suspense>
);

export default FontFieldField;
