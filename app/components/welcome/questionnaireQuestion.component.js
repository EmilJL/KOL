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

 const S = StyleSheet.create({
  intro: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 27,
  },
  intro_welcome: {
    color: '#414D55',
    fontSize: 18
  },
  intro_welcome_span: {
    color: '#414D55',
    fontSize: 24,
    fontWeight: '700'
  },
  intro_date: {
    fontSize: 12,
    color: '#AEACBE'
  },
  section: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 0,
    marginBottom: 0
  },
  section_title: {
    fontWeight: '600',
    fontSize: 12,
    color: '#AEACBE',
    marginBottom: 15,
    opacity: 1
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 20,
    marginBottom: 25,
    borderWidth: 0.5,
    opacity: 1
  },
  box_smallPadding: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 17
  },
  box_lastChild: {
    marginRight: 0
  },
  box_active: {
    borderColor: '#565BF6',
    borderWidth: 2,
    opacity: 1
  },
  box_current: {
    borderColor: '#000',
    borderWidth: 2,
    opacity: 1
  },
  textSizeFour: {
    fontSize: 16,
    color: '#414D55',
    fontWeight: '600'
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
    minHeight: 180
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
  circle: {
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#DBDCE3',
    color: '#DBDCE3',
    width: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    marginRight: '1.5%'
/*    marginRight: auto*/
  },
  circle_active: {
    color: '#565BF6',
    borderColor: '#565BF6'
  },
  circle_current: {
    color: 'black',
    borderColor: 'black'
  },
  circle_lastChild: {
    marginRight: 0
  },
  smiley: {
      color: '#414D55',
      fontSize: 14,
      textAlign: 'center',
      opacity: .35
    /*  svg: {
          width: '100%',
          marginBottom: 5
      }*/
  },
  smiley_active: {
      opacity: 1,
      color: '#565BF6'
    /*  svg path {
          fill: '#565BF6';
      }*/
  },
  scala: {
      /*display: 'flex',*/
      width: '100%',
      marginTop: 15,
      flexDirection: 'row'
  },
  scala_text_left: {
    fontSize: 11,
     left: 0,
     marginBottom: 0,
     position: 'absolute',
      color: 'lightgrey'
  },
  scala_text_right: {
    fontSize: 11,
    alignSelf: 'center',
    right: 0,
    marginBottom: 0,
    position: 'absolute',
      color: 'lightgrey'
  },
  scala_text_current: {
    color: 'black'
  },
  scala_text_active: {
    color: 'black'
  },  
  selectOption: {
      /*display: 'flex' */
  },
  gender_box: {
    height: 150
  },
  gender_box_span: {
    color: '#989BB0',
    fontSize: 12,
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: ([{translateX: '-50%'}]),
    /*fontWeight: 600*/
  },
  gender_box_svg: {
    position: 'absolute',
    top: 34,
    left: '50%',
    transform:([{translateX: '-50%'}])
  },
  gender_box_active_span: {
    color: '#414D55'
      /*  svg {
        path {
            fill: #565BF6;
        }
        }*/
        /*span {
            color: #414D55;
        }*/
  },
  select_box: {
      height: 63,
      fontSize: 22,
      lineHeight: 1
  },
  outro: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        margin: 0
  },
   btn: {
        /*display: 'block',*/
        backgroundColor: '#565BF6',
        borderRadius: 8,
        width: '70%',
        marginTop: 20,
        marginBottom: 20
  },
  btn_text: {
     textAlign: 'center',
     color: '#fff',
     fontWeight: '600'
  },
  biFooter: {
       /* position: 'fixed',*/
        bottom: 0,
        left: 0,
        width: '100%',
        height: 76,
        backgroundColor: '#fff',
       /* borderRadius: 8 8 0 0,*/
        /*-webkit-box-shadow: 0px -8px 9px 0px rgba(0,0,0,0.06);
        -moz-box-shadow: 0px -8px 9px 0px rgba(0,0,0,0.06);
        box-shadow: 0px -8px 9px 0px rgba(0,0,0,0.06);*/
        padding: 20
  },
  biFooter_numbers: {
          /*display: flex;*/
        position: 'relative'
  },
  biFooter_numbers_after: {
        /*      content: "";*/
        position: 'absolute',
        width: '70%',
        height: 1,
        backgroundColor: '#DDDEFD',
        left: 20,
        bottom: 5
  },
  biFooter_numbers_span: {
        fontSize: 14,
        textAlign: 'center',
       /* flexBasis: 11.11%;*/
        position: 'relative',
        height: 36,
        fontWeight: '400',
        color: '#E7E6EB'
  },
  biFooter_numbers_span_active: {
        opacity: 1,
        fontWeight: '600',
        color: '#000'
  },
  biFooter_numbers_span_active_after: {
        backgroundColor: '#565BF6',
        borderColor: '#565BF6'
  },
  biFooter_numbers_span_after: {
/*        content: "";*/
        position: 'absolute',
        width: 8,
        height: 8,
        backgroundColor: 'white',
        left: '50%',
        transform:([{translateX:'-50%'}]),
        bottom: 0,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#DDDEFD',
        zIndex: 2
  }
});

 const QuestionnaireQuestion = ({leftText, rightText, isSmiley, questionAnswers, genderSelected, handleQuestionAnswered, questionNumber, title}) => {
    
    if (questionNumber === 1) {
        return (
            <View style={S.section}>
                <Text style={S.section_title}>
                  {title}
                </Text>
                <View style={[S.box, {flexDirection: 'row'}, questionAnswers.length >= questionNumber ? S.box_active : (genderSelected === '' ? null : S.box_current)]}>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(0, questionNumber-1)} style={[S.smiley, questionAnswers.length > questionNumber ? (questionAnswers[questionNumber-1] === 0 ? S.smiley_active : null) : null]}>
                      <Text>ok</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(1, questionNumber-1)} style={[S.smiley, questionAnswers.length > questionNumber ? (questionAnswers[questionNumber-1] === 1 ? S.smiley_active : null) : null]}>
                     {/*insert SVG stuff here*/}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(2, questionNumber-1)} style={[S.smiley, questionAnswers.length > questionNumber ? (questionAnswers[questionNumber-1] === 2 ? S.smiley_active : null) : null]}>
                     {/*insert SVG stuff here*/}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(3)} style={[S.smiley, questionAnswers.length > questionNumber ? (questionAnswers[questionNumber-1] === 3 ? S.smiley_active : null) : null]}>
                     {/*insert SVG stuff here*/}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(4, questionNumber-1)} style={[S.smiley, questionAnswers.length > questionNumber ? (questionAnswers[questionNumber-1] === 4 ? S.smiley_active : null) : null]}>
                     {/*insert SVG stuff here*/}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(5, questionNumber-1)} style={[S.smiley, questionAnswers.length > questionNumber ? (questionAnswers[questionNumber-1] === 5 ? S.smiley_active : null) : null]}>
                     {/*insert SVG stuff here*/}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    else
        return (
            <View style={S.section}>
                <Text style={S.section_title}>
                  {title}
                </Text>
              
                    <View style={[S.box, questionAnswers.length >= questionNumber-1 ? (questionAnswers.length > questionNumber-1 ? S.box_active : S.box_current) : null]}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => handleQuestionAnswered(0, questionNumber-1)} >
                             <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 0 ? S.circle_active : S.circle_current) : null)]}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleQuestionAnswered(1, questionNumber-1)} >
                             <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 1 ? S.circle_active : S.circle_current) : null)]}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleQuestionAnswered(2, questionNumber-1)} >
                             <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 2 ? S.circle_active : S.circle_current) : null)]}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleQuestionAnswered(3, questionNumber-1)} >
                             <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 3 ? S.circle_active : S.circle_current) : null)]}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleQuestionAnswered(4, questionNumber-1)} >
                             <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 4 ? S.circle_active : S.circle_current) : null)]}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleQuestionAnswered(5, questionNumber-1)} >
                             <Text style={[S.circle, S.circle_lastChild, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 5 ? S.circle_active : S.circle_current) : null)]}>5</Text>
                            </TouchableOpacity>
                        </View>
                        

                        <View style={[S.scala, {flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}]}>
                            <Text style={[S.scala_text_left, questionAnswers.length === questionNumber-1 ? S.scala_text_current : (questionAnswers.length >= questionNumber ? S.scala_text_current : null)]}>
                                {leftText}
                            </Text>
                            <Text style={[S.scala_text_right, questionAnswers.length === questionNumber-1 ? S.scala_text_current : (questionAnswers.length >= questionNumber ? S.scala_text_current : null)]}>
                                {rightText}
                            </Text>
                        </View>
                  
                    
                </View>
            </View>
        );
 } 


export default QuestionnaireQuestion;
 