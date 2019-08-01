import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Router } from '../router';
import { AuthenticationNavigator } from './authentication.navigator.js';
import { MainNavigator } from './main.navigator.js';
import Header from '../components/header/header.component';

const MainNavigator = createStackNavigator(
	{
		AuthenticationFlow: {
			screen: AuthenticationNavigator
		},
		MainFlow: {
			screen: MainNavigator,	
			navigationOptions: {
				header: (props) => <Header {...props}/>
			}
		}
	},
	{
	    initialRouteName: 'AuthenticationFlow'
  	}
);
export default MainNavigator;