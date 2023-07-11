/* eslint-disable @typescript-eslint/no-unused-vars */
import {Component} from 'react';
import {Alert} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
interface IProps {
  route?: any;
  navigation?: any;
}
interface IState {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  isResend: string;
}
export class VerificationController extends Component<IProps, IState> {
  state = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    isResend: '',
  };
  RBSheet: any;
  componentDidMount(): void {
    this.setOtpFun();
  }
  setOtpFun = () => {
    const data = this.props.route.params;
    const otpVal = data.otpNum;
    const otpValue = otpVal.toString();
    this.setState({
      otp1: otpValue[0],
      otp2: otpValue[1],
      otp3: otpValue[2],
      otp4: otpValue[3],
    });
  };
  onPressResendOtp = () => {
    const otp = Math.ceil(Math.random() * 100000);
    const otpVal = otp.toString();
    this.setState({
      otp1: otpVal[0],
      otp2: otpVal[1],
      otp3: otpVal[2],
      otp4: otpVal[3],
      isResend: otpVal,
    });
  };
  onPressGotoHome = () => {
    this.props.navigation.navigate('NavigtionBottom');
  };
  onPressSubmit = () => {
    const {isResend, otp1, otp2, otp3, otp4} = this.state;
    if (isResend === '') {
      const data = this.props.route.params;
      const otpVal = data.otpNum;
      const otpValue = otpVal.toString();
      if (
        otp1 === otpValue[0] &&
        otp2 === otpValue[1] &&
        otp3 === otpValue[2] &&
        otp4 === otpValue[3]
      ) {
        this.RBSheet.open();
      } else {
        Alert.alert('Warning', 'invalid OTP');
      }
    } else {
      if (
        otp1 === isResend[0] &&
        otp2 === isResend[1] &&
        otp3 === isResend[2] &&
        otp4 === isResend[3]
      ) {
        this.RBSheet.open();
      } else {
        Alert.alert('Warning', 'invalid OTP');
      }
    }
  };
}

export default VerificationController;
