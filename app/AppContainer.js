import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './components/main/main.component.js';
import Profile from './components/profile/profile.component.js';


const AppNavigator = createStackNavigator(
	{
	  Home: Main,
	  User: Profile
	}
);
const AppContainer = createAppContainer(AppNavigator);
	

export default AppContainer;