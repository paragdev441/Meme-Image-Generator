import React from 'react';

const DimensionFieldLazy = React.lazy(() => import('./index'));

const DimensionField = props => (
  <React.Suspense fallback={null}>
    <DimensionFieldLazy {...props} />
  </React.Suspense>
);

export default DimensionField;
