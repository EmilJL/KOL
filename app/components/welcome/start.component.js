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
import { authenticateUser } from '../../redux/actions/actions.js';

class Start extends Component{
  state={
    email: '',
    password: '',
    inputStyleEmail: {},
    inputStylePassword: {}
  }

  handleLogin = () => {
    this.props.authenticate();
    this.props.navigation.navigate('MainFlow');
  }

  handleTextInput = (input, type) => {
      switch(type){
        case 'email':
          return this.setState({email: input})
        case 'password':
          return this.setState({password: input})
        default:
          return null
      }
    }

	render(){
    

		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    
		return(
				<View style={{width: '100%', height: screenHeight*0.4-statusBarHeight, position: 'absolute', bottom: screenHeight*0.3, paddingLeft: '6%', paddingRight: '6%', bottom: 0, marginBottom: '15%'}}>
          <View style={{flex: 1.2, marginTop: '5%'}}>
            <Text style={{flex: 1.2, color: 'grey', fontSize: 12}}>E-MAIL</Text>
            <TextInput keyboardType={'email-address'} autoFocus={true} onChangeText={(value) => this.handleTextInput(value, 'password')} placeholder='Indtast email' placeholderTextColor='lightgrey' style={{flex: 1, borderRadius: 8, width: '100%', borderColor: 'grey', borderWidth: 2, paddingLeft: '5%'}}/>
          </View>
          <View style={{flex: 1.2, marginTop: '5%'}}>
            <Text style={{flex: 1.2, color: 'grey', fontSize: 12}}>PASSWORD</Text>
            <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} onChangeText={(value) => this.handleTextInput(value, 'password')} placeholder='Indtast password' secureTextEntry={true} placeholderTextColor='lightgrey' style={{flex: 1, borderRadius: 8, width: '100%', borderColor: 'grey', borderWidth: 2, paddingLeft: '5%'}}/>
          </View>
          <View style={{flex: 1, marginTop: '5%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <TouchableNativeFeedback style={{width: '100%'}} onPress={() => {this.handleLogin()}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', height: screenWidth*0.15, backgroundColor: '#565BF6', borderBottomLeftRadius: 8, borderTopLeftRadius: 8, borderBottomRightRadius: 8, borderTopRightRadius: 8}}>
                  <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                    Log ind
                  </Text>
                </View>
            </TouchableNativeFeedback>
          </View>           
				</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      dispatch(authenticateUser(true));
    }
  }
}


export default connect(null, mapDispatchToProps)(withNavigation(Start));