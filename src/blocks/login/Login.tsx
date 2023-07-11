import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import LoginController from './LoginController';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../customComponents/CustomButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  loginHead,
  createsubText,
  emailOrPhoneLabel,
  passwordlabel,
  registerBtnBellowText,
  signupWithFace,
  signupWithGoogle,
  googleImg,
  facebookImg,
  forgotPs,
  forgotPsTxt,
  forgotDescription,
  createPdTxt,
  conformPasswordlabel,
} from './LoginConfig';
import {btnBackgroundClr} from '../../config/Config';
export class Login extends LoginController {
  render() {
    const {focusedInput, isShowPs, isCreateNewPs} = this.state;
    const emailBorder = focusedInput === 'email' ? btnBackgroundClr : '#fff';
    const forgotemailBorder =
      focusedInput === 'forgotEmail' ? btnBackgroundClr : '#fff';
    const passwordBorder =
      focusedInput === 'password' ? btnBackgroundClr : '#fff';
    const password1Border =
      focusedInput === 'password1' ? btnBackgroundClr : '#fff';
    const conformPasswordBorder =
      focusedInput === 'conformPassword' ? btnBackgroundClr : '#fff';
    const eyeIcon = isShowPs ? 'eye' : 'eye-slash';
    return (
      <View style={styles.registerContainer}>
        <Text style={styles.headText}>{loginHead}</Text>
        <Text style={styles.descriptionText}>{createsubText}</Text>
        <View style={styles.totalInputCard}>
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
                    this.setState({emailOrNum: text.trim()})
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
                    this.setState({password: text.trim()})
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
          <Text
            onPress={() => {
              this.setState({errorMsg: ''});
              this.RBSheet.open();
            }}
            style={styles.forgotPsText}>
            {forgotPs}
          </Text>
        </View>
        <Text style={styles.errorMsgText}>{this.state.errorMsg}</Text>
        <CustomButton title="Sign In" onPressBtn={this.gotoHomePage} />
        <Text style={styles.bellowBtnText}>{registerBtnBellowText}</Text>
        <TouchableOpacity style={styles.firebaseBtn}>
          <Image style={styles.iconImg} source={googleImg} />
          <Text style={styles.labelText}>{signupWithGoogle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firebaseBtn}>
          <Image style={styles.iconImg} source={facebookImg} />
          <Text style={styles.labelText}>{signupWithFace}</Text>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={480}
          openDuration={250}
          dragFromTopOnly
          customStyles={{
            container: {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
          }}>
          {isCreateNewPs ? (
            <View style={styles.bootomSheet}>
              <Text style={styles.verificationCodeHeadText}>{createPdTxt}</Text>
              <Text style={styles.descriptionText}>{forgotDescription}</Text>
              <View>
                <Text style={styles.labelText}>{passwordlabel}</Text>
                <View
                  style={{
                    ...styles.inputCard,
                    borderColor: `${password1Border}`,
                  }}>
                  <View style={styles.psInputCard}>
                    <FontAwesome
                      name="lock"
                      size={25}
                      color={
                        focusedInput === 'password1'
                          ? btnBackgroundClr
                          : '#a1a9ad'
                      }
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Create your password"
                      value={this.state.password1}
                      secureTextEntry={this.state.isShowPs1}
                      onFocus={() => this.setState({focusedInput: 'password1'})}
                      onChangeText={(text: string) =>
                        this.setState({password1: text.trim()})
                      }
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.eyeBtn}
                    onPress={() => {
                      this.setState({isShowPs1: !this.state.isShowPs1});
                    }}>
                    <FontAwesome name={eyeIcon} size={25} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.labelText}>{conformPasswordlabel}</Text>
                <View
                  style={{
                    ...styles.inputCard,
                    borderColor: `${conformPasswordBorder}`,
                  }}>
                  <View style={styles.psInputCard}>
                    <FontAwesome
                      name="lock"
                      size={25}
                      color={
                        focusedInput === 'conformPassword'
                          ? btnBackgroundClr
                          : '#a1a9ad'
                      }
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Create your password"
                      value={this.state.conformPassword}
                      secureTextEntry={this.state.isShowConformPs}
                      onFocus={() =>
                        this.setState({focusedInput: 'conformPassword'})
                      }
                      onChangeText={(text: string) =>
                        this.setState({conformPassword: text.trim()})
                      }
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.eyeBtn}
                    onPress={() => {
                      this.setState({
                        isShowConformPs: !this.state.isShowConformPs,
                      });
                    }}>
                    <FontAwesome name={eyeIcon} size={25} />
                  </TouchableOpacity>
                </View>
              </View>
              <CustomButton
                title="Change Password"
                onPressBtn={this.onPressChangePassword}
              />
            </View>
          ) : (
            <View style={styles.bootomSheet}>
              <Text style={styles.verificationCodeHeadText}>{forgotPsTxt}</Text>
              <Text style={styles.descriptionText}>{forgotDescription}</Text>
              <View>
                <Text style={styles.labelText}>{emailOrPhoneLabel}</Text>
                <View
                  style={{
                    ...styles.inputCard,
                    borderColor: `${forgotemailBorder}`,
                  }}>
                  <View style={styles.psInputCard}>
                    <MaterialIcons
                      name="email"
                      size={25}
                      color={
                        focusedInput === 'forgotEmail'
                          ? btnBackgroundClr
                          : '#a1a9ad'
                      }
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your Email or Number"
                      value={this.state.forgotEmailOrNum}
                      onFocus={() =>
                        this.setState({focusedInput: 'forgotEmail'})
                      }
                      onChangeText={(text: string) =>
                        this.onChangeForgotEmail(text.trim())
                      }
                    />
                  </View>
                  {this.state.isEmailMatch && (
                    <TouchableOpacity style={styles.eyeBtn}>
                      <AntDesign name="checkcircle" size={25} color="#16b844" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <CustomButton
                title="Send Code"
                onPressBtn={this.onPressSendCode}
              />
            </View>
          )}
        </RBSheet>
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
    fontSize: 25,
    color: '#0b111f',
    marginBottom: 7,
  },
  descriptionText: {
    color: '#b6bac2',
    fontSize: 15,
    maxWidth: 300,
    marginBottom: 45,
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
  forgotPsText: {
    color: btnBackgroundClr,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'right',
    margin: 10,
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
    marginBottom: 30,
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
  bootomSheet: {
    padding: 20,
    marginBottom: 20,
  },
  verificationCodeHeadText: {
    fontSize: 25,
    color: '#0b111f',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '600',
  },
});

export default Login;
