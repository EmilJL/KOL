import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import { Dimensions } from 'react-native';
import MainNavigator from '../navigators/mainNavigator.js';
import TabIcon from '../components/tabIcons/tabicon.component.js';
import TabBar from '../components/tabBar/tabBar.component.js';
import Header from '../components/header/header.component.js';
import {
	InboxScreen,
	GraphsScreen,
	HomeScreen,
	CalendarScreen,
	ProfileScreen
} from '../screens';

const screenHeight = Math.round(Dimensions.get('window').height);

const Router = createBottomTabNavigator(
	{
		Inbox: {
			screen: InboxScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="email" size={screenHeight/20} color={tintColor} />
			}
		},
		Grafer: {
			screen: GraphsScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="bar-graph" size={screenHeight/20} color={tintColor} />
			}
		},
		Home: {
		  	screen: HomeScreen,
		  	navigationOptions: {
		  		tabBarIcon: ({tintColor}) => <TabIcon name="home" size={0} color={tintColor} />,
		  		title: ''
	  		}
		},
		Kalender: {
			screen: CalendarScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="calendar" size={screenHeight/20} color={tintColor} />
			}
		},
	  	Profil: {
		  	screen: ProfileScreen,
		  	navigationOptions: {
		  		tabBarIcon: ({tintColor}) => <TabIcon name="user" size={screenHeight/20} color={tintColor} />
		  	}
		},
		MainNavigator: {
			screen: MainNavigator
		}
	},
	{
	    tabBarComponent: TabBar,
	    initialRouteName: 'Home',
	    tabBarOptions: {
	      activeTintColor: "blue",
	      inactiveTintColor: "grey",
	    }
  	}
);
export default Router;