import React, {Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions
} from 'react-native';

class Profile extends Component {
	render() {
		const screenHeight = Math.round(Dimensions.get('window').height);
		const screenWidth = Math.round(Dimensions.get('window').width);
		return (
		      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'lightgrey', borderWidth: 2, borderColor: 'green', top: screenHeight/13}}>
		        		       <Text style={{textAlign: 'center', fontSize: 30}}>Profil</Text>
		      </View>
	  	);
	}
}

export default Profile;
