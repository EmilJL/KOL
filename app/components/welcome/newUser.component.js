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
import ImagePicker from 'react-native-image-crop-picker';
import { requestCreateUser } from '../../redux/actions/actions.js';
import LoadingComponent from '../loading/loadingComponent.js';

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

class NewUser extends Component{
  state={
    allValid: false,
    name: '',
    email: '',
    password: '',
    repeatedPassword: '',
    inputStyleName: S.inputNotInFocus,
    inputFontStyleName: S.inputFontNotInFocus,
    inputStyleEmail: S.inputNotInFocus,
    inputFontStyleEmail: S.inputFontNotInFocus,
    inputStylePassword: S.inputNotInFocus,
    inputFontStylePassword: S.inputFontNotInFocus,
    inputStyleRepeatedPassword: S.inputNotInFocus,
    inputFontStyleRepeatedPassword: S.inputFontNotInFocus,
    errorTextName: '',
    errorTextEmail: '',
    errorTextPassword: '',
    errorTextRepeatedPassword: '',
    image: {}
  }

  validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    var email = this.state.email;
    if(reg.test(email) === false) {
      this.setState({inputStyleEmail: S.inputInvalid, inputFontStyleEmail: S.inputFontNotInFocus, errorTextEmail: 'E-mail formatet er ugyldigt'})
      return false;
    }
    else {
      this.setState({inputStyleEmail: S.inputValid, inputFontStyleEmail: S.inputFontNotInFocus, errorTextEmail: ''});
      return true;
    }
  }
  validateAll = () => {
    var allValid = true;
    var inputStyleName = this.state.inputStyleName;
    var inputFontStyleName = this.state.inputFontStyleName;
    var inputStyleEmail = this.state.inputStyleEmail;
    var inputFontStyleEmail = this.state.inputFontStyleEmail;
    var inputStylePassword = this.state.inputStylePassword;
    var inputFontStylePassword = this.state.inputFontStylePassword;
    var inputStyleRepeatedPassword = this.state.inputStyleRepeatedPassword;
    var inputFontStyleRepeatedPassword = this.state.inputFontStyleRepeatedPassword;
    if (inputStyleName !== S.inputValid) {
       inputStyleName = S.inputInvalid;
       inputFontStyleName = S.inputInvalid;
       allValid = false;
    }
    if (inputStyleEmail !== S.inputValid) {
       inputStyleEmail = S.inputInvalid;
       inputFontStyleEmail = S.inputInvalid;
       allValid = false;
    }
    if (inputStylePassword !== S.inputValid) {
       inputStylePassword = S.inputInvalid;
       inputFontStylePassword = S.inputInvalid;
       allValid = false;
    }
    if (inputStyleRepeatedPassword !== S.inputValid) {
       inputStyleRepeatedPassword = S.inputInvalid;
       inputFontStyleRepeatedPassword = S.inputInvalid;
       allValid = false;
    }
    if (allValid) {
      return true;
    }
    else {
      this.setState({inputStyleName, inputStylePassword, inputStyleEmail, inputStyleRepeatedPassword});
      return false;
    }
    
  }
  handleCreateUser = () => {
    var allValid = this.validateAll();
    if (allValid) {
      return new Promise(() => this.props.createUser(this.state.email, this.state.password)).then((response) => {
        console.log('respnse: ' + response);
        if (this.props.isLoggedIn) {
          return this.props.navigation.navigate('DrawerFlow')
        }
        else if (this.props.failedCreateMessage == ''){
          return console.log('woooh!');
        }
        else {
          return console.log('faack');
        }
      }).catch(err => console.log(err));

    }
    else{
      return null;
    }
  }
  handlePickImage = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
      cropperCircleOverlay: true,
      mediaType: "photo"
    }).then(image => {
      console.log(image); 
      return this.setState({image});
    })
    .catch(err => {return console.log(err)})
  }
  handleFocus = (type) => {
    switch(type){
        case 'name':
          return this.setState({inputStyleName: S.inputInFocus, inputFontStyleName: S.inputFontInFocus})
        case 'email':
          return this.setState({inputStyleEmail: S.inputInFocus, inputFontStyleEmail: S.inputFontInFocus})
        case 'password':
          return this.setState({inputStylePassword: S.inputInFocus, inputFontStylePassword: S.inputFontInFocus})
        case 'repeatedPassword':
          return this.setState({inputStyleRepeatedPassword: S.inputInFocus, inputFontStyleRepeatedPassword: S.inputFontInFocus})
        default:
          return null
    }
  }
  handleFocusLoss = (type) => {
    switch(type){
        case 'name':
              if (this.state.name === '') {
                this.setState({inputStyleName: S.inputInvalid, inputFontStyleName: S.inputNotInFocus, errorTextName: 'Indtast venligst et navn'});
              }
              else{
                this.setState({inputStyleName: S.inputValid, inputFontStyleName: S.inputFontNotInFocus, errorTextName: ''});
              }       
              return this.emailTextInput.focus();
        case 'email':
              if (this.state.email === '') {
                this.setState({inputStyleEmail: S.inputNotInFocus, inputFontStyleEmail: S.inputFontNotInFocus, errorTextEmail: 'Indtast venligst en e-mail'})
              }
              else{
                var emailValid = this.validateEmail();
                if (emailValid) {
                  return this.passwordTextInput.focus();
                }
                else {
                  return null;
                }
              }       
              
        case 'password':
          if (this.state.password === this.state.repeatedPassword && this.state.password != '') {
              this.setState({inputStylePassword: S.inputValid, inputFontStylePassword: S.inputFontNotInFocus, inputStyleRepeatedPassword: S.inputValid, inputFontStyleRepeatedPassword: S.inputFontInFocus, errorTextPassword: '', errorTextRepeatedPassword: ''})
          }
          else{
              if (this.state.password === '') {
                this.repeatedPasswordTextInput.clear();
                this.setState({inputStylePassword: S.inputNotInFocus, inputFontStylePassword: S.inputFontNotInFocus, inputStyleRepeatedPassword: S.inputNotInFocus, inputFontStyleRepeatedPassword: S.inputFontNotInFocus, repeatedPassword: '', errorTextPassword: 'Indtast venligst et password'})
              }
              else {
                this.repeatedPasswordTextInput.focus();
                return this.setState({inputStylePassword: S.inputValid, inputFontStylePassword: S.inputFontNotInFocus, errorTextPassword: ''})
              }
          }
        case 'repeatedPassword':
          if (this.state.password === this.state.repeatedPassword) {
              if (this.state.repeatedPassword === '') {
                return this.setState({inputStyleRepeatedPassword: S.inputNotInFocus, inputFontStyleRepeatedPassword: S.inputFontNotInFocus, errorTextRepeatedPassword: ''})
              }
              else {
                return this.setState({inputStyleRepeatedPassword: S.inputValid, inputFontStyleRepeatedPassword: S.inputFontNotInFocus, errorTextRepeatedPassword: ''})
              }
              
          }
          else{
              return this.setState({inputStyleRepeatedPassword: S.inputInvalid, inputFontStyleRepeatedPassword: S.inputFontNotInFocus, errorTextRepeatedPassword: 'Password matcher ikke hinanden'})
          }
        default:
          return null
    }
  } 

  handleTextInput = (input, type) => {
      switch(type){
        case 'name':
          return this.setState({name: input})
        case 'email':
          return this.setState({email: input})
        case 'password':
          return this.setState({password: input})
        case 'repeatedPassword':
          return this.setState({repeatedPassword: input})
        default:
          return null
      }
    }

	render(){
    
    
		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    const currentImage = this.state.currentImage;
    if (this.props.isLoggedIn) {
      return(
        <LoadingComponent navigation={this.props.navigation} isLoggedIn={true}/>
      );
    }
    else{
      return(
        <ScrollView>
          <View style={{width: '100%', height: 750, top: screenHeight*1/13, paddingLeft: '6%', paddingRight: '6%'}}>
            <View style={{width: '100%', height: 167, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => {this.handlePickImage()}} style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: 116, height: 116, borderRadius: 58, alignItems: 'center', justifyContent: 'center'}}>
                  <Image resizeMode='contain' source={this.state.image.path ? {uri: this.state.image.path} : require('../../assets/changeProfilePicture.png')} style={{width: 116, height: 116, borderRadius: this.state.image.path ? 58 : 0}} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{height: 99, width: '100%'}}>
              <Text style={[{height: 14, width: '100%', fontSize: 12}, this.state.inputFontStyleName]}>NAVN</Text>
              <View style={{height: 50, marginTop: 15}}>
                <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next' onEndEditing={() => this.handleFocusLoss('name')} onFocus={() => {this.handleFocus('name', screenHeight/4.5)}}onChangeText={(value) => this.handleTextInput(value, 'name')} placeholder='Indtast navn' placeholderTextColor='lightgrey' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStyleName]}/>
              </View>
              <View style={{height: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign: 'right', alignSelf: 'stretch', fontSize: 10, height: 12, width: '100%', color: 'red', paddingRight: 2}}>{this.state.errorTextName}</Text>
              </View>           
            </View>
            <View style={{height: 99, width: '100%'}}>
              <Text style={[{height: 14, width: '100%', fontSize: 12}, this.state.inputFontStyleEmail]}>E-MAIL</Text>
              <View style={{height: 50, marginTop: 15}}>
                <TextInput keyboardType={'email-address'} ref={(input) => { this.emailTextInput = input; }} returnKeyType='next' onChangeText={(value) => this.handleTextInput(value, 'email')} onEndEditing={() => this.handleFocusLoss('email')} onFocus={() => {this.handleFocus('email', screenHeight/2.9)}} placeholder='Indtast e-mail' placeholderTextColor='lightgrey' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStyleEmail]}/>
              </View> 
              <View style={{height: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign: 'right', alignSelf: 'stretch', fontSize: 10, height: 12, width: '100%', color: 'red', paddingRight: 2}}>{this.state.errorTextEmail}</Text>
              </View>
            </View>
            <View style={{height: 99, width: '100%'}}>
              <Text style={[{flex: 1, fontSize: 12}, this.state.inputFontStylePassword]}>PASSWORD</Text>
              <View style={{height: 50, marginTop: 15}}>
                <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} ref={(input) => { this.passwordTextInput = input; }} returnKeyType='next' onChangeText={(value) => this.handleTextInput(value, 'password')} onEndEditing={() => this.handleFocusLoss('password')} onFocus={() => {this.handleFocus('password', screenHeight/2.185)}} secureTextEntry={true} placeholder='Indtast password' placeholderTextColor='lightgrey' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStylePassword]}/>
              </View> 
              <View style={{height: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign: 'right', alignSelf: 'stretch', fontSize: 10, height: 12, width: '100%', color: 'red', paddingRight: 2}}>{this.state.errorTextPassword} </Text>
              </View>
            </View>
            <View style={{height: 99, width: '100%'}}>
              <Text style={[{height: 14, width: '100%', fontSize: 12}, this.state.inputFontStyleRepeatedPassword]}>INDTAST PASSWORD IGEN</Text>
              <View style={{height: 50, marginTop: 15}}>
                <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} ref={(input) => { this.repeatedPasswordTextInput = input; }} returnKeyType='done' onChangeText={(value) => this.handleTextInput(value, 'repeatedPassword')} onEndEditing={() => this.handleFocusLoss('repeatedPassword')} onFocus={() => {this.handleFocus('repeatedPassword', screenHeight/2.185)}} secureTextEntry={true} placeholder='Gentag password' placeholderTextColor='lightgrey' style={[{alignSelf: 'center', height: 50, borderRadius: 5, width: '100%', borderWidth: 1, paddingLeft: '5%'}, this.state.inputStyleRepeatedPassword]}/>
              </View>
              <View style={{height: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign: 'right', alignSelf: 'stretch', fontSize: 10, height: 12, width: '100%', color: 'red', paddingRight: 2}}>{this.state.errorTextRepeatedPassword}</Text>
              </View>
            </View>
            <View style={{height: 92, marginTop: 30, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', height: 58, width: '100%'}}>
                <TouchableNativeFeedback style={{}} onPress={() => {this.handleCreateUser()}}>
                  <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', borderRadius: 8, backgroundColor: '#565BF6'}}>
                    <Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
                      Opret
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <View style={{height: 17, width: '100%', marginTop: 17}}>
                <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('Start')}}>
                  <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                    <Text style={{fontSize: 12, color: 'lightgrey', textAlign: 'center', letterSpacing: 0.5, textDecorationLine: 'underline'}}>
                      Allerede oprettet? Login her
                    </Text>
                  </View>    
                </TouchableNativeFeedback>
              </View>
            </View> 
          </View>
        </ScrollView>
      );
    }
		
	}
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.users.isLoggedIn,
    failedCreateMessage: state.users.failedToCreateUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password) => {
      dispatch(requestCreateUser(email, password));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(NewUser));