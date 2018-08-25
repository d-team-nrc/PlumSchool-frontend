import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (<div>Loading</div>);

export const lazyLoad = name => Loadable({
  loader: () => import(`../components/${name}`),
  loading: Loading,
});
