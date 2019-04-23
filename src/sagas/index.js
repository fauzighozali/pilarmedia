import { takeLatest, all, fork } from 'redux-saga/effects'
import { networkSaga } from 'react-native-offline';
import API from '../services/api'

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/startup'
import { LoginTypes } from '../redux/login'
import { RegisterTypes } from '../redux/register'
import { VendorTypes } from '../redux/vendor'
import { KotaTypes } from '../redux/kota'

/* ------------- Sagas ------------- */

import { startup } from './startup'
import { loginSaga } from "./login";
import { registerSaga } from "./register";
import { vendorSaga } from "./vendor";
import { kotaSaga } from "./kota";

/* ------------- API ------------- */

export const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    fork(networkSaga, { timeout: 2000, checkConnectionInterval: 20000 }),
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, registerSaga, api),
    takeLatest(VendorTypes.VENDOR_REQUEST, vendorSaga, api),
    takeLatest(KotaTypes.KOTA_REQUEST, kotaSaga, api)
  ])
}
