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
import Header from '../components/header/header.component';

const AuthenticationNavigator = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		ForgotInfo: {
			screen: ForgotInfoScreen,
			navigationOptions: {
				header: props => <Header notificationIsVisible={false} {...props} />
			}
		},
		NewUser: {
			screen: NewUserScreen,
			navigationOptions: {
				header: props => <Header notificationIsVisible={false} {...props} />
			}
		}
	},
	{
		initialRouteName: 'Login',
		
	}
);

export default AuthenticationNavigator;