import React from 'react';
import { Provider } from 'react-redux';
import ThemeContainer from './theme_container';

const Root = ({ store }) => (

  <Provider store={store}>
    <ThemeContainer />
  </Provider>
);

export default Root;
