/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppNavigator from './App/Navigator/AppNavigator'
//import App from './App/HotDemo/App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
