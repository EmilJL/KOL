import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
	LoginScreen,
	ForgotInfoScreen,
	NewUserScreen
} from '../screens';
import NewUser from '../components/welcome/newUser.component';
import ForgotInfo from '../components/welcome/forgotInfo.component';
import Login from '../components/welcome/login.component';
import Start from '../components/welcome/start.component';
import Header from '../components/header/header.component';

const AuthenticationNavigator = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		Start: {
			screen: Start,
			navigationOptions: {
				header: props => <Header notificationIsVisible={false} title={'LOG IND'} {...props} />
			}
		},
		ForgotInfo: {
			screen: ForgotInfoScreen,
			navigationOptions: {
				header: props => <Header notificationIsVisible={false} title={'GLEMT ADGANGSKODE'} {...props} />
			}
		},
		NewUser: {
			screen: NewUserScreen,
			navigationOptions: {
				header: props => <Header notificationIsVisible={false} title={'OPRET BRUGER'} {...props} />
			}
		}
	},
	{
		initialRouteName: 'Login',
		
	}
);

export default AuthenticationNavigator;