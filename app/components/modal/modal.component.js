import React, {Component} from 'react';
import {Keyboard, Modal, Text, TouchableOpacity, View, Alert, Image, Dimensions, StatusBar, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { addQuestionForUser } from '../../redux/actions/actions.js';

const style = StyleSheet.create({
  section: {
      alignSelf: 'center',
      width: '90%',
      marginTop: 0,
      marginBottom: 0
    },
    section_title: {
      fontWeight: 'bold',
      fontSize: 12,
      color: '#AEACBE',
      marginBottom: 15,
      opacity: 1,
      paddingTop: 25
    },
    box: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 7,
      padding: 20,
      marginBottom: 25,
      opacity: 1
    },
    btn: {
        /*display: 'block',*/
        backgroundColor: '#565BF6',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_text: {
       textAlign: 'center',
       color: '#fff',
       fontSize: 16,
       fontWeight: '700',
    },
});
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const statusBarHeight = StatusBar.currentHeight;



class GenericModal extends Component {
  state = {
    modalVisible: true,
    title: '',
    text: '',
    textHasFocus: false
  };
  handleSaveClick = () => {
    if (this.state.title != '' && this.state.text != '') {
      this.props.addQuestion(this.state.title, this.state.text);
      this.props.hideModal();
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount () {

    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {

    this.keyboardDidHideListener.remove();
  }



  _keyboardDidHide = () => {
     if (this.state.textHasFocus) {
        this.setState({textHasFocus: false});
     }
  }

  render() {
    if (this.props.type == 'userQuestion') {
      return (
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.props.hideModal();
            }}>
            
            <View style={{position: 'absolute', height: screenHeight+statusBarHeight+150, top: this.state.textHasFocus ? -20 : 0, width: screenWidth, backgroundColor: '#414D55', paddingTop: this.state.textHasFocus ? 0 : 110}}>
             
              <TouchableOpacity onPress={() => {this.props.hideModal();}} style={{width: 38, height: 38, position: 'absolute',  top: this.state.textHasFocus ? 0 : 91, marginBottom: this.state.textHasFocus ? 29 : 0, right: 20, zIndex: 2}}>
                      <Image rezizeMode={'contain'} source={require('../../assets/closeModal.png')} style={{width: '100%', height: '100%'}} />
                </TouchableOpacity>
              <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                
                <View style={{width: '100%', maxHeight: 471, minHeight: screenHeight-220, backgroundColor: '#FFFFFF', borderRadius: 7, paddingTop: 10}}>
                   <View style={style.section}>
                      <Text style={style.section_title}>TITEL</Text>
                      
                      <View>
                        <TextInput keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next'  onChangeText={(value) => this.setState({title: value})} placeholder='Indtast din titel' placeholderTextColor='rgba(65,77,85,0.3)' style={{alignSelf: 'center', height: 50, fontSize: 16, borderRadius: 7, width: '100%', borderWidth: 1, paddingLeft: 20}}/>
                      </View>
                      
                      <Text style={style.section_title}>SPØRGSMÅL</Text>

                      <View>
                        <TextInput returnKeyType='next' onEndEditing={() => this.setState({textHasFocus: false})} onFocus={() => this.setState({textHasFocus: true})} multiline={true} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} onChangeText={(value) => this.setState({text: value})} placeholder='Skriv dit spørgsmål her' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center', height: 50, borderRadius: 7, fontSize: 12, lineHeight: 20, minHeight: '100%', width: '100%', borderWidth: 1, padding: 20, textAlignVertical: 'top'}]}/>
                      </View>
                   </View>
                  
                </View>
                <TouchableOpacity style={{marginTop:-50}} onPress={() => this.handleSaveClick()}>
                    <View style={[style.btn, {width: '100%'}]}>
                      <Text style={style.btn_text}>
                        Stil spørgsmål
                      </Text>
                    </View>
                  </TouchableOpacity>
              </View>  
              
            </View>
          
          </Modal>
        </View>
      );
      
    }
    else if (this.props.type == 'otherUserQuestion'){
      return <View></View>
    }
    else if (this.props.type == 'diaryEntry'){
      return <View></View>
    }
    else if (this.props.type == 'notification'){
      return <View></View>
    }
    
  }
}

mapDispatchToProps = dispatch => {
  return {
    addQuestion: (title, question) => {
      dispatch(addQuestionForUser(title, question));
    },
  }
} 



export default connect(null, mapDispatchToProps)(GenericModal);