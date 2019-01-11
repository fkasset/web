import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { IntlProvider } from 'react-intl';
const Root = () => (
  <IntlProvider locale="ko">
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </IntlProvider>
);

export default Root;