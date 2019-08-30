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
import SmileyOne from "../../assets/smileyOne.svg";
import SmileyTwo from "../../assets/smileyTwo.svg";
import SmileyThree from "../../assets/smileyThree.svg";
import SmileyFour from "../../assets/smileyFour.svg";
import SmileyFive from "../../assets/smileyFive.svg";
import getQuestions from '../../redux/actions/actions.js'

 const S = StyleSheet.create({
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
  circle: {
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#DBDCE3',
    color: '#DBDCE3',
    width: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    marginRight: '1.2%'
/*    marginRight: auto*/
  },
  circle_active: {
    color: '#565BF6',
    borderColor: '#565BF6'
  },
  circle_current: {
   
   
  },
  circle_lastChild: {
    marginRight: 0
  },
  smiley: {
      marginBottom: 5
  },
  smiley_box_active: {
      opacity: 1
  },
  smiley_box_current: {
      opacity: 0.55
  },
  smiley_box_text: {
    opacity: 1
  },
  smiley_box: {
    opacity: 0.2,
    width: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    marginRight: '2.8%',
    justifyContent: 'center',
    alignItems: 'center'
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
  
});

 const QuestionnaireQuestion = ({leftText, rightText, isSmiley, questionAnswers, agePicked, handleQuestionAnswered, questionNumber, title}) => {
    var status = (questionAnswers.length === questionNumber-1 ? 'current' : (questionAnswers.length >= questionNumber ? 'active' : ''));
    console.log('når de så langt?: ' + title);
    if (questionNumber === 1) {
      console.log(agePicked);
        return (
            <View style={S.section}>
                <Text style={S.section_title}>
                  {title}
                </Text>
                <View style={[S.box, {flexDirection: 'row'}, status=='active' ? S.box_active : (agePicked != 0 ? S.box_current : null)]}>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(1, questionNumber-1)} >
                      <View style={[S.smiley_box, status === 'current' ? S.smiley_box_current : (status === 'active' ? (questionAnswers[0] === 1 ? S.smiley_box_active : null) : null)]}>
                      <SmileyOne width={40} height={40} stroke={'#1C1D46'} style={S.smiley}/>
                      <Text style={status === 'current' ? S.smiley_box_text : null}>1</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(2, questionNumber-1)} >
                      <View style={[S.smiley_box, status === 'current' ? S.smiley_box_current : (status === 'active' ? (questionAnswers[0] === 2 ? S.smiley_box_active : null) : null)]}>
                      <SmileyTwo width={40} height={40} stroke={'#69368B'} style={S.smiley} />
                      <Text style={status === 'current' ? S.smiley_box_text : null}>2</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(3, questionNumber-1)} >
                    <View style={[S.smiley_box, status === 'current' ? S.smiley_box_current : (status === 'active' ? (questionAnswers[0] === 3 ? S.smiley_box_active : null) : null)]}>
                       <SmileyThree width={40} height={40} stroke={'#B556F6'}  style={S.smiley}/>
                        <Text style={status === 'current' ? S.smiley_box_text : null}>3</Text>
                     </View>           
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(4, questionNumber-1)} >
                     <View style={[S.smiley_box, status === 'current' ? S.smiley_box_current : (status === 'active' ? (questionAnswers[0] === 4 ? S.smiley_box_active : null) : null)]}>
                     <SmileyFour width={40} height={40} stroke={'#7456F6'}  style={S.smiley}/>
                      <Text style={status === 'current' ? S.smiley_box_text : null}>4</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleQuestionAnswered(5, questionNumber-1)} >
                     <View style={[S.smiley_box, status === 'current' ? S.smiley_box_current : (status === 'active' ? (questionAnswers[0] === 5 ? S.smiley_box_active : null) : null)]}>
                     <SmileyFive width={40} height={40} stroke={'#565BF6'}  style={S.smiley}/>
                      <Text style={status === 'current' ? S.smiley_box_text : null}>5</Text>
                      </View>
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
                         <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 0 ? S.circle_active : null) : null)]}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleQuestionAnswered(1, questionNumber-1)} >
                         <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 1 ? S.circle_active : null) : null)]}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleQuestionAnswered(2, questionNumber-1)} >
                         <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 2 ? S.circle_active : null) : null)]}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleQuestionAnswered(3, questionNumber-1)} >
                         <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 3 ? S.circle_active : null) : null)]}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleQuestionAnswered(4, questionNumber-1)} >
                         <Text style={[S.circle, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 4 ? S.circle_active : null) : null)]}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleQuestionAnswered(5, questionNumber-1)} >
                         <Text style={[S.circle, S.circle_lastChild, questionAnswers.length === questionNumber-1 ? S.circle_current : ( questionAnswers.length >= questionNumber ? (questionAnswers[questionNumber-1] === 5 ? S.circle_active : null) : null)]}>5</Text>
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
 