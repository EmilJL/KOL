import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  Modal,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

const S = StyleSheet.create({
});

class CreateUserStepTwo extends Component{
  state={
  }
	render(){
    

		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    
		return(
      <View style={{flex: 1, backgroundColor: 'red'}}>
      </View>
    );
	}
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password) => {
      dispatch(requestCreateUser(email, password));
    }
  }
}


export default CreateUserStepTwo;