import { call, put } from 'redux-saga/effects'
import request from '../../services/request'
import LoggedInActions  from '../../redux/login'

export const loginSaga = function* (api, action) {
  const response = yield call(request, api.login, action.payload);
  if (response.success) {
    const { data } = response.data;
    const { jwt } = data;
    yield put(LoggedInActions.loginSuccess(jwt.token));
  } else {
    const message = response.message;
    yield put(LoggedInActions.loginFailure(message));
  }
};
