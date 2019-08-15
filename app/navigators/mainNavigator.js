import React from 'react';
import { createStackNavigator} from "react-navigation";
import GetHelp from '../components/buttonMenu/getHelp.component.js';
import HelpOthers from '../components/buttonMenu/helpOthers.component.js';
import SendText from '../components/buttonMenu/sendText.component.js';
import Diary from '../components/buttonMenu/diary.component.js';

const MainNavigator = createStackNavigator(
	{
		GetHelp: {
			screen: GetHelp,
			navigationOptions: {
				header: null
			}
		},
		HelpOthers: {
			screen: HelpOthers,
			navigationOptions: {
				header: null
			}
		},
		SendText: {
			screen: SendText,
			navigationOptions: {
				header: null
			}
		},
		Diary: {
			screen: Diary,
			navigationOptions: {
				header: null
			}
		}
	}
);
export default MainNavigator;