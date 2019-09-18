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
  Image,
  Animated
} from 'react-native';
import { DrawerActions } from 'react-navigation'
import { setCurrentTitle } from '../../redux/actions/actions.js';
import { logOut } from '../../redux/actions/actions.js';
import Icon from 'react-native-vector-icons/AntDesign';
import BurgerMenu from '../../assets/burgerMenu.svg';
import Bell from '../../assets/bell.svg';

const screenHeight = Math.round(Dimensions.get('window').height);
        const screenWidth = Math.round(Dimensions.get('window').width);

class Header extends Component {
    state={
      drawerOpen: false,
      leftMargin: 0
    }
    handleLogout = () => {
      this.props.logOut();
      this.props.navigation.navigate('AuthenticationFlow');
    }
    handleBurgerMenuClick = () => {
      if (this.state.drawerOpen) {
        this.setState({drawerOpen: false, leftMargin: 0})
        return this.props.navigation.dispatch(DrawerActions.closeDrawer())
      }
      else{
        this.setState({drawerOpen: true, leftMargin: screenWidth*0.715})
        return this.props.navigation.dispatch(DrawerActions.openDrawer())
      }
    }    
    render(){
        
        const styleNotifications = this.props.notifications ? (this.props.notifications.length>0 ? {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'red'} : {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}) : {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'};
        if (this.props.navigation.state.routeName != 'AuthenticationFlow') {
            if(this.state.drawerOpen){
              return (
              <View style={{marginLeft: this.state.leftMargin, position: 'absolute', top: 0, borderBottomWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: screenHeight/13, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                
                <TouchableNativeFeedback onPress={() => this.handleBurgerMenuClick()}>
                  <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%', marginBottom: -3}}>
                    <View style={{marginLeft: '20%', paddingTop: '5%'}}>
                      <Icon color={'black'} name={'close'} size={25} />
                    </View>
                  </View>
                </TouchableNativeFeedback>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 7, marginBottom: -3}}>
                  <Text style={{fontSize: 14, textAlign: 'center'}}>
                   MENU
                  </Text>
                </View>

                <TouchableNativeFeedback onPress={() => console.log(this.props.notifications)}>
                  <View style={[styleNotifications, {marginBottom: -3}]}>
                      <Bell width={screenHeight/20} style={{marginTop: '5%', marginLeft: '25%'}} />
                  </View>
                </TouchableNativeFeedback>

              </View>
              );
            }
            else{
              return(
              <View style={{position: 'absolute', top: 0, borderBottomWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: screenHeight/13, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                
                <TouchableNativeFeedback onPress={() => this.handleBurgerMenuClick()}>
                  <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%', marginBottom: -3}}>
                    <BurgerMenu width={screenHeight/20} style={{marginTop: '5%', marginLeft: '20%'}} />
                  </View>
                </TouchableNativeFeedback>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                  <Text style={{fontSize: 14, textAlign: 'center', marginBottom: -3}}>
                  {this.props.currentTitle}
                  </Text>
                </View>

                <TouchableNativeFeedback onPress={() => console.log(this.props.notifications)}>
                  <View style={[styleNotifications, {marginBottom: -3}]}>
                      <Bell width={screenHeight/20} style={{marginTop: '5%', marginLeft: '25%'}} />
                  </View>
                </TouchableNativeFeedback>

              </View>
            );
            }
            
          
        }
        
        else{
          console.log('yoYOO');
          return(
            <View style={{borderBottomWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: screenHeight/13, zIndex: 4, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('Login')}}>
                <View style={{flex: 1.5, height: screenHeight/13, alignItems: 'center', justifyContent: 'center', marginBottom: -3}}>
                  <Image resizeMode='contain' style={{width: '30%'}} source={require('../../assets/backHeader.png')}/>
                </View>
              </TouchableNativeFeedback>

              <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                <Text style={{fontSize: 14, textAlign: 'center', marginBottom: -3}}>
                {this.props.title}
                </Text>
              </View>
              <View style={{flex: 1.5, marginBottom: -3}}>
              </View>
            </View>
          );
        }
    }
}

const mapStateToProps = state => {
  return{
    currentTitle: state.nav.currentTitle,
    notifications: state.users.notifications,
    isLoggedIn: state.users.isLoggedIn
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