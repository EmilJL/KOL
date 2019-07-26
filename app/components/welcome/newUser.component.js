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
  Modal
} from 'react-native';
import { connect } from 'react-redux';

class NewUser extends Component{
	render(){
		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
		console.log(screenHeight);
		return(
				<View style={{flex: 1}}>
				</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    newUser: (user) => {
      dispatch(createUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(NewUser);