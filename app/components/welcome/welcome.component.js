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
  Button,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { authenticateUser } from '../../redux/actions/actions.js';
import NewUser from './newUser.component.js';
import ForgotInfo from './forgotInfo.component.js';
import Header from '../header/header.component.js';

class Welcome extends Component{
	state={
		newUserVisible: false,
		logInVisible: false,
		forgotInfoVisible: false,
		currentComponent: '',
		title: ''
	}
	handleToggleVisibility = (title) => {
		switch (title) {
			case 'OPRET BRUGER':
				console.log(title);
				(!this.state.newUserVisible) ? this.setState({currentComponent: <NewUser/>, title: 'OPRET BRUGER', newUserVisible: true}) : this.setState({newUserVisible: false, title: '', currentComponent: ''});
				break;
			case 'LOG IND':
				(!this.state.logInVisible) ? this.setState({currentComponent: <ForgotInfo/>, title: 'LOG IND', logInVisible: true}) : this.setState({logInVisible: false, title: '', currentComponent: ''});
				break;
			case 'GLEMT KODE':
				(!this.state.forgotInfoVisible) ? this.setState({currentComponent: <ForgotInfo/>, title: 'GLEMT KODE', forgotInfoVisible: true}) : this.setState({forgotInfoVisible: false, title: '', currentComponent: ''});
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
		const title = this.state.title;
		console.log(screenHeight);
		if (title === '') {
			return(
				
				<ImageBackground resizeMode='cover' source={require('../../assets/welcome.png')} style={{marginTop: -screenHeight/12, height: screenHeight*0.9}}>
					<View style={{alignSelf: 'center', position: 'absolute', top: screenHeight/12, width: screenWidth, height: screenHeight/6, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
						<Image resizeMode='contain' source={require('../../assets/welcomeLogo.png')} style={{width: screenWidth/9}} />
						<Text style={{marginLeft: screenWidth/24, fontSize: 26, fontWeight: 'bold', color: 'blue'}}>
							KOL App
						</Text>
					</View>
					<View style={{flex: 1}}>
						<View style={{marginBottom: -screenHeight/6, height: screenHeight/4.35, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: screenHeight/15}}>
							<View style={{flex: 4, justifyContent: 'space-between', alignItems: 'center'}}>
								<TouchableNativeFeedback onPress={() => {this.authenticationHandler()}}>
									<View style={{justifyContent: 'center', alignItems: 'center', height: '40%', width: screenWidth*0.54, backgroundColor: 'blue', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54}}>
										<Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
											Log ind
										</Text>
									</View>
								</TouchableNativeFeedback>
								<TouchableNativeFeedback onPress={() => {this.handleToggleVisibility('OPRET BRUGER')}}>
									<View style={{justifyContent: 'center', alignItems: 'center', height: '40%', marginBottom: screenHeight/75, width: screenWidth*0.54, borderWidth: 1.5, borderColor: 'grey', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54}}>
										<Text style={{fontSize: 14, color: 'grey', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
											Opret bruger
										</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
							<View style={{flex: 0.8}}>
								<TouchableNativeFeedback onPress={() => {this.handleToggleVisibility('GLEMT KODE')}}>
									<View style={{justifyContent: 'center', alignItems: 'center', width: screenWidth*0.54, flex: 1}}>
										<Text style={{fontSize: 12, color: 'grey', textAlign: 'center', letterSpacing: 0.5, textDecorationLine: 'underline'}}>
											Glemt adgangskode?
										</Text>
									</View>
								</TouchableNativeFeedback>
							</View>
						</View>
					</View>
				</ImageBackground>
			);
		}
		else{
			return(
				<View style={{flex: 1}}>
					<Header title={title} leftButtonPress={() => this.handleToggleVisibility(title)} notificationIsVisible={false}/>
					{this.state.currentComponent}
				</View>
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