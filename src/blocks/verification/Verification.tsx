import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';
import {
  verificationText,
  verificationCodeText,
  sendCodeText,
  donotReciveText,
  resendText,
  registerSuccessText,
  registerDescriptionText,
} from './VerificationConfig';
import VerificationController from './VerificationController';

import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {btnBackgroundClr} from '../../config/Config';
import CustomButton from '../customComponents/CustomButton';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export class Verification extends VerificationController {
  render() {
    const data = this.props.route.params;
    return (
      <View style={styles.verificatinContainer}>
        <View style={styles.topCard}>
          <AntDesign name="arrowleft" size={25} color="#0b111f" />
          <Text style={styles.verificationHead}>{verificationText}</Text>
        </View>
        <View style={styles.botomCard}>
          <View style={styles.emailFirstCard}>
            <View style={styles.emailSeconCard}>
              <MaterialCommunityIcons
                name="email-lock"
                size={30}
                color="#fff"
              />
            </View>
          </View>
          <Text style={styles.verificationCodeHeadText}>
            {verificationCodeText}
          </Text>
          <Text style={styles.descriptionText}>{sendCodeText}</Text>
          <Text style={styles.labelText}>{data.emailOrNum}</Text>
          <View style={styles.otpInputCard}>
            <TextInput
              maxLength={1}
              value={this.state.otp1}
              style={styles.otpInput}
              onChangeText={(text: string) =>
                this.setState({otp1: text.trim()})
              }
            />
            <TextInput
              maxLength={1}
              value={this.state.otp2}
              style={styles.otpInput}
              onChangeText={(text: string) =>
                this.setState({otp2: text.trim()})
              }
            />
            <TextInput
              maxLength={1}
              value={this.state.otp3}
              style={styles.otpInput}
              onChangeText={(text: string) =>
                this.setState({otp3: text.trim()})
              }
            />
            <TextInput
              maxLength={1}
              value={this.state.otp4}
              style={styles.otpInput}
              onChangeText={(text: string) =>
                this.setState({otp4: text.trim()})
              }
            />
          </View>
          <CustomButton title="Submit" onPressBtn={this.onPressSubmit} />
          <Text style={styles.descriptionText}>
            {donotReciveText}
            <Text onPress={this.onPressResendOtp} style={styles.resendText}>
              {resendText}
            </Text>
          </Text>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={520}
          openDuration={250}
          dragFromTopOnly
          customStyles={{
            container: {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
          }}>
          <View style={styles.bootomSheet}>
            <View style={styles.rightFirstCard}>
              <View style={styles.rightSeconCard}>
                <AntDesign name="checkcircle" size={30} color="#fff" />
              </View>
            </View>
            <Text style={styles.verificationCodeHeadText}>
              {registerSuccessText}
            </Text>
            <Text style={{...styles.descriptionText, marginBottom: 50}}>
              {registerDescriptionText}
            </Text>
            <CustomButton
              title="Go to Homepage"
              onPressBtn={this.onPressGotoHome}
            />
          </View>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  verificatinContainer: {
    height: height,
    width: width,
    backgroundColor: '#fff',
  },
  topCard: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d7dadb',
  },
  verificationHead: {
    fontSize: 25,
    color: '#0b111f',
    marginLeft: 80,
  },
  botomCard: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailFirstCard: {
    backgroundColor: '#e9eef7',
    height: 140,
    width: 140,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emailSeconCard: {
    backgroundColor: btnBackgroundClr,
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationCodeHead: {
    fontSize: 25,
    color: '#0b111f',
    marginTop: 10,
    marginBottom: 15,
  },
  verificationCodeHeadText: {
    fontSize: 25,
    color: '#0b111f',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '700',
  },
  descriptionText: {
    color: '#b6bac2',
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    marginBottom: 20,
  },
  otpInputCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  otpInput: {
    borderColor: '#000',
    borderWidth: 1,
    height: 80,
    width: 60,
    borderRadius: 15,
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  resendText: {
    color: btnBackgroundClr,
    fontSize: 20,
    marginLeft: 20,
  },
  bootomSheet: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightFirstCard: {
    backgroundColor: '#e0eddf',
    height: 140,
    width: 140,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  rightSeconCard: {
    backgroundColor: '#1b9e0d',
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Verification;
