import React from 'react';

const ImageContainerLazy = React.lazy(() => import('./ImageContainer'));

const ImageContainer = props => (
  <React.Suspense fallback={null}>
    <ImageContainerLazy {...props} />
  </React.Suspense>
);

export default ImageContainer;
