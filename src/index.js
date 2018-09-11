import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
// import RequestForm from './components/request-form';
import CreateAccountForm from './components/createAccount-form';

ReactDOM.render(
<Provider store={store}>
  <CreateAccountForm/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
