import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import store from './store';
import './index.css';
// import RequestForm from './components/request-form';
// import CreateAccountForm from './components/createAccount-form';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>, 
  document.getElementById('root'));
  registerServiceWorker();
