import {Component} from 'react';
import {BackHandler, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';
const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  // cancelText: 'Password', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
interface IProps {
  navigation?: any;
}
interface IState {
  indexImage: number;
  isFingerCaoncel: boolean;
}
export class OnboardSlidersController extends Component<IProps, IState> {
  state = {
    indexImage: 0,
    isFingerCaoncel: false,
  };
  componentDidMount(): void {
    this.fingerPrintAccess();
    setInterval(() => {
      const {indexImage} = this.state;
      if (indexImage === 2) {
        this.setState({indexImage: 0});
      } else {
        this.setState({indexImage: this.state.indexImage + 1});
      }
    }, 1000);
  }
  fingerPrintAccess = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate(
            'to demo this react-native component',
            optionalConfigObject,
          )
            .then((success: any) => {
              this.setState({isFingerCaoncel: false});
              console.log(success);
            })
            .catch((error: any) => {
              console.log('error', error);
              this.setState({isFingerCaoncel: true});
              BackHandler.exitApp();
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
  };
  gotoRegister = () => {
    this.props.navigation.navigate('Register');
  };
  componentDidUpdate(): void {
    if (this.state.isFingerCaoncel) {
      console.log('cancel finger');
      this.fingerPrintAccess();
    }
  }
}

export default OnboardSlidersController;
