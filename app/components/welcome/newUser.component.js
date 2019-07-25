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
					<TouchableNativeFeedback onPress={() => this.props.toggleVisibility('newUser')}>
						<View style={{alignSelf: 'center', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: '10%', width: screenWidth*0.54, borderWidth: 2, borderColor: 'black', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54, top: 0}}>
							<Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
								Tilbage
							</Text>
						</View>
					</TouchableNativeFeedback>
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