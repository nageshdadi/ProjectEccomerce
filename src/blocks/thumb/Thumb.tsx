import {Text, View, Alert, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import TouchID from 'react-native-touch-id';
const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
export class Thumb extends Component {
  _pressHandler() {
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        Alert.alert('Authenticated Successfully');
        console.log(success);
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
        console.log(error);
      });
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._pressHandler}>
          <Text>Authenticate with Touch ID</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Thumb;
