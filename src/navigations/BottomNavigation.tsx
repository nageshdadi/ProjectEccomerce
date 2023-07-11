/* eslint-disable react/no-unstable-nested-components */

import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../blocks/home/Home';
import Favorite from '../blocks/favorite/Favorite';
import MyOrders from '../blocks/myOrders/MyOrders';
import MyProfile from '../blocks/myProfile/MyProfile';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {btnBackgroundClr} from '../config/Config';
const Tab = createBottomTabNavigator();

class NavigtionBottom extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 100,
            padding: 15,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="home"
                size={25}
                color={focused ? btnBackgroundClr : '#b7b8bd'}
              />
            ),
            tabBarActiveBackgroundColor: '#fff',
            tabBarInactiveBackgroundColor: '#fff',
            tabBarActiveTintColor: btnBackgroundClr,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '700',
              marginBottom: 20,
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="truck-fast-outline"
                size={25}
                color={focused ? btnBackgroundClr : '#b7b8bd'}
              />
            ),
            tabBarActiveBackgroundColor: '#fff',
            tabBarInactiveBackgroundColor: '#fff',
            tabBarActiveTintColor: btnBackgroundClr,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '700',
              marginBottom: 20,
            },
          }}
          name="MyOrders"
          component={MyOrders}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={25}
                color={focused ? btnBackgroundClr : '#b7b8bd'}
              />
            ),
            tabBarActiveBackgroundColor: '#fff',
            tabBarInactiveBackgroundColor: '#fff',
            tabBarActiveTintColor: btnBackgroundClr,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '700',
              marginBottom: 20,
            },
          }}
          name="Favorite"
          component={Favorite}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Octicons
                name="person"
                size={25}
                color={focused ? btnBackgroundClr : '#b7b8bd'}
              />
            ),
            tabBarActiveBackgroundColor: '#fff',
            tabBarInactiveBackgroundColor: '#fff',
            tabBarActiveTintColor: btnBackgroundClr,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '700',
              marginBottom: 20,
            },
          }}
          name="MyProfile"
          component={MyProfile}
        />
      </Tab.Navigator>
    );
  }
}

export default NavigtionBottom;
