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

const S = StyleSheet.create({
});

class createUserStepTwo extends Component{
  state={
  }

  handleCreateUser = () => {
  }

	render(){
    

		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    
		return(
      <ScrollView>
				<View style={{width: '100%', height: screenHeight*1.3, top: screenHeight*1/13, paddingBottom: '5%', paddingLeft: '6%', paddingRight: '6%'}}>
          <View style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {this.handlePickImage()}} style={{alignItems: 'center', justifyContent: 'center'}}>
              <View style={{width: screenWidth/3, height: screenWidth/3, borderRadius: screenWidth/6, alignItems: 'center', justifyContent: 'center'}}>
                <Image resizeMode='contain' source={this.state.image.path ? {uri: this.state.image.path} : require('../../assets/changeProfilePicture.png')} style={{width: screenWidth/3, height: screenWidth/3, borderRadius: this.state.image.path ? screenWidth/6 : 0}} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1.1, marginTop: '1%'}}>
            <Text style={[{flex: 1, fontSize: 12}, this.state.inputFontStyleName]}>NAVN</Text>
            <View style={{flex: 2.2}}>
              <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next' onEndEditing={() => this.handleFocusLoss('name')} onFocus={() => {this.handleFocus('name', screenHeight/4.5)}}onChangeText={(value) => this.handleTextInput(value, 'name')} placeholder='Indtast navn' placeholderTextColor='lightgrey' style={[{flex: 1, borderRadius: 5, width: '100%', borderWidth: 2, paddingLeft: '5%'}, this.state.inputStyleName]}/>
              <View style={{marginTop: '0.5%', flex: 0.45, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{flex: 0.4, fontSize: 10, color: 'red'}}>{this.state.errorTextName}</Text>
              </View>
            </View>           
          </View>
          <View style={{flex: 1.1, marginTop: '1%'}}>
            <Text style={[{flex: 1, fontSize: 12}, this.state.inputFontStyleEmail]}>E-MAIL</Text>
            <View style={{flex: 2.2}}>
              <TextInput keyboardType={'email-address'} ref={(input) => { this.emailTextInput = input; }} returnKeyType='next' onChangeText={(value) => this.handleTextInput(value, 'email')} onEndEditing={() => this.handleFocusLoss('email')} onFocus={() => {this.handleFocus('email', screenHeight/2.9)}} placeholder='Indtast e-mail' placeholderTextColor='lightgrey' style={[{flex: 1, borderRadius: 5, width: '100%', borderColor: 'grey', borderWidth: 2, paddingLeft: '5%'}, this.state.inputStyleEmail]}/>
              <View style={{marginTop: '0.5%', flex: 0.45, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{flex: 0.4, fontSize: 10, color: 'red'}}>{this.state.errorTextEmail}</Text>
              </View>
            </View> 
          </View>
          <View style={{flex: 1.1, marginTop: '1%'}}>
            <Text style={[{flex: 1, fontSize: 12}, this.state.inputFontStylePassword]}>PASSWORD</Text>
            <View style={{flex: 2.2}}>
              <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} ref={(input) => { this.passwordTextInput = input; }} returnKeyType='next' onChangeText={(value) => this.handleTextInput(value, 'password')} onEndEditing={() => this.handleFocusLoss('password')} onFocus={() => {this.handleFocus('password', screenHeight/2.185)}} secureTextEntry={true} placeholder='Indtast password' placeholderTextColor='lightgrey' style={[{flex: 1, borderRadius: 8, width: '100%', borderColor: 'grey', borderWidth: 2, paddingLeft: '5%'}, this.state.inputStylePassword]}/>
              <View style={{marginTop: '0.5%', flex: 0.45, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{flex: 0.4, fontSize: 10, color: 'red'}}>{this.state.errorTextPassword} </Text>
              </View>
            </View> 
          </View>
          <View style={{flex: 1.1, marginTop: '1%'}}>
            <Text style={[{flex: 1, fontSize: 12}, this.state.inputFontStyleRepeatedPassword]}>INDTAST PASSWORD IGEN</Text>
            <View style={{flex: 2.2}}>
              <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} ref={(input) => { this.repeatedPasswordTextInput = input; }} returnKeyType='done' onChangeText={(value) => this.handleTextInput(value, 'repeatedPassword')} onEndEditing={() => this.handleFocusLoss('repeatedPassword')} onFocus={() => {this.handleFocus('repeatedPassword', screenHeight/2.185)}} secureTextEntry={true} placeholder='Gentag password' placeholderTextColor='lightgrey' style={[{flex: 1, borderRadius: 5, width: '100%', borderColor: 'grey', borderWidth: 2, paddingLeft: '5%'}, this.state.inputStyleRepeatedPassword]}/>
              <View style={{marginTop: '0.5%', flex: 0.45, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{flex: 0.5, fontSize: 10, color: 'red'}}>{this.state.errorTextRepeatedPassword}</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1.7, justifyContent: 'center', alignItems: 'center', marginTop: '5%', width: '100%'}}>
            <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <TouchableNativeFeedback style={{}} onPress={() => {this.handleCreateUser()}}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%',  borderWidth: 1.5, borderColor: 'grey', borderBottomLeftRadius: 8, borderTopLeftRadius: 8, borderBottomRightRadius: 8, borderTopRightRadius: 8, backgroundColor: '#565BF6'}}>
                  <Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: '700', letterSpacing: 0.5, paddingBottom: '1%'}}>
                    Opret
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={{flex: 1, paddingTop: '2%'}}>
              <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('Start')}}>
                <View style={{justifyContent: 'center', alignItems: 'center', width: screenWidth*0.54}}>
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

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password) => {
      dispatch(requestCreateUser(email, password));
    }
  }
}


export default connect(null, mapDispatchToProps)(withNavigation(NewUser));