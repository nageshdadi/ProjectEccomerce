import {Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import {
  corosleImageData,
  alreadyAccountText,
  btnBackgroundClr,
} from '../../config/Config';
import OnboardSlidersController from './OnboardSlidersController';
import CustomButton from '../customComponents/CustomButton';
export class OnboardSliders extends OnboardSlidersController {
  render() {
    const {indexImage, isFingerCaoncel} = this.state;
    // if (isFingerCaoncel) {
    //   console.log('cancel finger');
    //   this.fingerPrintAccess();
    // }
    const activedot1 = indexImage === 0 ? '#d4902a' : '#000';
    const activedot2 = indexImage === 1 ? '#d4902a' : '#000';
    const activedot3 = indexImage === 2 ? '#d4902a' : '#000';
    return (
      <View style={styles.mainCrad}>
        <View style={styles.corosleCrad}>
          <Image
            style={styles.imageProduct}
            resizeMode="contain"
            source={{uri: `${corosleImageData[indexImage].image}`}}
          />
          <Text style={styles.titleText}>
            {corosleImageData[indexImage].title}
          </Text>
          <Text style={styles.descriptionText}>
            {corosleImageData[indexImage].description}
          </Text>
          <View style={styles.dotsCard}>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot1}`}}>
                .
              </Text>
            </View>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot2}`}}>
                .
              </Text>
            </View>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot3}`}}>
                .
              </Text>
            </View>
          </View>
        </View>
        <CustomButton title="Create Account" onPressBtn={this.gotoRegister} />
        <Text
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
          style={styles.alreadyAccount}>
          {alreadyAccountText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCrad: {
    flex: 1,
    padding: 15,
  },
  imageProduct: {
    height: hp(45),
    width: wp(70),
    marginBottom: 20,
    borderRadius: 13,
  },
  corosleCrad: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  dotsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsText: {
    fontSize: 50,
    color: '#000',
    margin: 7,
  },
  titleText: {
    fontSize: hp(3),
    fontWeight: '500',
    marginBottom: 10,
    color: '#0f131c',
    maxWidth: wp(70),
    textAlign: 'center',
  },
  descriptionText: {
    color: '#b6bac2',
    fontSize: 15,
    maxWidth: wp(70),
    textAlign: 'center',
  },
  alreadyAccount: {
    color: btnBackgroundClr,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default OnboardSliders;
