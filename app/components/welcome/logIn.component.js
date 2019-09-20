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
import TopBlue from '../../assets/topStart.svg';
import TopDudes from '../../assets/topStartDudes.svg';
import Logo from '../../assets/logo.svg';
import SocialMediaLine from '../../assets/socialMediaLine.svg';
import GoogleCreate from '../../assets/googleCreate.svg';
import FBCreate from '../../assets/fbCreate.svg';

class Login extends Component {
	handleLogin = () => {
	}
	componentDidMount() {
		/*this.props.navigation.navigate('DrawerFlow');*/
		/*if (!this.props.forcedLogout) {
			this.props.auth();
		}*/
	}
	render(){
		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
		const statusbarHeight = StatusBar.currentHeight;
		if (this.props.isLoggedIn) {
			return (
				<LoadingComponent isLoggedIn={true} navigation={this.props.navigation} token={this.props.token} path={'DrawerFlow'} />
			);
		}
		else{
			return(
				<ScrollView style={{flex: 1}}>
				 	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
					<Logo width={'50%'} style={{top: 13, zIndex: 4}} />
					<TopBlue style={{top: -485}} />
					<TopDudes width={screenWidth+5} height={311} style={{left: 0, position: 'absolute', top: 80}} />
					<View style={{position: 'absolute', top: 425, height: 163, width: '100%'}}>
						<View style={{justifyContent: 'center', alignItems: 'center', height: 50, width: '100%'}}>
			                <TouchableNativeFeedback style={{}} onPress={() => {this.props.navigation.navigate('Start')}}>
			                  <View style={{borderWidth: 1, borderColor: 'rgba(65, 77, 85, 0.6)', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', borderRadius: 8, backgroundColor: 'white'}}>
			                    <Text style={{fontSize: 16, color: '#707070', textAlign: 'center', letterSpacing: 0.5, paddingBottom: '1%'}}>
			                      Log ind
			                    </Text>
			                  </View>
			                </TouchableNativeFeedback>
		                </View>
						<View style={{justifyContent: 'center', alignItems: 'center', height: 50, width: '100%', marginTop: 15}}>
							<TouchableNativeFeedback style={{}} onPress={() => {this.props.navigation.navigate('NewUser')}}>
							  <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', borderRadius: 8, backgroundColor: '#565BF6'}}>
							    <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
							      Opret bruger
							    </Text>
							  </View>
							</TouchableNativeFeedback>
						</View>
						<SocialMediaLine width={'100%'} style={{marginTop: 24}} />
					</View>
					<View style={{position: 'absolute', top: 583, marginTop: 24, height: 48, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
							<GoogleCreate height={'100%'} style={{marginRight: 5, borderWidth: 0.2, borderColor:'rgba(65, 77, 85, 0.6)'}} />
							<FBCreate height={'110%'} style={{marginLeft: 5}} />
					</View>
					</View>
				</ScrollView>
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
		token: state.users.token,
		forcedLogout: state.users.forcedLogout
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);