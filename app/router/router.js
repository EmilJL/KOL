import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import TabIcon from '../components/tabIcons/tabicon.component.js';
import TabBar from '../components/tabBar/tabBar.component.js';
import {
	InboxScreen,
	GraphsScreen,
	HomeScreen,
	CalendarScreen,
	ProfileScreen
} from '../screens';

const Router = createBottomTabNavigator(
	{
		Inbox: {
			screen: InboxScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="email" size={35} color={tintColor} />
			}
		},
		Grafer: {
			screen: GraphsScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <TabIcon name="bar-graph" size={35} color={tintColor} />
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
				tabBarIcon: ({tintColor}) => <TabIcon name="calendar" size={35} color={tintColor} />
			}
		},
	  	Profil: {
		  	screen: ProfileScreen,
		  	navigationOptions: {
		  		tabBarIcon: ({tintColor}) => <TabIcon name="user" size={35} color={tintColor} />
		  	}
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