import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatin from './src/navigations/StackNavigatin';
// import NavigtionBottom from './src/navigations/BottomNavigation';
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigatin />
      </NavigationContainer>
    );
  }
}

export default App;
