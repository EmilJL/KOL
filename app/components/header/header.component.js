import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  Animated
} from 'react-native';
import { DrawerActions } from 'react-navigation'
import { setCurrentTitle } from '../../redux/actions/actions.js';
import { logOut } from '../../redux/actions/actions.js';
import Icon from 'react-native-vector-icons/AntDesign';
import BurgerMenu from '../../assets/burgerMenu.svg';
import Bell from '../../assets/bell.svg';
import Back from '../../assets/back.svg';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

class Header extends Component {

    render(){
        
        const styleNotifications = this.props.notifications ? (this.props.notifications.length>0 ? {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'red'} : {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}) : {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'};
        if (this.props.navigation.state.routeName === 'AuthenticationFlow') {
              return(
              <View style={{borderBottomWidth: this.props.isVisible ? 1 : 0, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: this.props.isVisible ? screenHeight/13 : 0, zIndex: 4, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('Login')}}>
                  <View style={{flex: 1.5, height: screenHeight/13, alignItems: 'center', justifyContent: 'center', marginBottom: -3}}>
                    {this.props.isVisible ? <Back width='30%' /> : null}
                  </View>
                </TouchableNativeFeedback>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                  <Text style={{fontSize: 14, textAlign: 'center', marginBottom: -3}}>
                  {this.props.isVisible ? this.props.title : ''}
                  </Text>
                </View>
                <View style={{flex: 1.5, marginBottom: -3}}>
                </View>
              </View>
            );
        }
        else{
          return(
              <View style={{borderBottomWidth: this.props.isVisible ? 1 : 0, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: this.props.isVisible ? screenHeight/13 : 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                  <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%', marginBottom: -3}}>
                     {this.props.isVisible ? <BurgerMenu width={screenHeight/20} style={{marginTop: '5%', marginLeft: '20%'}} /> : null}
                  </View>
                </TouchableNativeFeedback>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                  <Text style={{fontSize: 14, textAlign: 'center', marginBottom: -3}}>
                    {this.props.isVisible ? this.props.currentTitle : ''}
                  </Text>
                </View>
                <TouchableNativeFeedback onPress={() => console.log(this.props.notifications)}>
                  <View style={[styleNotifications, {marginBottom: -3}]}>
                    {this.props.isVisible ? <Bell width={screenHeight/20} style={{marginTop: '5%', marginLeft: '25%'}} /> : null}
                  </View>
                </TouchableNativeFeedback>
              </View>
            ); 
        }
    }
}

const mapStateToProps = state => {
  return{
    currentTitle: state.nav.currentTitle,
    notifications: state.users.notifications,
    isLoggedIn: state.users.isLoggedIn,
    isVisible: state.users.headerIsVisible
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut())
    },
    nav: (title) => {
      dispatch(setCurrentTitle(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);