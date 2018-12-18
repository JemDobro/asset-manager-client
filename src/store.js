import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './local-storage';
import registrationReducer from './reducers/registration';
import authReducer from './reducers/auth';
import requestsReducer from './reducers/requests';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore (
  combineReducers({
  form: formReducer,
  registration: registrationReducer,
  auth: authReducer,
  requests: requestsReducer
  }), 
  composeWithDevTools(
  applyMiddleware(thunk),
  ));

//Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;

