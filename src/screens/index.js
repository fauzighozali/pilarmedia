import DebugConfig from '../config/debug'
import React from 'react'
import createStore from '../redux'
import RootWrapper from "./root";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { AppNavigation } from '../navigation'

const { store, persistor } = createStore();

const AppNinja = createReduxContainer(AppNavigation);
const mapStateToProps = (state) => ({ state: state.nav });

export const AppWithNavigationState = connect(mapStateToProps)(AppNinja);

function App() {
  return (
    <Provider store={store} key={Math.random()}>
      <PersistGate loading={null} persistor={persistor}>
        <RootWrapper/>
      </PersistGate>
    </Provider>
  )
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
