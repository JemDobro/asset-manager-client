import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR
} from '../actions/registration';

const initialState = {
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === REGISTRATION_REQUEST) { 
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === REGISTRATION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    });
  } else if (action.type === REGISTRATION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.err
    });
  } 
  return state;
}