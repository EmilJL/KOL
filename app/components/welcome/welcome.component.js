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
  ImageBackground,
  Dimensions,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { authenticateUser } from '../../redux/actions/actions.js';
import NewUser from './newUser.component.js';
import ForgotInfo from './forgotInfo.component.js';

class Welcome extends Component{
	state={
		newUserVisible: false,
		logInVisible: false,
		forgotInfoVisible: false,
	}
	handleToggleVisibility = (type) => {
		switch (type) {
			case 'newUser':
				this.setState({newUserVisible: !(this.state.newUserVisible), logInVisible: false, forgotInfoVisible: false});
				break;
			case 'logIn':
				this.setState({newUserVisible: false, logInVisible: !(this.state.logInVisible), forgotInfoVisible: false});
				break;
			case 'forgotInfo':
				this.setState({newUserVisible: false, logInVisible: false, forgotInfoVisible: !(this.state.forgotInfoVisible)});
				break;
			default:
				break;
		}
	}
  	authenticationHandler = () => {
  		console.log(this.props.loggedIn);
  		this.props.auth(true);
  		console.log(this.props.loggedIn);
  	}

	render(){
		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
		console.log(screenHeight);
		if (this.state.newUserVisible === true) {
			return(
				<NewUser toggleVisibility={(type) => this.handleToggleVisibility(type)}/>
			);
		}
		else if (this.state.logInVisible === true) {
			return(
				<ForgotInfo toggleVisibility={(type) => this.handleToggleVisibility(type)}/>
			);
		}
		else if (this.state.forgotInfoVisible === true){
			return(
				<ForgotInfo toggleVisibility={(type) => this.handleToggleVisibility(type)}/>
			);
		}
		else{
			return(
				<ImageBackground resizeMode='contain' source={require('../../assets/welcomeBG.png')} style={{width: screenWidth, height: screenHeight}}>
					<View style={{height: screenHeight/4.35, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: screenHeight/15}}>
						<View style={{flex: 4, justifyContent: 'space-between', alignItems: 'center'}}>
							<TouchableNativeFeedback onPress={() => {this.authenticationHandler()}}>
								<View style={{justifyContent: 'center', alignItems: 'center', height: '40%', width: screenWidth*0.54, borderWidth: 2, borderColor: 'black', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54}}>
									<Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
										Log ind
									</Text>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => {this.handleToggleVisibility('newUser')}}>
								<View style={{justifyContent: 'center', alignItems: 'center', height: '40%', marginBottom: screenHeight/75, width: screenWidth*0.54, borderWidth: 2, borderColor: 'black', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54}}>
									<Text style={{fontSize: 17, color: 'grey', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5}}>
										Opret bruger
									</Text>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{flex: 0.8}}>
							<TouchableNativeFeedback onPress={() => {this.handleToggleVisibility('forgotInfo')}}>
								<View style={{justifyContent: 'center', alignItems: 'center', width: screenWidth*0.54, flex: 1}}>
									<Text style={{fontSize: 12, color: 'lightgrey', textAlign: 'center', letterSpacing: 0.5, textDecorationLine: 'underline'}}>
										Glemt adgangskode?
									</Text>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>
				</ImageBackground>
			);
		}
		
	}
}

const mapDispatchToProps = dispatch => {
  return {
    auth: (success) => {
      dispatch(authenticateUser(success))
    }
  }
}

export default connect(null, mapDispatchToProps)(Welcome);