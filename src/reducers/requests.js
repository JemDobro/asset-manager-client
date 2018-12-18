import {
  FETCH_REQUESTS_REQUEST,
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_ERROR,
  TOGGLE_REQUESTING_ASSETS,
  CREATE_REQUEST_REQUEST,
  CREATE_REQUEST_SUCCESS,
  CREATE_REQUEST_ERROR,
  CANCEL_REQUEST_REQUEST,
  CANCEL_REQUEST_SUCCESS,
  CANCEL_REQUEST_ERROR,
  RESUBMIT_REQUEST_REQUEST,
  RESUBMIT_REQUEST_SUCCESS,
  RESUBMIT_REQUEST_ERROR,
} from '../actions/requests';

const initialState = {
  loading: false,
  data: [],
  error: null,
  requesting: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUESTS_REQUEST:
      return {...state, loading: true, requesting: false, error: null};
    case FETCH_REQUESTS_SUCCESS:
      return {...state, loading: false, data: action.data, requesting: false};
    case FETCH_REQUESTS_ERROR:
    case CREATE_REQUEST_ERROR:
    case CANCEL_REQUEST_ERROR:
    case RESUBMIT_REQUEST_ERROR:
      return {...state, loading: false, error: action.error};
    case TOGGLE_REQUESTING_ASSETS:
      return {...state, requesting: !(state.requesting)};
    case CREATE_REQUEST_REQUEST:
    case CANCEL_REQUEST_REQUEST:
    case RESUBMIT_REQUEST_REQUEST:
      return {...state, loading: true, error: null};
    case CREATE_REQUEST_SUCCESS:
    case CANCEL_REQUEST_SUCCESS:
    case RESUBMIT_REQUEST_SUCCESS:
      return {...state, loading: false};
    default:    
      return state;
  }
}