import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import RegisterController from './RegisterController';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../customComponents/CustomButton';
import {
  createAccountText,
  createsubText,
  usernameLabel,
  emailOrPhoneLabel,
  passwordlabel,
  registerBtnBellowText,
  signupWithGoogle,
  signupWithFace,
  googleImg,
  facebookImg,
  btnBackgroundClr,
} from '../../config/Config';
export class Register extends RegisterController {
  render() {
    const {focusedInput, isShowPs} = this.state;
    const userBorder = focusedInput === 'username' ? btnBackgroundClr : '#fff';
    const emailBorder = focusedInput === 'email' ? btnBackgroundClr : '#fff';
    const passwordBorder =
      focusedInput === 'password' ? btnBackgroundClr : '#fff';
    const eyeIcon = isShowPs ? 'eye' : 'eye-slash';
    return (
      <View style={styles.registerContainer}>
        <Text style={styles.headText}>{createAccountText}</Text>
        <Text style={styles.descriptionText}>{createsubText}</Text>
        <View style={styles.totalInputCard}>
          <View>
            <Text style={styles.labelText}>{usernameLabel}</Text>
            <View style={{...styles.inputCard, borderColor: `${userBorder}`}}>
              <View style={styles.psInputCard}>
                <FontAwesome
                  name="user-o"
                  size={25}
                  color={
                    focusedInput === 'username' ? btnBackgroundClr : '#a1a9ad'
                  }
                />
                <TextInput
                  style={styles.input}
                  value={this.state.username}
                  placeholder="Create your username"
                  onChangeText={(text: string) =>
                    this.setState({username: text})
                  }
                  onFocus={() => this.setState({focusedInput: 'username'})}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.labelText}>{emailOrPhoneLabel}</Text>
            <View style={{...styles.inputCard, borderColor: `${emailBorder}`}}>
              <View style={styles.psInputCard}>
                <MaterialIcons
                  name="email"
                  size={25}
                  color={
                    focusedInput === 'email' ? btnBackgroundClr : '#a1a9ad'
                  }
                />
                <TextInput
                  style={styles.input}
                  value={this.state.emailOrNum}
                  placeholder="Enter your email or phone number"
                  onFocus={() => this.setState({focusedInput: 'email'})}
                  onChangeText={(text: string) =>
                    this.setState({emailOrNum: text})
                  }
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.labelText}>{passwordlabel}</Text>
            <View
              style={{...styles.inputCard, borderColor: `${passwordBorder}`}}>
              <View style={styles.psInputCard}>
                <FontAwesome
                  name="lock"
                  size={25}
                  color={
                    focusedInput === 'password' ? btnBackgroundClr : '#a1a9ad'
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Create your password"
                  value={this.state.password}
                  secureTextEntry={isShowPs}
                  onFocus={() => this.setState({focusedInput: 'password'})}
                  onChangeText={(text: string) =>
                    this.setState({password: text})
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.eyeBtn}
                onPress={() => {
                  this.setState({isShowPs: !this.state.isShowPs});
                }}>
                <FontAwesome name={eyeIcon} size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.errorMsgText}>{this.state.errorMsg}</Text>
        <CustomButton
          title="Create Account"
          onPressBtn={this.gotoVerification}
        />
        <Text style={styles.bellowBtnText}>{registerBtnBellowText}</Text>
        <TouchableOpacity style={styles.firebaseBtn}>
          <Image style={styles.iconImg} source={googleImg} />
          <Text style={styles.labelText}>{signupWithGoogle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firebaseBtn}>
          <Image style={styles.iconImg} source={facebookImg} />
          <Text style={styles.labelText}>{signupWithFace}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headText: {
    fontSize: hp(3),
    color: '#0b111f',
    marginBottom: hp(1),
  },
  descriptionText: {
    color: '#b6bac2',
    fontSize: 15,
    maxWidth: wp(80),
    marginBottom: hp(3),
  },
  inputCard: {
    backgroundColor: '#fcfeff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 15,
    borderWidth: 1,
    marginTop: 10,
  },
  input: {
    padding: 13,
    marginLeft: 10,
  },
  psInputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  totalInputCard: {
    marginBottom: 22,
  },
  eyeBtn: {
    marginRight: 10,
  },
  bellowBtnText: {
    color: '#b6bac2',
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'center',
  },
  firebaseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: '#d7dadb',
  },
  iconImg: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  errorMsgText: {
    marginBottom: 10,
    color: '#b81c11',
    fontSize: 16,
  },
});

export default Register;
