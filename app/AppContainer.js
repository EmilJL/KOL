import { createStackNavigator, createAppContainer } from "react-navigation";
import { Main } from './components/main/main.component.js';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Main
  }
});



export default AppNavigator;