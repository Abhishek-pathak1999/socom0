import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from '../notification/Notification';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../colors';
import HomePage from '../../Screens/Home';
import LiveShop from '../../Screens/LiveShop';
import Stores from '../../Screens/Stores';
import Categories from '../../Screens/Categories';
import Profile from '../../Screens/Profile';



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        <Drawer.Screen name="MyApp" component={MyTabs} />
        <Drawer.Screen name="Notifications" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


function MyTabs() {
  const screenOptions = {
    tabBarItemStyle: {
      backgroundColor: 'black',
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.yellow,
        tabBarStyle: {
          backgroundColor: '#141414',
          paddingTop: 15,
          height: 80,
          paddingBottom: 15,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,

        }
      }}

    >
      <Tab.Screen name="Home" component={HomePage}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Live Shop" component={LiveShop}
        options={{
          headerShown: false,
          tabBarLabel: 'Live Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Categories" component={Categories}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-grid" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Stores" component={Stores}
        options={{
          headerShown: false,
          tabBarLabel: 'Stores',
          tabBarIcon: ({ color, size }) => (
            <Icon name="storefront" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
