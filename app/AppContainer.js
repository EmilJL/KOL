import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './components/main/main.component.js';
import Profile from './components/profile/profile.component.js';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


const AppNavigator = createMaterialBottomTabNavigator(
	{
	  Home: Main,
	  User: Profile
	}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});
const AppContainer = createAppContainer(AppNavigator);
	

export default AppContainer;