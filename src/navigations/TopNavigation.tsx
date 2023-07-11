import React, {Component} from 'react';
import TopHome from '../blocks/topHome/TopHome';
import Category from '../blocks/category/Category';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {btnBackgroundClr} from '../config/Config';
const Tab = createMaterialTopTabNavigator();

export class TopNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            justifyContent: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: btnBackgroundClr,
            height: 2,
            width: 90,
            marginLeft: 50,
            marginTop: 20,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#e6e8ed',
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '500',
            },
          }}
          name="TopHome"
          component={TopHome}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#e6e8ed',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '500',
            },
          }}
          name="Category"
          component={Category}
        />
      </Tab.Navigator>
    );
  }
}

export default TopNavigation;
