import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  TOGGLE_REQUESTING_ASSETS
} from '../actions/protected-data';

const initialState = {
  data: [],
  error: null,
  requesting: false
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === TOGGLE_REQUESTING_ASSETS) {
    return Object.assign({}, state, {
      requesting: !(state.requesting)
    });
  }
  return state;
}