import React from 'react';
import { createDrawerNavigator } from "react-navigation";
import SideMenu from '../components/sideMenu/sideMenu.component.js';
import Header from '../components/header/header.component';
import Router from '../router/router.js';
import DrawerContentComponent from '../components/drawerContent/drawerContent.component.js';
import {
  Dimensions
} from 'react-native';

 const screenHeight = Math.round(Dimensions.get('window').height);
 const screenWidth = Math.round(Dimensions.get('window').width);

const DrawerNavigator = createDrawerNavigator(
  {
     MainFlow: {
      	screen: Router,
      /*	navigationOptions: {
			     header: props => <Header {...props} />
		    }*/
    }
  },
  {
    hideStatusBar: false,
    drawerType: 'slide',
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: 'rgba(0,0,0,0)',
    contentComponent: DrawerContentComponent,
    drawerWidth: screenWidth*0.7,
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default DrawerNavigator;