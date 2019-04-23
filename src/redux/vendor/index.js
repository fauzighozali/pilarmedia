import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  vendorRequest: null,
  vendorSuccess: ['data'],
  vendorFailure: ['message']
});

export const VendorTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  fetching: null,
  error: null,
  message: null
});

/* ------------- Reducers ------------- */

export const request = (state, action) => {
  return Object.assign({}, state, { fetching: true, error: null, message: null })
};

export const success = (state, action) => {
  const { data } = action;
  return Object.assign({}, state, { fetching: false, error: false, message: null, data });
};

export const failure = (state, action) => {
  const { message } = action;
  return Object.assign({}, state, { fetching: false, error: true, message });
};


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.VENDOR_REQUEST]: request,
  [Types.VENDOR_SUCCESS]: success,
  [Types.VENDOR_FAILURE]: failure
});

/* ------------- Selectors ------------- */
