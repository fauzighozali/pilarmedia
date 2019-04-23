import { call, put, select } from 'redux-saga/effects'
import request from '../../services/request'
import VendorInActions from '../../redux/vendor'

export const vendorSaga = function* (api, action) {

  const response = yield call(request, api.getVendor);
  if (response.success) {
    const { data } = response.data;
    yield put(VendorInActions.vendorSuccess(data));
  } else {
    const message = response.message;
    yield put(VendorInActions.vendorFailure(message));
  }

};
