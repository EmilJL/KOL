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
  Image,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { authenticateWithToken } from '../../redux/actions/actions.js';
import LoadingComponent from '../loading/loadingComponent.js';


class Login extends Component {
	handleLogin = () => {
	}
	componentDidMount() {
	/*	this.props.navigation.navigate('DrawerFlow');*/
	/*	this.props.auth();*/
	}
	render(){
		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
		const statusbarHeight = StatusBar.currentHeight;
		if (false) {
			return (
				<LoadingComponent isLoggedIn={true} navigation={this.props.navigation} token={this.props.token} path={'DrawerFlow'} />
			);
		}
		else{
			return(
				<View style={{height: screenHeight-statusbarHeight, width: screenWidth}}>
					<ImageBackground resizeMode='cover' source={require('../../assets/welcome.png')} style={{flex: 1}}>
						<View style={{alignSelf: 'center', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
							<Image resizeMode='contain' source={require('../../assets/welcomeLogo.png')} style={{width: '14%'}} />
							<Text style={{marginLeft: screenWidth/24, fontSize: 26, fontWeight: 'bold', color: '#565BF6'}}>
								KOL App
							</Text>
						</View>
						<View style={{flex: 4}}>
							<View style={{height: screenHeight/4.35, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: screenHeight/15}}>
								<View style={{flex: 4, justifyContent: 'space-between', alignItems: 'center'}}>
									<TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('Start')}}>
										<View style={{justifyContent: 'center', alignItems: 'center', height: '40%', width: screenWidth*0.54, backgroundColor: '#565BF6', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54}}>
											<Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
												Log ind
											</Text>
										</View>
									</TouchableNativeFeedback>
									<TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('NewUser')}}>
										<View style={{justifyContent: 'center', alignItems: 'center', height: '40%', marginBottom: screenHeight/75, width: screenWidth*0.54, borderWidth: 1.5, borderColor: 'grey', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54, backgroundColor: 'white'}}>
											<Text style={{fontSize: 14, color: 'grey', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
												Opret bruger
											</Text>
										</View>
									</TouchableNativeFeedback>
								</View>
								<View style={{flex: 0.8}}>
									<TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('ForgotInfo')}}>
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
				</View>
			);
		}
	}
}


const mapDispatchToProps = dispatch => {
  return {
    auth: (success) => {
      dispatch(authenticateWithToken())
    }
  }
}
const mapStateToProps = state => {
	return {
		isLoggedIn: state.users.isLoggedIn,
		token: state.users.token
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);