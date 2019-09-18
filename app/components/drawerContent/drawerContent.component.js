import React, {Fragment, Component} from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import DrawerItem from './drawerItem.component.js';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/actions.js';
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const statusbarHeight = StatusBar.currentHeight;

const DrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={[styles.container, {height: screenHeight-statusbarHeight}]} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.introInfo}>
          <View style={styles.profilePicWrapper}>
            <View style={[styles.status, S.statusOrange]}></View>
            <Image source={require('../../assets/testProfilePic.png')} style={styles.profilePic} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.profileName}>
              {props.user ? (props.user.nickname ? props.user.nickname : props.user.metadata.nickname) : null}
            </Text>
            <Text style={styles.currentDate}>
              Fredag d. 12 maj 2019
            </Text>
          </View>
      </View>
      <DrawerItem isInactive={true} navigation={props.navigation} title={'PROFIL'} iconName={'profile'} navPath={'NA'} />
      <DrawerItem isInactive={true} navigation={props.navigation} title={'VENNELISTE'} iconName={'friends'} navPath={'NA'} />
      <DrawerItem isInactive={true} navigation={props.navigation} title={'ALLE MEDLEMMER'} iconName={'members'} navPath={'NA'} />
      <DrawerItem isInactive={'no'} navigation={props.navigation} title={'UDFYLD SPØRGESKEMA'} iconName={'questionnaire'} navPath={'NA'} />
      <DrawerItem isInactive={true} navigation={props.navigation} title={'VEJRET'} iconName={'weather'} navPath={'NA'} />
      <DrawerItem isInactive={true} navigation={props.navigation} title={'INDSTILLINGER'} iconName={'settings'} navPath={'NA'} />
      <SafeAreaView style={{bottom: 0, position: 'absolute'}}>
        <DrawerItem isInactive={true} navigation={props.navigation} title={'TERMS OF AGREEMENT'} iconName={'terms'} navPath={'NA'} />
        <DrawerItem isInactive={'no'} logOut={() => props.logOut()} navigation={props.navigation} title={'LOG UD'} iconName={'logOut'} navPath={'NA'} />
      </SafeAreaView>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 20
  },
  introInfo: {
    borderBottomWidth: 1,
    borderColor: '#F6F6F7',
    flexDirection: 'row',
    height: 87,
    alignItems: 'center',
  },
  profilePicWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  status: {
    height: 12,
    width: 12,
    position: 'absolute',
    top: -6,
    right: -6,
    borderWidth: 2,
    borderColor: '#F1F5F8',
    borderRadius: 8,
    zIndex: 40,
    backgroundColor: '#FDCA40',
  },
  statusRed: {
    backgroundColor: 'red',
  },
  statusGreen: {
    backgroundColor: 'green',
  },
  statusOrange: {
    backgroundColor: '#FDCA40',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  profileName: {
    fontSize: 16,
    color: '#414D55',
    lineHeight: 20,
  },
  currentDate: {
    fontSize: 12,
    color: '#AEACBE'
  },
});

const mapDispatchToProps = dispatch => {
  return {
    logOut: (success) => {
      dispatch(logOut())
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContentComponent);