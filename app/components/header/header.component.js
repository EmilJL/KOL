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
import { logOut } from '../../redux/actions/actions.js';

const Header = ({navigation, notificationIsVisible}) => {

    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);
    console.log(navigation.state);
    if (notificationIsVisible) {

      return(
        <View style={{backgroundColor: 'white', width: screenWidth, height: screenHeight/13, zIndex: 4, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
          <TouchableNativeFeedback onPress={() => {this.props.logOut()}}>
            <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}}>
              <Image style={{width: '27%', marginLeft: '27%', marginTop: '12.5%'}} source={require('../../assets/menuHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

          <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              Blabla
            </Text>
          </View>

          <TouchableNativeFeedback onPress={() => {}}>
            <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}}>
                <Image style={{width: '50%', marginLeft: '25%', marginTop: '12.5%'}} source={require('../../assets/notificationHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

        </View>
      );

    }

    else{

      return(
        <View style={{borderBottomWidth: 1, borderColor: 'lightgrey', width: screenWidth, height: screenHeight/13, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
          <TouchableNativeFeedback onPress={() => {navigation.navigate('Login')}}>
            <View style={{flex: 1.5, height: screenHeight/13, alignItems: 'center', justifyContent: 'center'}}>
              <Image resizeMode='contain' style={{width: '30%'}} source={require('../../assets/backHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

          <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              blabla2
            </Text>
          </View>

          <View style={{flex: 1.5}}>
          </View>

        </View>
      );

    }
}

const mapStateToProps = state => {
  return{
    currentPage: state.nav.currentPage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);