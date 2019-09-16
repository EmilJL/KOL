import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import GenericModal from '../modal/modal.component.js';

class SendText extends Component {

  render(){
    return (
      <View>
        <GenericModal type={'userQuestion'}/>
      </View>
    );
  }
};


export default SendText;