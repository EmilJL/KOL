import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Main from '../../components/main/main.component.js';
import Profile from '../../components/profile/profile.component.js';

const AppNavigatorMain = createMaterialBottomTabNavigator(
	{
	  Home: Main,
	  User: Profile
	}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

export default AppNavigatorMain;