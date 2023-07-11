import {Component} from 'react';
interface IProps {
  navigation?: any;
}
export class SplashController extends Component<IProps> {
  componentDidMount(): void {
    this.setInterFun();
  }
  setInterFun = () => {
    setTimeout(() => {
      this.props.navigation.replace('OnboardSliders');
    }, 1500);
  };
}

export default SplashController;
