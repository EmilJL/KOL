import { createBottomTabNavigator } from "react-navigation";
import Welcome from '../../components/welcome/welcome.component.js';
import NewUser from '../../components/welcome/newUser.component.js';

const AppNavigatorWelcome = createBottomTabNavigator(
	{
	  Welcome: Welcome,
	  NewUser: NewUser
	}, {
  initialRouteName: 'Welcome',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

export default AppNavigatorWelcome;