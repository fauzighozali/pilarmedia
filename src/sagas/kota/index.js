import { call, put, select } from 'redux-saga/effects'
import request from '../../services/request'
import KotaInActions from '../../redux/kota'

export const kotaSaga = function* (api, action) {
  const response = yield call(request, api.getKota);
  if (response.success) {
    const { data } = response.data;
    yield put(KotaInActions.kotaSuccess(data));
  } else {
    const message = response.message;
    yield put(KotaInActions.kotaFailure(message));
  }
};
