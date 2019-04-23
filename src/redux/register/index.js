import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  registerRequest: ['payload'],
  registerSuccess: ['message'],
  registerFailure: ['message']
});

export const RegisterTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  message: null
});

/* ------------- Reducers ------------- */

export const request = (state, action) => {
  const { payload } = action;
  return Object.assign({}, state, { fetching: true, error: null, message: null, payload })
};

export const success = (state, action) => {
  const { message } = action;
  return Object.assign({}, state, { fetching: false, error: false, message });
};

export const failure = (state, action) => {
  const { message } = action;
  return Object.assign({}, state, { fetching: false, error: true, message, token: null });
};

export const logout = () => {
  return INITIAL_STATE;
};

export const autoRegister = (state) => state;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_REQUEST]: request,
  [Types.REGISTER_SUCCESS]: success,
  [Types.REGISTER_FAILURE]: failure
});

/* ------------- Selectors ------------- */
