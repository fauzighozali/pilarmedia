import { combineReducers } from 'redux'
import configureStore, { REDUX_PERSIST } from './create-store'
import rootSaga from '../sagas'
import { persistReducer } from 'redux-persist'
import { reducer as network } from 'react-native-offline';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { AppNavigation } from "../navigation";
import { reducer as loginReducer } from './login'
import { reducer as formReducer } from 'redux-form'
import { reducer as vendorReducer } from './vendor'
import { reducer as kotaReducer } from './kota'
import { reducer as registerReducer } from './register'

const navReducer = createNavigationReducer(AppNavigation);

export const reducers = combineReducers({
  network,
  nav: navReducer,
  auth: loginReducer,
  register: registerReducer,
  form: formReducer,
  vendor: vendorReducer,
  kota: kotaReducer
});

export default () => {

  let { store, sagasManager, sagaMiddleware, persistor } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      let nextRootReducer = require('./').reducers;
      if (REDUX_PERSIST.active) {
        const persistConfig = REDUX_PERSIST.storeConfig;
        nextRootReducer = persistReducer(persistConfig, reducers);
      }

      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return {
    store,
    sagasManager,
    sagaMiddleware,
    persistor
  }
}
