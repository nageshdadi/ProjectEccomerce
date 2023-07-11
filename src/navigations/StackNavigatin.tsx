import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../blocks/splash/Splash';
import OnboardSliders from '../blocks/onboardSliders/OnboardSliders';
import Register from '../blocks/register/Register';
import Verification from '../blocks/verification/Verification';
import Login from '../blocks/login/Login';
import Thumb from '../blocks/thumb/Thumb';
import NavigtionBottom from './BottomNavigation';
const Stack = createStackNavigator();
export class StackNavigatin extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Thumb" component={Thumb} />
        <Stack.Screen name="OnboardSliders" component={OnboardSliders} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NavigtionBottom" component={NavigtionBottom} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigatin;
