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
  Image
} from 'react-native';
import { DrawerActions } from 'react-navigation'
import { setCurrentTitle } from '../../redux/actions/actions.js';
import { logOut } from '../../redux/actions/actions.js';
import Icon from 'react-native-vector-icons/AntDesign';

class Header extends Component {
    handleLogout = () => {
      this.props.logOut();
      this.props.navigation.navigate('AuthenticationFlow');
    }
    handleBurgerMenuClick = () => {
         return this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }    
    render(){
        const screenHeight = Math.round(Dimensions.get('window').height);
        const screenWidth = Math.round(Dimensions.get('window').width);
        const styleNotifications = this.props.notifications ? (this.props.notifications.length>0 ? {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'red'} : {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}) : {flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'};
        if (this.props.navigation.state.routeName != 'AuthenticationFlow') {
            if(this.props.navigation.state.routes[1].isDrawerOpen){
              return (
              <View style={{position: 'absolute', top: 0, borderBottomWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: screenHeight/13, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                
                <TouchableNativeFeedback onPress={() => this.handleBurgerMenuClick()}>
                  <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}}>
                    <View style={{marginLeft: '20%', paddingTop: '5%'}}>
                      <Icon color={'black'} name={'close'} size={25} />
                    </View>
                  </View>
                </TouchableNativeFeedback>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                  <Text style={{fontSize: 14, textAlign: 'center'}}>
                   MENU
                  </Text>
                </View>

                <TouchableNativeFeedback onPress={() => console.log(this.props.notifications)}>
                  <View style={styleNotifications}>
                      <Image style={{width: '50%', marginLeft: '25%', marginTop: '12.5%'}} source={require('../../assets/notificationHeader.png')}/>
                  </View>
                </TouchableNativeFeedback>

              </View>
              );
            }
            else{
              return(
              <View style={{position: 'absolute', top: 0, borderBottomWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', width: screenWidth, height: screenHeight/13, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                
                <TouchableNativeFeedback onPress={() => this.handleBurgerMenuClick()}>
                  <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}}>
                    <Image style={{width: '27%', marginLeft: '27%', marginTop: '5%'}} source={require('../../assets/menuHeader.png')}/>
                  </View>
                </TouchableNativeFeedback>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                  <Text style={{fontSize: 14, textAlign: 'center'}}>
                  {this.props.currentTitle}
                  </Text>
                </View>

                <TouchableNativeFeedback onPress={() => console.log(this.props.notifications)}>
                  <View style={styleNotifications}>
                      <Image style={{width: '50%', marginLeft: '25%', marginTop: '12.5%'}} source={require('../../assets/notificationHeader.png')}/>
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
                <View style={{flex: 1.5, height: screenHeight/13, alignItems: 'center', justifyContent: 'center'}}>
                  <Image resizeMode='contain' style={{width: '30%'}} source={require('../../assets/backHeader.png')}/>
                </View>
              </TouchableNativeFeedback>

              <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                {this.props.title}
                </Text>
              </View>
              <View style={{flex: 1.5}}>
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