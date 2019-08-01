import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Router from '../router/router.js';
import AuthenticationNavigator from './authentication.navigator.js';
import Header from '../components/header/header.component';

const TopNavigator = createStackNavigator(
	{
		AuthenticationFlow: {
			screen: AuthenticationNavigator,
			navigationOptions: {
				header: null
			}
		},
		MainFlow: {
			screen: Router,	
			navigationOptions: {
				header: (props) => <Header notificationIsVisible={true} {...props}/>
			}
		}
	},
	{
	    initialRouteName: 'AuthenticationFlow'
  	}
);
export default createAppContainer(TopNavigator);