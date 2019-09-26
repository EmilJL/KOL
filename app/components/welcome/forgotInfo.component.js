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
import TopBlue from '../../assets/topStart.svg';
import TopDudes from '../../assets/topStartDudes.svg';

class ForgotInfo extends Component{
  state={
    email: ''
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
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20}}>
            <TopBlue style={{top: -485}} />
            <TopDudes width={screenWidth+5} height={311} style={{left: 0, top: 80, position: 'absolute'}} />
           
              <View style={{height: 145, top: 405, width: '100%', position: 'absolute'}}>
                <Text style={{textAlign: 'center', flex: 1.2, color: 'grey', fontSize: 12}}>Indtast din e-mail for at gendanne dit password.</Text>
                <View style={{height: 50, marginTop: 15}}>
                  <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next' onChangeText={(value) => this.setState({email: value})} placeholder='Indtast email' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStyleName]}/>
                </View>
                <TouchableNativeFeedback style={{}} onPress={() => {this.handleForgotInfoClick()}}>
                  <View style={{justifyContent: 'center', alignItems: 'center', height: 50, width: '100%', marginTop: 15, backgroundColor: '#565BF6', borderRadius: 8}}>
                    <Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
                      Gendan
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>               
          </View>
        
        </ScrollView>       
    );
  }
}

export default withNavigation(ForgotInfo);