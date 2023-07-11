import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {btnBackgroundClr} from '../../config/Config';
interface IProps {
  title: string;
  onPressBtn: () => void;
}
export class CustomButton extends Component<IProps> {
  render() {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          this.props.onPressBtn();
        }}>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: btnBackgroundClr,
    width: wp(90),
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    margin: 10,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default CustomButton;
