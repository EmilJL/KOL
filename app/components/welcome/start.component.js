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
import { connect } from 'react-redux';
import { authenticateUser } from '../../redux/actions/actions.js';
import TopBlue from '../../assets/topStart.svg';
import TopDudes from '../../assets/topStartDudes.svg';

const S = StyleSheet.create({
  inputValid: {borderColor: '#565BF6'},
  inputInvalid: {borderColor: 'red'},
  inputInFocus: {borderColor: 'black'},
  inputNotInFocus: {borderColor: 'grey'},
  inputFontValid: {color: '#565BF6'},
  inputFontInvalid: {color: 'red'},
  inputFontInFocus: {color: 'black'},
  inputFontNotInFocus: {color: 'grey'}
});

class Start extends Component{
  state={
    email: '',
    password: '',
    inputStyleEmail: {},
    inputStylePassword: {}
  }

  handleLogin = () => {
    this.props.authenticate();
    this.props.navigation.navigate('MainFlow');
  }

  handleTextInput = (input, type) => {
      switch(type){
        case 'email':
          return this.setState({email: input})
        case 'password':
          return this.setState({password: input})
        default:
          return null
      }
    }

	render(){
    

		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    
		return(
				<ScrollView style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
          <TopBlue style={{top: -485}} />
            <TopDudes width={screenWidth+5} height={311} style={{left: 0, top: 80, position: 'absolute'}} />
            <View style={{top: 425, height: 50, width: '100%', position: 'absolute'}}>
              <View style={{height: 99, width: '100%', marginTop: -10}}>
              <Text style={[{height: 14, width: '100%', fontSize: 12, color: '#AEACBE', fontWeight: 'bold'}]}>BRUGERNAVN</Text>
              <View style={{height: 50, marginTop: 15}}>
                <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next' onChangeText={(value) => this.setState({email: value})} placeholder='Indtast brugernavn' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStyleName]}/>
              </View>
              <View style={{height: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign: 'right', alignSelf: 'stretch', fontSize: 10, height: 12, width: '100%', color: 'red', paddingRight: 2}}>{this.state.errorTextName}</Text>
              </View>           
            </View>
             <View style={{height: 99, width: '100%'}}>
              <Text style={[{height: 14, width: '100%', fontSize: 12, color: '#AEACBE', fontWeight: 'bold'}]}>PASSWORD</Text>
              <View style={{height: 50, marginTop: 15}}>
                <TextInput secureTextEntry={true} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next' onChangeText={(value) => this.setState({password: value})} placeholder='Indtast password' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStyleName]}/>
              </View>
              <View style={{height: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign: 'right', alignSelf: 'stretch', fontSize: 10, height: 12, width: '100%', color: 'red', paddingRight: 2}}>{this.state.errorTextName}</Text>
              </View>           
            </View>
              <TouchableNativeFeedback style={{}} onPress={() => {this.handleCreateUser()}}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', borderRadius: 8, backgroundColor: '#565BF6', marginTop: 12}}>
                  <Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
                    Log ind
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={{marginTop: 35, width: '100%', height: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('ForgotInfo')}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: screenWidth*0.54, flex: 1}}>
                      <Text style={{fontSize: 12, opacity: 0.3, textAlign: 'center', letterSpacing: 0.5, textDecorationLine: 'underline'}}>
                        Glemt adgangskode?
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
          </View>
        </ScrollView>
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      dispatch(authenticateUser(true));
    }
  }
}


export default connect(null, mapDispatchToProps)(withNavigation(Start));