import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import SideMenu from '../sideMenu/sideMenu.component.js';
import { setCurrentTitle, logOut } from '../../redux/actions/actions.js';
import styles from '../../styles/styles.js';
import Menu from '../menu/menu.js';
import Graphs from '../graphs/graphs.js'

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const statusBarHeight = StatusBar.currentHeight;
const S = styles;

class Home extends Component {
  handleLogout = () => {
      this.props.logOut();
      this.props.navigation.navigate('AuthenticationFlow');
  }
  render(){
    this.props.setHeaderTitle('DASHBOARD');
    return (
        <View style={{flexDirection: 'row', position: 'absolute', paddingLeft: 10, paddingRight: 10, height:  screenHeight, width: screenWidth, paddingTop: screenHeight/13+statusBarHeight, backgroundColor: '#F7F8FA'}}>
        
          <ScrollView style={{flex: 1}}>
            <View style={S.intro}>
              <Text style={S.intro_welcome}>
                Velkommen til dit dashboard,
              </Text>
              <Text style={S.intro_welcome_span}>
                {this.props.user.nickname}
              </Text>
              <Text style={S.intro_date}>
                Fredag d. 12 maj 2019
              </Text>
            </View>
            <View style={{height: 340, width: '100%', marginTop: 20}}>
              <Menu />
            </View>
            <View style={{height: 536, width: '100%', marginTop: 20, }}>
              <Graphs />
            </View>
            <View style={{height: 536, width: '100%', marginTop: 20, }}>
              <Graphs />
            </View>
            <View style={{height: 536, width: '100%', marginTop: 20, }}>
              <Graphs />
            </View>
          </ScrollView>
        </View>
    );
  }
};

mapDispatchToProps = dispatch => {
  return {
    setHeaderTitle: (title) => {
      dispatch(setCurrentTitle(title));
    },
    logOut: () => {
      dispatch(logOut())
    }
  }
} 
mapStateToProps = state => {
  return {
    sideMenuIsVisible: state.users.sideMenuIsVisible,
    userData: state.users.userData,
    user: state.users.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Home));