import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {katukuTitle, splashDescription, versonText} from '../../config/Config';
import SplashController from './SplashController';
export class Splash extends SplashController {
  render() {
    return (
      <View style={styles.splashMainContainer}>
        <View style={styles.splashMainContainer}>
          <Text style={styles.katukuTitleText}>{katukuTitle}</Text>
          <Text style={styles.splashDescriptionText}>{splashDescription}</Text>
        </View>

        <Text style={styles.verson}>{versonText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  splashMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e348f',
  },
  katukuTitleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  splashDescriptionText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  verson: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 50,
  },
});
export default Splash;
