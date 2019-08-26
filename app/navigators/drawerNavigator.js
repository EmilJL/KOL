import React from 'react';
import { createDrawerNavigator } from "react-navigation";
import SideMenu from '../components/sideMenu/sideMenu.component.js';
import Header from '../components/header/header.component';
import Router from '../router/router.js';
import DrawerContentComponent from '../components/drawerContent/drawerContent.component.js';

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
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default DrawerNavigator;