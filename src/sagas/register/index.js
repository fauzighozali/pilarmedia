import { call, put } from 'redux-saga/effects'
import request from '../../services/request'
import RegisterInActions from '../../redux/register'

export const registerSaga = function* (api, action) {
  const response = yield call(request, api.postVendor, action.payload);
  if (response.success) {
    const { message } = response;
    yield put(RegisterInActions.registerSuccess(message));
  } else {
    const message = response.message;
    yield put(RegisterInActions.registerFailure(message));
  }
};
