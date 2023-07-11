import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {profileDescription, profileImg, profileName} from './HomeConfig';
import TopNavigation from '../../navigations/TopNavigation';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class Home extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.searchCrad}>
          <View style={styles.profileCrad}>
            <Image style={styles.profilePic} source={profileImg} />
            <View>
              <Text style={styles.profileNameText}>{profileName}</Text>
              <Text style={styles.bellowBtnText}>{profileDescription}</Text>
            </View>
          </View>
          <View style={styles.notificationCrad}>
            <Feather name="search" size={35} style={styles.iconStyles} />
            <Ionicons
              name="notifications-outline"
              size={35}
              style={styles.iconStyles}
            />
          </View>
        </View>
        <TopNavigation />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  searchCrad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCrad: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    height: 60,
    width: 60,
    marginRight: 15,
  },
  profileNameText: {
    fontSize: 20,
    color: '#0b111f',
    marginBottom: 6,
    fontWeight: '500',
  },
  bellowBtnText: {
    color: '#b6bac2',
    fontSize: 15,
  },
  notificationCrad: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyles: {
    marginRight: 20,
  },
});
export default Home;
