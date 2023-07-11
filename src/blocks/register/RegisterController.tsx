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
  username: string;
  emailOrNum: string;
  password: string;
  focusedInput: null | string;
  isShowPs: boolean;
  errorMsg: string;
  usersData: UserData;
}

export class RegisterController extends Component<IProps, IState> {
  state = {
    username: '',
    emailOrNum: '',
    password: '',
    focusedInput: null,
    isShowPs: true,
    errorMsg: '',
    usersData: {
      id: '',
      username: '',
      emailOrNum: '',
      password: '',
    },
  };

  gotoVerification = () => {
    const {username, emailOrNum, password} = this.state;
    const contactsData = {
      id: new Date().toString(),
      username,
      emailOrNum,
      password,
    };
    if (username === '') {
      this.setState({errorMsg: '*Please Enter User Name'});
    } else if (emailOrNum === '') {
      this.setState({errorMsg: '*Please Enter Email'});
    } else if (password === '') {
      this.setState({errorMsg: '*Please Enter Password'});
    } else if (password.length <= 3) {
      this.setState({errorMsg: '*Please Give Password More them 3 letters'});
    } else {
      this.setState(
        {
          usersData: contactsData,
          username: '',
          password: '',
          errorMsg: '',
        },
        () => {
          this.setData();
        },
      );
    }
  };

  setData = async () => {
    const {usersData, emailOrNum} = this.state;
    const pastData: any = await AsyncStorage.getItem('userData');
    const prevData: UserData[] = JSON.parse(pastData);
    const otp = Math.ceil(Math.random() * 100000);
    if (prevData === null) {
      await AsyncStorage.setItem('userData', JSON.stringify([usersData]));
      this.setState({emailOrNum: ''});
      Alert.alert('Congrats', 'user Successfully Register');
      this.props.navigation.navigate('Verification', {
        ...usersData,
        otpNum: otp,
      });
    } else {
      const filteredUser = prevData.filter(
        (each: UserData) => each.emailOrNum === emailOrNum,
      );
      if (filteredUser.length !== 0) {
        this.setState({errorMsg: '*Email already Exist', emailOrNum: ''});
      } else {
        const newData = [...prevData, usersData];
        this.setState({errorMsg: ''});
        await AsyncStorage.setItem('userData', JSON.stringify(newData));
        Alert.alert('Congrats', 'user Successfully Register');
        this.props.navigation.navigate('Verification', {
          ...usersData,
          otpNum: otp,
        });
      }
    }
  };
}

export default RegisterController;
