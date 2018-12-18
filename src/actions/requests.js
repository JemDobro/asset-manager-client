import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_REQUESTS_REQUEST = 'FETCH_REQUESTS_REQUEST';
export const fetchRequestsRequest = () => ({
    type: FETCH_REQUESTS_REQUEST
});

export const FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS';
export const fetchRequestsSuccess = data => ({
  type: FETCH_REQUESTS_SUCCESS,
  data
});

export const FETCH_REQUESTS_ERROR = 'FETCH_REQUESTS_ERROR';
export const fetchRequestsError = error => ({
  type: FETCH_REQUESTS_ERROR,
  error
});

export const TOGGLE_REQUESTING_ASSETS = 'TOGGLE_REQUESTING_ASSETS';
export const toggleRequestingAssets = () => ({
  type: TOGGLE_REQUESTING_ASSETS
});

export const CREATE_REQUEST_REQUEST = 'CREATE_REQUEST_REQUEST';
export const createRequestRequest = () => ({
    type: CREATE_REQUEST_REQUEST
});

export const CREATE_REQUEST_SUCCESS = 'CREATE_REQUEST_SUCCESS';
export const createRequestSuccess = () => ({
  type: CREATE_REQUEST_SUCCESS
});

export const CREATE_REQUEST_ERROR = 'CREATE_REQUEST_ERROR';
export const createRequestError = error => ({
  type: CREATE_REQUEST_ERROR,
  error
});

export const CANCEL_REQUEST_REQUEST = 'CANCEL_REQUEST_REQUEST';
export const cancelRequestRequest = () => ({
    type: CANCEL_REQUEST_REQUEST
});

export const CANCEL_REQUEST_SUCCESS = 'CANCEL_REQUEST_SUCCESS';
export const cancelRequestSuccess = () => ({
  type: CANCEL_REQUEST_SUCCESS
});

export const CANCEL_REQUEST_ERROR = 'CANCEL_REQUEST_ERROR';
export const cancelRequestError = error => ({
  type: CANCEL_REQUEST_ERROR,
  error
});

export const RESUBMIT_REQUEST_REQUEST = 'RESUBMIT_REQUEST_REQUEST';
export const resubmitRequestRequest = () => ({
    type: RESUBMIT_REQUEST_REQUEST
});

export const RESUBMIT_REQUEST_SUCCESS = 'RESUBMIT_REQUEST_SUCCESS';
export const resubmitRequestSuccess = () => ({
  type: RESUBMIT_REQUEST_SUCCESS
});

export const RESUBMIT_REQUEST_ERROR = 'RESUBMIT_REQUEST_ERROR';
export const resubmitRequestError = error => ({
  type: RESUBMIT_REQUEST_ERROR,
  error
});

export const fetchRequests = () => (dispatch, getState) => {
  dispatch (fetchRequestsRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/requests/`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json()) 
    .then((res) => dispatch(fetchRequestsSuccess(res)))
    .catch(err => {
      const {reason, message, location} = err;
      dispatch(fetchRequestsError(err));  
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
            _error: 'Error submitting message'
        })
      );
    });
};

export const createRequest = request => (dispatch, getState) => {
  dispatch (createRequestRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/requests/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(request)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(createRequestSuccess());
      res.json();
    })
    .catch(err => {
    const {reason, message, location} = err;
    dispatch(createRequestError(err));  
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
    return Promise.reject(
      new SubmissionError({
          _error: 'Error submitting message'
      })
    );
    })
}

export const cancelRequest = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/requests/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({status: 'cancelled'})
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(cancelRequestSuccess());
      res.json();
    })
    .catch(err => {
    const {reason, message, location} = err;
    dispatch(cancelRequestError(err));  
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
    return Promise.reject(
      new SubmissionError({
          _error: 'Error submitting message'
      })
    );
    })
}

export const resubmitRequest = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/requests/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({status: 'pending'})
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(resubmitRequestSuccess());
      res.json();
    })
    .catch(err => {
    const {reason, message, location} = err;
    dispatch(resubmitRequestError(err));  
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
    return Promise.reject(
      new SubmissionError({
          _error: 'Error submitting message'
      })
    );
    })
}