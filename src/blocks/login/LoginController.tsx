import {Alert} from 'react-native';
import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface UserData {
  id: string;
  username: string;
  emailOrNum: string;
  password: string;
}
interface IProps {
  navigation?: any;
}
interface IState {
  emailOrNum: string;
  forgotEmailOrNum: string;
  password: string;
  focusedInput: null | string;
  isShowPs: boolean;
  errorMsg: string;
  usersLogData: UserData[];
  isEmailMatch: boolean;
  isCreateNewPs: boolean;
  password1: string;
  conformPassword: string;
  isShowConformPs: boolean;
  isShowPs1: boolean;
  matcheEmail: string;
}

export class LoginController extends Component<IProps, IState> {
  state = {
    emailOrNum: '',
    password: '',
    focusedInput: null,
    isShowPs: true,
    errorMsg: '',
    forgotEmailOrNum: '',
    usersLogData: [],
    isEmailMatch: false,
    isCreateNewPs: false,
    password1: '',
    conformPassword: '',
    isShowConformPs: false,
    isShowPs1: false,
    matcheEmail: '',
  };
  componentDidMount(): void {
    this.getData();
  }
  getData = async () => {
    const pastData: any = await AsyncStorage.getItem('userData');
    const prevData = JSON.parse(pastData);
    if (prevData === null) {
      Alert.alert('warning', 'null value in Async Storage');
    } else {
      this.setState({usersLogData: prevData, errorMsg: ''});
    }
  };
  RBSheet: any;
  onPressSendCode = () => {
    const {isEmailMatch} = this.state;
    if (isEmailMatch) {
      this.setState({isCreateNewPs: true});
    } else {
      this.setState({isCreateNewPs: false});
    }
  };
  onPressChangePassword = async () => {
    const {password1, conformPassword, matcheEmail, usersLogData} = this.state;
    if (password1 === conformPassword) {
      const filteredUser = usersLogData.map((each: UserData) => {
        if (each.emailOrNum === matcheEmail) {
          return {...each, password: conformPassword};
        }
        return each;
      });
      await AsyncStorage.setItem('userData', JSON.stringify(filteredUser));
      this.setState({password1: '', conformPassword: '', isCreateNewPs: false});
      this.getData();
      this.RBSheet.close();
    } else {
      Alert.alert('Warning', 'password is not match');
    }
  };

  onChangeForgotEmail = (text: string) => {
    const {usersLogData} = this.state;
    const filteredUser = usersLogData.filter(
      (each: UserData) => each.emailOrNum === text,
    );
    if (filteredUser.length !== 0) {
      this.setState({isEmailMatch: true, matcheEmail: text});
    } else {
      this.setState({isEmailMatch: false, matcheEmail: ''});
    }
    this.setState({forgotEmailOrNum: text});
  };

  componentDidUpdate() {
    this.props.navigation.addListener('focus', this.getData);
  }
  gotoHomePage = () => {
    const {usersLogData, emailOrNum, password} = this.state;
    if (emailOrNum === '') {
      this.setState({errorMsg: '*Please Enter Email or Number'});
    } else if (password === '') {
      this.setState({errorMsg: '*Please Enter Password'});
    } else {
      const filteredUser = usersLogData.filter(
        (each: UserData) =>
          each.emailOrNum === emailOrNum && each.password === password,
      );
      if (filteredUser.length === 0) {
        Alert.alert('Sorry', 'User Dose not Match');
        this.setState({errorMsg: '*Please Enter Valid User Details'});
      } else {
        // const userDetailes = filteredUser[0];
        this.setState({emailOrNum: '', password: '', errorMsg: ''});
        this.props.navigation.navigate('NavigtionBottom');
      }
    }
  };
}

export default LoginController;
