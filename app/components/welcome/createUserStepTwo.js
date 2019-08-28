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
import QuestionnaireQuestion from './questionnaireQuestion.component.js';
import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

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
    opacity: .6
  },
  box_smallPadding: {
   
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
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingLeft: 20
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
    marginRight: '1%'
/*    marginRight: auto*/
  },
  circle_active: {
    color: '#565BF6',
    borderColor: '#565BF6'
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
      flexDirection: 'row',
  },
  scala_text_left: {
    fontSize: 11,
     left: 0,
     marginBottom: 0,
     position: 'absolute'
  },
  scala_text_right: {
    fontSize: 11,
    alignSelf: 'center',
    right: 0,
    marginBottom: 0,
    position: 'absolute'
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
class CreateUserStepTwo extends Component{
  state={
    genderSelected: '',
    questionAnswers: []
/*    firstQuestionStyle: '',
    secondQuestionStyle: '',
    thirdQuestionStyle: '',
    fourthQuestionStyle: '',
    fifthQuestionStyle: '',
    sixthQuestionStyle: '',
    seventhQuestionStyle: '',
    eigthQuestionStyle: '',
    ninthQuestionStyle: ''*/
  }
  handleSelectGender = (gender) => {
    this.setState({genderSelected: gender});
  }
  handleQuestionAnswered = (answerValue, index) => {
    var answers;
    if (index === this.state.questionAnswers.length) {
      answers = this.state.questionAnswers.concat(answerValue);
    }
    else {
      answers = this.state.questionAnswers;
      answers[index] = answerValue;
    }
    console.log(answers);
    this.setState({questionAnswers: answers});
    console.log(this.state.questionAnswers);
  }
  componentDidMount() {
    this.setState({genderSelected: 'male'});
  }
	render(){
    

		const screenWidth = Math.round(Dimensions.get('window').width);
		const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    
		return(
      <View style={{height: screenHeight, width: screenWidth, position: 'absolute', top: screenHeight/13, paddingBottom: 50}}>
        <ScrollView>
          <View style={S.intro}>
            <Text style={S.intro_welcome}>
              Velkommen
            </Text>
            <Text style={S.intro_welcome_span}>
              Nicolai Knudsen
            </Text>
            <Text style={S.intro_date}>
              Fredag d. 12 maj 2019
            </Text>
          </View>
          
          <View style={S.section}>
            <View style={S.box}>
              <Text style={S.textSizeFour}>
                Information
              </Text>
              <Text style={S.textBubble}>  
                Udfyld nedenstående oplysninger og spørgeskema omkring dit velbefindende, så vi har en idé om hvordan du har det. Du kan efterfølgende følge med i din udvikling direkte i dit dashboard.
              </Text>
            </View>
          </View>
          <View style={S.section}>
            <Text style={S.section_title}>
              VÆLG DIT KØN
            </Text>
            <View style={{flex: 1}}>
              <View style={[S.box, this.state.genderSelected === 'male' ? S.box_active : null]}>
              </View>
              <View style={[S.box, this.state.genderSelected === 'female' ? S.box_active : null]}>
              </View>
            </View>
          </View>
          <View style={S.section}>
            <Text style={S.section_title}>
              HVAD ER DIN ALDER?
            </Text>
            {/*insert dropdown stuff her*/}
          </View>
          <QuestionnaireQuestion S={S} title={'HVORDAN ER DIT HUMØR?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={1}/>
          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Rigtig meget'} title={'HVOR MEGET HOSTER DU?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={2}/>
          <QuestionnaireQuestion S={S} leftText={'Intet slim'} rightText={'Meget slim'} title={'HVOR MEGET SLIM HAR DU I LUNGERNE?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={3}/>
          <QuestionnaireQuestion S={S} leftText={'Intet'} rightText={'Meget'} title={'HVOR MEGET TRYKKEN FOR BRYSTET HAR DU?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={4}/>
          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Meget'} title={'HVOR FORPUSTET BLIVER DU NÅR DU GÅR OP AF ÉN ETAGE, ELLER OP AF EN BAKKE?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={5}/>
          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Meget'} title={'ER DU BEGRÆNSET AF NOGEN FORM FOR AKTIVITETER I DIT HJEM?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={6}/>
          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Meget'} title={'ER DU TRYG VED AT FORLADE DIT HJEM PÅ TRODS AF DIN LUNGESYGDOM?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={7}/>
          <QuestionnaireQuestion S={S} leftText={'Nej slet ikke'} rightText={'Ja meget'} title={'SOVER DU DYBT?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={8}/>
          <QuestionnaireQuestion S={S} leftText={'Nej slet ikke'} rightText={'Ja meget'} title={'HAR DU MASSERE AF ENERGI?'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={9}/>
          <Text style={S.outro}>
            Dine svar kan bruges af dig og din læge til at hjælpe med at forbedre behandlingen af din KOL, så du får størst muligt gavn af den.
          </Text>
          <TouchableOpacity>
            <Text style={[S.btn, S.btn_text]}>
              Gem
            </Text>
          </TouchableOpacity>
        {/*  <View style={S.biFooter}>
            <View style={S.biFooter_numbers}>

            </View>
          </View>*/}
        </ScrollView>
      </View>
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


export default CreateUserStepTwo;