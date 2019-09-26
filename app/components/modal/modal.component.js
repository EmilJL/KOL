import React, {Component} from 'react';
import {Keyboard, Modal, Text, TouchableOpacity, View, Alert, Image, Dimensions, StatusBar, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { addQuestionForUser, addDiaryComment, clearAndCloseModal, addCommentForQuestion } from '../../redux/actions/actions.js';
import CloseButton from '../../assets/closeButton.svg'; 

const style = StyleSheet.create({
  questionDateTime: {
    color: '#C5C8CB',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  questionTitle: {
    fontSize: 16,
    color: '#414D55',
    fontWeight: 'bold',
    width: '80%',
    marginTop: 6,
    lineHeight: 22,
  },
  section: {
      alignSelf: 'center',
      width: '90%',
      marginBottom: 0
    },
    section_title: {
      fontWeight: 'bold',
      fontSize: 12,
      color: '#AEACBE',
      marginBottom: 15,
      opacity: 1,
      paddingTop: 20
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
    borderLine: {
      backgroundColor: '#C5C9CB',
      height: 1,
      width: '100%',
    },
});
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const statusBarHeight = StatusBar.currentHeight;



class GenericModal extends Component {
  state = {
    title: '',
    text: '',
    textHasFocus: false,
    displayText: ''
  };
  handleSaveClick = () => {
    if (this.state.title != '' && this.state.text != '') {
      switch (this.props.modal.type) {
        case 'userQuestion':
          this.props.addQuestion(this.state.title, this.state.text);
          this.props.hideModal();
          break;
        case 'diaryEntry':
          this.props.addDiaryEntry(this.state.title, this.state.text);
          this.props.hideModal();
          break;
        case 'userQuestionDisplay':
          this.props.addComment(this.state.text, this.props.modal.id);
          
          break;
      }
      
     
    }
  }


  componentDidMount () {
    console.log(this.props.modal);
    if (this.props.modal) {
       this.props.modal.type == 'userQuestionDisplay' ? this.setState({title: this.props.modal.title, displayText: this.props.modal.text}) : this.setState({title: this.props.modal.title, text: this.props.modal.text});
    }
   
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
    if (this.props.modal.type == 'userQuestion') {
      return (
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.modal ? this.props.modal.isVisible : false}
            onRequestClose={() => {
              this.props.hideModal();
            }}>
            
            <View style={{position: 'absolute', height: screenHeight+statusBarHeight+150, top: this.state.textHasFocus ? -20 : 0, width: screenWidth, backgroundColor: '#414D55', paddingTop: this.state.textHasFocus ? 0 : 110}}>
             
              <TouchableOpacity onPress={() => {this.props.hideModal();}} style={{width: 38, height: 38, position: 'absolute',  top: this.state.textHasFocus ? 0 : 91, marginBottom: this.state.textHasFocus ? 29 : 0, right: 20, zIndex: 2}}>
                      <CloseButton width='100%' />
                </TouchableOpacity>
              <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                
                <View style={{width: '100%', maxHeight: 471, minHeight: screenHeight-220, backgroundColor: '#FFFFFF', borderRadius: 7, paddingTop: 10}}>
                   <View style={style.section}>
                      <Text style={style.section_title}>TITEL</Text>
                      
                      <View>
                        <TextInput editable={this.props.modal && this.props.modal.editable == true ? true : false} value={this.state.title} maxLength={20} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next'  onChangeText={(value) => this.setState({title: value})} placeholder='Indtast din titel' placeholderTextColor={this.props.modal && this.props.modal.editable == true ? 'rgba(65,77,85,0.3)' : 'black'} style={{alignSelf: 'center', height: 50, fontSize: 16, borderRadius: 7, width: '100%', borderWidth: 1, paddingLeft: 20}}/>
                      </View>
                      
                      <Text style={style.section_title}>SPØRGSMÅL</Text>

                      <View style={{height: '42%', width: '100%'}}>
                        <TextInput editable={this.props.modal && this.props.modal.editable == true ? true : false} value={this.state.text} returnKeyType='next' onEndEditing={() => this.setState({textHasFocus: false})} onFocus={() => this.setState({textHasFocus: true})} multiline={true} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} onChangeText={(value) => this.setState({text: value})} placeholder='Skriv dit spørgsmål her' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center',  borderRadius: 7, fontSize: 12, lineHeight: 20, height: '100%', width: '100%', borderWidth: 1, padding: 20, textAlignVertical: 'top'}]}/>
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
    else if (this.props.modal.type == 'diaryEntry'){
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
                      <CloseButton width='100%' />
                </TouchableOpacity>
              <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                <View style={{width: '100%', maxHeight: 471, minHeight: screenHeight-220, backgroundColor: '#FFFFFF', borderRadius: 7, paddingTop: 10}}>
                   <View style={style.section}>
                      <Text style={style.section_title}>TITEL</Text>
                      
                      <View>
                        <TextInput value={this.state.title} maxLength={20} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} returnKeyType='next'  onChangeText={(value) => this.setState({title: value})} placeholder='Indtast din titel' placeholderTextColor='rgba(65,77,85,0.3)' style={{alignSelf: 'center', height: 50, fontSize: 16, borderRadius: 7, width: '100%', borderWidth: 1, paddingLeft: 20}}/>
                      </View>
                      
                      <Text style={style.section_title}>{this.props.type == 'otherUserQuestion' ? 'SPØRGSMÅL' : 'INDLÆG'}</Text>

                      <View style={{height: '42%', width: '100%'}}>
                        <TextInput value={this.state.text} returnKeyType='next' onEndEditing={() => this.setState({textHasFocus: false})} onFocus={() => this.setState({textHasFocus: true})} multiline={true} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} onChangeText={(value) => this.setState({text: value})} placeholder='Skriv dit spørgsmål her' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center',  borderRadius: 7, fontSize: 12, lineHeight: 20, height: '100%', width: '100%', borderWidth: 1, padding: 20, textAlignVertical: 'top'}]}/>
                      </View>
                   </View>
                </View>
                <TouchableOpacity style={{marginTop:-50}} onPress={() => this.handleSaveClick()}>
                  <View style={[style.btn, {width: '100%'}]}>
                    <Text style={style.btn_text}>
                      Tilføj indlæg
                    </Text>
                  </View>
                </TouchableOpacity>
              </View> 
            </View>
          </Modal>
        </View>
      )
    }
    else if (this.props.modal.type == 'userQuestionDisplay'){
      return (
        <View>
           <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible} 
            onRequestClose={() => {
              this.props.hideModal();
            }}>
            <View style={{position: 'absolute', height: screenHeight+statusBarHeight+150, top: this.state.textHasFocus ? -screenHeight/2.5 : 0, width: screenWidth, backgroundColor: '#414D55', paddingTop: screenHeight/13}}>
              <TouchableOpacity onPress={() => {this.props.hideModal();}} style={{width: 38, height: 38, position: 'absolute',  top: this.state.textHasFocus ? 0 : (screenHeight/13)-19, marginBottom: this.state.textHasFocus ? 29 : 0, right: 20, zIndex: 2}}>
                     <CloseButton width='100%' />
                </TouchableOpacity>
              <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                <View style={{width: '100%', maxHeight: 471, minHeight: screenHeight-220, backgroundColor: '#FFFFFF', borderRadius: 7, paddingTop: 10, paddingBottom: 50}}>
                  <View style={[style.section, {marginTop: 20}]}>
                    <Text style={style.questionDateTime}>
                      {this.props.modal.date}
                    </Text>
                    <Text style={style.questionTitle}>
                      {this.props.modal.title}  
                    </Text>
                    <View style={[style.borderLine, {marginTop: 20}]}></View>
                    <Text style={[style.section_title, {paddingTop: 20}]}>
                      SPØRGSMÅL
                    </Text>
                    <Text style={{marginTop: 0, fontSize: 12, lineHeight: 20, textAlignVertical: 'top', paddingBottom: 20}}>
                      {this.props.modal.text}
                    </Text>
                    <View style={style.borderLine}></View>
                    <Text style={style.section_title}>
                      SVAR
                    </Text>
                    <View style={{height: screenHeight/3.5}}>
                      <TextInput value={this.state.text} returnKeyType='next' onEndEditing={() => this.setState({textHasFocus: false})} onFocus={() => this.setState({textHasFocus: true})} multiline={true} keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'} onChangeText={(value) => this.setState({text: value})} placeholder='Skriv dit svar her' placeholderTextColor='rgba(65,77,85,0.3)' style={[{alignSelf: 'center',  borderRadius: 7, fontSize: 12, lineHeight: 20, height: '100%', width: '100%', borderWidth: 1, padding: 20, textAlignVertical: 'top'}]}/>
                    </View>
                    <View style={{height: 20}}>
                    </View>
                </View>
                <TouchableOpacity style={{}} onPress={() => this.handleSaveClick()}>
                  <View style={[style.btn, {width: '100%'}]}>
                    <Text style={style.btn_text}> 
                       Besvar spørgsmål
                    </Text>
                  </View>
                </TouchableOpacity>
              </View> 
            </View>
            </View>
          </Modal>
        </View>
      )
    }
    
    else{
      return null;
    }
  }
}

mapStateToProps = state => {
  return {
    modal: state.users.modal
  }
}
mapDispatchToProps = dispatch => {
  return {
    addComment: (comment, id) => {
      dispatch(addCommentForQuestion(comment, id));
    },
    addQuestion: (title, question) => {
      dispatch(addQuestionForUser(title, question));
    },
    addDiaryEntry: (title, text) => {
      dispatch(addDiaryComment(text, title, 0));
    },
    hideModal: () => {
      dispatch(clearAndCloseModal())
    }
  }
} 



export default connect(mapStateToProps, mapDispatchToProps)(GenericModal);