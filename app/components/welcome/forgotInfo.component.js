import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  Modal,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { normalize, schema } from 'normalizr';
import fetch from 'cross-fetch';

class ForgotInfo extends Component{
  state={
    email: '',
    password: '',
    inputStyleEmail: {},
    inputStylePassword: {}
  }

  handleForgotInfoClick = () => {
    return fetch('https://my.kolapp.dk/wp-json/wp/v2/users/lostpassword', {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          user_login: this.state.email
        }),
    })
    
  }


  render(){
    

    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    
    return(
        <View style={{width: '100%', height: screenHeight*0.3-statusBarHeight, position: 'absolute', bottom: screenHeight*0.6, paddingLeft: '6%', paddingRight: '6%', bottom: 0, marginBottom: '15%'}}>
          <View style={{flex: 1,  marginBottom: '5%'}}>
            <Text style={{textAlign: 'center', flex: 1.2, color: 'grey', fontSize: 12}}>Indtast din e-mail for at gendanne dit password.</Text>
            <TextInput autoFocus={true} onChangeText={(value) => this.setState({email: value})} placeholder='Indtast email' placeholderTextColor='lightgrey' style={{flex: 1, borderRadius: 5, width: '100%', borderColor: 'grey', borderWidth: 2, paddingLeft: '5%'}}/>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 2, marginTop: '-5%'}}>
            <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('Login')}}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: screenWidth*0.12, width: screenWidth*0.54, backgroundColor: '#565BF6', borderBottomLeftRadius: screenWidth*0.54, borderTopLeftRadius: screenWidth*0.54, borderBottomRightRadius: screenWidth*0.54, borderTopRightRadius: screenWidth*0.54}}>
                  <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                    Gendan
                  </Text>
                </View>
            </TouchableNativeFeedback>
          </View>
        </View>           
    );
  }
}

export default withNavigation(ForgotInfo);