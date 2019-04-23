/**
 * @format
 */
import './src/config/reactotron';
import {AppRegistry} from 'react-native';
import App from './src/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
