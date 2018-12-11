import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const TOGGLE_REQUESTING_ASSETS = 'TOGGLE_REQUESTING_ASSETS';
export const toggleRequestingAssets = () => ({
    type: TOGGLE_REQUESTING_ASSETS
});

export const fetchProtectedData = () => (dispatch, getState) => {
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
        .then((res) => dispatch(fetchProtectedDataSuccess(res)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const createRequest = request => (dispatch, getState) => {
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
        .then(fetch(`${API_BASE_URL}/requests/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json()) 
            .then((res) => dispatch(fetchProtectedDataSuccess(res)))
            .catch(err => {
                dispatch(fetchProtectedDataError(err));
            })
        )
    };

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
        .then(fetch(`${API_BASE_URL}/requests/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json()) 
            .then((res) => dispatch(fetchProtectedDataSuccess(res)))
            .catch(err => {
                dispatch(fetchProtectedDataError(err));
            })
        )
    };


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
        .then(fetch(`${API_BASE_URL}/requests/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json()) 
            .then((res) => dispatch(fetchProtectedDataSuccess(res)))
            .catch(err => {
                dispatch(fetchProtectedDataError(err));
            })
        )
        };