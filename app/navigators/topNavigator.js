import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthenticationNavigator from './authentication.navigator.js';
import Header from '../components/header/header.component';
import Router from '../router/router.js';
import DrawerNavigator from './drawerNavigator.js';

const TopNavigator = createStackNavigator(
	{
		AuthenticationFlow: {
			screen: AuthenticationNavigator,
			navigationOptions: {
				header: null
			}
		},
		DrawerFlow: {
			screen: DrawerNavigator,
			navigationOptions: {
				header: props => <Header {...props} />
			}
		},
	},
	{
	    initialRouteName: 'AuthenticationFlow',
	    header: null
  	}
);
export default createAppContainer(TopNavigator);