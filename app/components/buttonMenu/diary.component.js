import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from 'react-native';

const S = StyleSheet.create({
      boxTop: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 20,
    marginBottom: 25,
    opacity: 1,
    shadowColor: '#AEACBE',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2002,
    elevation: 1,
  },
   scrollView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height:  '100%',
    backgroundColor: '#F7F8FA'
  },
  background: {
    backgroundColor: '#F7F8FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
      textTransform: 'uppercase',
  },
  box: {
      backgroundColor: '#fff',
      borderRadius: 7,
      marginBottom: 25,
      opacity: 1
  },
  boxInner: {
      padding: 20,
  },
  boxTitle: {
    color: '#414D55',
    fontSize: 16,
  },
  textBubble: {
      marginTop: 17,
      backgroundColor: '#F8F9FF',
      paddingTop: 25,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      color: '#414D55',
      borderRadius: 10,
      position: 'relative',
      minHeight: 180,
    },
    textBubble_before: {
      position: 'absolute',
      backgroundColor: '#F8F9FF',
      width: 8,
      height: 8,
      top: -4,
      left: 12,
      transform:[{ rotateZ: '45deg'} ]
    },
    textBubbleText: {
      lineHeight: 24,
      fontSize: 14,
    },
    diaryDate: {
      marginTop: 11,
      fontSize: 12,
    },
    btnsWrapper: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
    },
  btn_top: {
        /*display: 'block',*/
        alignSelf: 'center',
        backgroundColor: '#565BF6',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row'
  },
  btn_top_text: {
      paddingLeft: 20,
     color: '#fff',
     fontWeight: '600',
     fontSize: 16,
     lineHeight: 20,
     fontWeight: 'bold'
  },
  buttonPlus: {
     marginRight: 20,
     width: 12,
     height: 12
  },
    btn: {
      width: '50%',
      height: 50,
    },
    btnDark: {
      backgroundColor: '#989BB0',
      borderBottomLeftRadius: 7,
    },
    btnLight: {
      backgroundColor: '#CBCDD7',
      borderBottomRightRadius: 7,
    },

  box_title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold'
  },
    btnInner: {
      color: 'white',
      height: 50,
      lineHeight: 50,
      textAlign: 'center',
    },
    scalaWrapper: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 21,
      marginBottom: 30,
    },
    singleScala: {
      width: '50%',
    },
    singleScalaBoxes: {
      width: 100,
      height: 10,
      flexDirection: 'row'
    },
    singleScalaBox: {
      marginTop: 14,
      width: 16,
      height: 4,
      backgroundColor: 'white',
      marginRight: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#979AB0',
    },
    singleScalaBox_redActive: {
      backgroundColor: '#FF715B',
      borderColor: '#FF715B',
    },
    singleScalaBox_greenActive: {
      backgroundColor: '#7ED321',
      borderColor: '#7ED321',
    },
});
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
class Diary extends Component {
  state={
    titleIsActive: false,
    textFieldIsActive: false,
    diaryDate: 'Skrevet d. 29 Nov 2019', 
  }

  handleFocusChanges = (type, isFocus)=> {
    switch (type) {
      case 'textFieldIsActive' :
        return this.setState({textFieldIsActive: isFocus})

      case 'title' : 
        return this.setState({titleIsActive: isFocus})

      default:
        return null
    }
  }

  render(){
    return(
      <View style={[S.scrollView, {width: screenWidth, paddingTop: screenHeight/13}]}>
        <ScrollView>
              <View style={[S.section, {paddingTop: 20}]}>
                <Text style={S.section_title}>
                    Tilføj nyt indlæg i min dagbog
                </Text>
                  <View style={S.boxTop}>
                    <TouchableOpacity style={[S.btn_top, {width: screenWidth*0.8}]} onPress={() => this.handleSaveClick()}>
                      <View>
                        <Text style={S.btn_top_text}>
                          Skriv nyt indlæg
                        </Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Image resizeMode={'contain'} style={S.buttonPlus} source={require('../../assets/plus.png')}/>
                      </View>
                    </TouchableOpacity>
                    

                  </View>
              </View>
              <View style={S.section}>
                        <Text style={S.section_title}>
                          Mine indlæg
                        </Text>

                      <View style={S.box}>

                        <View style={S.boxInner}>

                            <Text style={S.box_title}>
                              Lungefibrose
                            </Text>

                            <View style={S.textBubble}>
                              <Text numberOfLines={4} style={S.textBubbleText}>  
                                Lungefibrose er en sjælden kronisk lungesygdom, hvor lungerne bliver stive og dårlige til at ilte blodet på grund af øget dannelse af arvæv i e til at ilte blodet på grund af øget dannelse af arvæv i e til at ilte blodet på grund af øget dannelse af arvæv i 
                              </Text>

                              <Text style={S.diaryDate}>
                                {this.state.diaryDate}
                              </Text>
                          </View>

                        </View>

                    <View style={S.btnsWrapper}>
                    <View style={S.btn}>
                      <TouchableOpacity>
                          <Text style={[S.btnDark, S.btnInner]}>
                            Rediger
                          </Text>
                      </TouchableOpacity>
                    </View>

                    <View style={S.btn}>
                      <TouchableOpacity>
                          <Text style={[S.btnLight, S.btnInner]}>
                            Se inlæg
                          </Text>
                      </TouchableOpacity>
                    </View>
                        </View>

                </View>

                <View style={S.box}>

                        <View style={S.boxInner}>

                            <Text style={S.box_title}>
                              Lungefibrose
                            </Text>

                            <View style={S.textBubble}>
                              <Text numberOfLines={4} style={S.textBubbleText}>  
                                Lungefibrose er en sjælden kronisk lungesygdom, hvor lungerne bliver stive og dårlige til at ilte blodet på grund af øget dannelse af arvæv i e til at ilte blodet på grund af øget dannelse af arvæv i e til at ilte blodet på grund af øget dannelse af arvæv i 
                              </Text>

                              <Text style={S.diaryDate}>
                                {this.state.diaryDate}
                              </Text>
                          </View>

                          <View style={S.scalaWrapper}>
                            <Text style={S.singleScala}>
                              Smerter{"\n"}
                              <View style={S.singleScalaBoxes}>
                                <View style={[S.singleScalaBox, S.singleScalaBox_redActive]}></View>
                                <View style={[S.singleScalaBox, S.singleScalaBox_redActive]}></View>
                                <View style={[S.singleScalaBox, S.singleScalaBox_redActive]}></View>
                                <View style={S.singleScalaBox}></View>
                                <View style={S.singleScalaBox}></View>
                              </View>
                            </Text>

                            <Text style={S.singleScala}>
                              Humør{"\n"}
                              <View style={S.singleScalaBoxes}>
                                <View style={[S.singleScalaBox, S.singleScalaBox_greenActive]}></View>
                                <View style={[S.singleScalaBox, S.singleScalaBox_greenActive]}></View>
                                <View style={[S.singleScalaBox, S.singleScalaBox_greenActive]}></View>
                                <View style={[S.singleScalaBox, S.singleScalaBox_greenActive]}></View>
                                <View style={S.singleScalaBox}></View>
                              </View>
                            </Text>
                          </View>

                        </View>

                    <View style={S.btnsWrapper}>
                    <View style={S.btn}>
                      <TouchableOpacity>
                          <Text style={[S.btnDark, S.btnInner]}>
                            Rediger
                          </Text>
                      </TouchableOpacity>
                    </View>

                    <View style={S.btn}>
                      <TouchableOpacity>
                          <Text style={[S.btnLight, S.btnInner]}>
                            Se inlæg
                          </Text>
                      </TouchableOpacity>
                    </View>
                        </View>

                </View>

              </View>
              <View style={{height: screenHeight/5}}></View>
          </ScrollView>
      </View>
    );
  }
}

export default Diary;