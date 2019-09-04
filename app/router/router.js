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
		Home: {
		  	screen: HomeScreen,
		  	navigationOptions: {
		  		tabBarIcon: ({tintColor}) => <TabIcon name="home" size={screenHeight/20} color={tintColor} />
	  		}
		},
		Inbox: {
			screen: InboxScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="box" size={screenHeight/20} color={tintColor} />
			}
		},
		
		Grafer: {
			screen: GraphsScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="bar-graph" size={screenHeight/20} color={tintColor} />
			}
		},
	  	Kalender: {
		  	screen: CalendarScreen,
		  	navigationOptions: {
		  		tabBarIcon: ({tintColor}) => <TabIcon name="calendar" size={screenHeight/20} color={tintColor} />
		  	}
		},
		MainNavigator: {
			screen: MainNavigator
		},
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