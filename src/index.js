import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

// ReactDOM.render(<App />, document.getElementById('root'));
const render = Component => {
  ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
    document.getElementById('root')
  )
}
render(Root)
registerServiceWorker();
