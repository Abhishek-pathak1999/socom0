import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import CartReview from './Screens/cart/CartReview';


import Dashboard from './components/dashboard/Dashboard'



AppRegistry.registerComponent(appName, () => Dashboard);
