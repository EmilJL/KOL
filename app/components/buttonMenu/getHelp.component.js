import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
S = StyleSheet.create({
  btn: {
        /*display: 'block',*/
        alignSelf: 'center',
        backgroundColor: '#565BF6',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row'
  },
  btn_text: {
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
    scrollView: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      height:  '100%',
      backgroundColor: '#F7F8FA'
    },
    box: {
      backgroundColor: 'white',
      borderRadius: 7,
      shadowColor: '#AEACBE',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2002,
      elevation: 1,
    },
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
    yourQuestion: {
      borderBottomWidth: 1,
      borderColor: '#F1F5F8',
      paddingTop: 22,
      paddingBottom: 20,
    },
    questionContent: {
      flexDirection: 'row',
      marginBottom: 18,
    },
    questionCount: {
      backgroundColor: '#FDCA40',
      width: 20,
      height: 20,
      borderRadius: 20,
      textAlign: 'center',
      lineHeight: 20,
      fontSize: 10,
      color: '#414D55',
      position: 'absolute',
      top: 5,
      right: 20,
      zIndex: 15,
    },
    profilePic: {
      height: 40,
      width: 40,
      marginLeft: 20,
      marginRight: 20,
    },
    questionTitle: {
      fontSize: 16,
      color: '#414D55',
      paddingRight: 20,
    },
    questionDescription: {
      fontSize: 14,
      color: '#565BF6',
      width: '75%',
      height: 20,
    },
    answerBtn: {
      width: '100%',
      height: 30,
      backgroundColor: '#F8F9FF',
      borderRadius: 15,
    },
    answerBtnText: {
      textAlign: 'center',
      color: '#565BF6',
      lineHeight: 30,
    },
    noAnswer: {
      opacity: .3,
    },
    contentWrapper: {
      width: '100%',
    },
    linearGradient: {
    width: '75%',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    },
    section: {
      alignSelf: 'center',
      width: '90%',
      marginTop: 0,
      marginBottom: 0,
  },
  section_title: {
    color: '#AEACBE',
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
    boxesWrapper: {
      flexDirection: 'row',
    },
    textSizeFour: {
    fontSize: 16,
    color: '#414D55',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  textBubble: {
    marginTop: 17,
    backgroundColor: '#F8F9FF',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    color: '#414D55',
    fontSize: 14,
    lineHeight: 24,
    borderRadius: 10,
    position: 'relative',
    minHeight: 180
  },
  textBubbleText: {
      lineHeight: 24,
      fontSize: 14,
  },
  textBubbleText_secondary: {
      marginTop: 11,
      fontSize: 12,
      lineHeight: 20,
      color: '#AEACBE'
  },
  textBubble_before: {
    /*content: '',*/
    position: 'absolute',
    backgroundColor: '#F8F9FF',
    width: 8,
    height: 8,
    top: -4,
    left: 12,
    transform:[{ rotateZ: '45deg'} ]
  },
});

class GetHelp extends Component {

  render(){
    return (
      <View style={[S.scrollView, {width: screenWidth, paddingTop: screenHeight/13}]}>
        <ScrollView>
        <View style={[S.section,{paddingTop: 20}]}>
          <Text style={S.section_title}>
              Stil et spørgsmål
          </Text>
            <View style={S.boxTop}>
              <TouchableOpacity style={[S.btn, {width: screenWidth*0.8}]} onPress={() => this.handleSaveClick()}>
                <View>
                  <Text style={S.btn_text}>
                    Stil et ny spørgsmål
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image resizeMode={'contain'} style={S.buttonPlus} source={require('../../assets/plus.png')}/>
                </View>
              </TouchableOpacity>
              <View style={S.textBubble}>
                <Text style={S.textBubbleText}>
                  Har du brug for hjælp? Stil et spørgsmål og få svar fra andre brugere.
                </Text>
                <Text style={S.textBubbleText_secondary}>
                  Sørg altid for at kritiske problemer og spørgsmål bliver stillet til en professionel
                </Text>
              </View>

            </View>
        </View>
        <View style={S.section}>
          <Text style={S.section_title}>
              Dine spørgsmål
          </Text>
          <View style={S.box}>

            <View style={S.yourQuestion}>

              <View style={S.questionContent}>
                <Image resizeMode={'contain'} style={S.profilePic} source={require('../../assets/testProfilePic.png')} />

                <Text style={[S.questionCount, {opacity: 0}]}>
                  0
                </Text>

                <View style={S.contentWrapper}>

                  <Text style={S.questionTitle}>
                    Problemer med lungerne
                  </Text>

                  <View style={{width: '100%'}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['transparent', '#fff']} style={S.linearGradient}>
                    </LinearGradient>
                    <Text multiline={false} style={S.questionDescription}>
                      Hej, jeg har lige et hurtigt spørgsmål og og og og og og 
                    </Text>
                  </View>

                </View>
              </View>

              <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={S.answerBtn}>
                  <Text style={S.answerBtnText}>
                    Se svar
                  </Text>
                </View>
              </TouchableOpacity>

            </View>

            <View style={S.yourQuestion}>

              <View style={S.questionContent}>
                <Image resizeMode={'contain'} style={S.profilePic} source={require('../../assets/testProfilePic.png')} />

                <Text style={S.questionCount}>
                  2
                </Text>

                <View style={S.contentWrapper}>

                  <Text style={S.questionTitle}>
                    Problemer med lungerne
                  </Text>

                  <View style={{width: '100%', position: 'relative'}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['transparent', '#fff']} style={S.linearGradient}>
                    </LinearGradient>
                    <Text multiline={false} style={S.questionDescription}>
                      Hej, jeg har lige et hurtigt spørgsmål
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={S.answerBtn}>
                  <Text style={[S.answerBtnText, S.noAnswer]}>
                    Ingen svar endnu
                  </Text>
                </View>
              </TouchableOpacity>

            </View>

            <View style={S.yourQuestion}>

              <View style={S.questionContent}>
                <Image resizeMode={'contain'} style={S.profilePic} source={require('../../assets/testProfilePic.png')} />

                <Text style={S.questionCount}>
                  99
                </Text>

                <View style={S.contentWrapper}>

                  <Text style={S.questionTitle}>
                    Problemer med lungerne
                  </Text>

                  
                  <View style={{width: '100%', position: 'relative'}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['transparent', '#fff']} style={S.linearGradient}>
                    </LinearGradient>
                    <Text multiline={false} style={S.questionDescription}>
                      Hej, jeg har lige et hurtigt spørgsmål og og og og og og 
                    </Text>
                  </View>
                </View>

              </View>

              <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={S.answerBtn}>
                  <Text style={S.answerBtnText}>
                    Se svar
                  </Text>
                </View>
              </TouchableOpacity>

            </View>

          </View>
        </View>
          <View style={{height: screenHeight/5}}></View>
      </ScrollView>
    </View>
    );
  }
};


export default GetHelp;