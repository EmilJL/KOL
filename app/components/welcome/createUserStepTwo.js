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
  TextInput,
  Picker,
  Animated
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import SlidingUpPanel from 'rn-sliding-up-panel';
import QuestionnaireQuestion from './questionnaireQuestion.component.js';
import Male from "../../assets/male.svg";
import Female from "../../assets/female.svg";
import { createUserStepTwo } from '../../redux/actions/actions.js';
import FooterItem from './footerItem.component.js';

const S = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		padding: 13,
		height: 76,
		width: '100%',
		position: "absolute",
	    bottom: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: "#FFFFFF",
	},
  intro: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 27,
  },
  intro_welcome: {
    color: '#414D55',
    fontSize: 18,
    lineHeight: 22
  },
  intro_welcome_span: {
    color: '#414D55',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28
  },
  intro_date: {
    fontSize: 12,
    color: '#AEACBE',
    lineHeight: 14
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
    opacity: 1
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
    marginBottom: 25,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gender_box_choice: {
  	height: '100%',
  	width: '47%',
  	justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#F7F8FA',
    borderWidth: 2,
    borderRadius: 12
  },
  gender_box_choice_current: {
  	borderColor: 'grey'
  },
  gender_box_choice_active: {
  	borderColor: '#565BF6'
  },
  gender_box_choice_text: {
    color: '#989BB0',
    fontSize: 12,
    position: 'absolute',
    bottom: 30,
    /*fontWeight: 600*/
  },
  gender_box_choice_text_active: {
    color: '#414D55',
    fontWeight: 'bold'
    /*fontWeight: 600*/
  },
  gender_box_svg: {
  	position: 'absolute',
    top: 34
  },
  gender_box_active_span: {
    color: '#414D55'
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
        margin: 0,
        fontSize: 14,
        lineHeight: 22
  },
   btn: {
        /*display: 'block',*/
        alignSelf: 'center',
        backgroundColor: '#565BF6',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
  },
  btn_text: {
     textAlign: 'center',
     color: '#fff',
     fontWeight: '700',
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
    questionAnswers: [],
    topQuestionPosition: 0,
    pickedAge: 0,
    showFooter: false,
    bounceValue: new Animated.Value(78)
  }

  _toggleFooter() {
  	console.log('asdfafsfasdadvvv');
  	var toValue = 78;
  	var show = this.state.showFooter;
  	if (show === false) {
  		toValue = 0;
  	}

  	Animated.timing(
      this.state.bounceValue,
      {
      	duration: 1200,
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start();
    this.setState({showFooter: !show});
  }

  _onLayout = ({ nativeEvent: { layout: { x, y, width, height } } }) => {
   	this.setState({topQuestionPosition: y+height});
  }

  handleSaveClick = () => {
  	if (this.state.questionnaireAnswers.length == 9) {
  		var answers = 
    	[
    		{1: this.state.questionnaireAnswers[0]},
    		{2: this.state.questionnaireAnswers[1]},
    		{3: this.state.questionnaireAnswers[2]},
    		{4: this.state.questionnaireAnswers[3]},
    		{5: this.state.questionnaireAnswers[4]},
    		{6: this.state.questionnaireAnswers[5]},
    		{7: this.state.questionnaireAnswers[6]},
    		{8: this.state.questionnaireAnswers[7]},
    		{9: this.state.questionnaireAnswers[8]},
    	];
    	var age = this.state.pickedAge;
    	var sex = this.state.genderSelected;
    	this.props.createUser(age, sex, answers);
  	}
  	
  }

  handleSelectGender = (gender) => {
    this.setState({genderSelected: gender});
    this.myScroll.scrollTo({x: 0, y: 400, animated: true});
  }

  handleQuestionAnswered = (answerValue, index) => {
  	if (index === 0) {
  		console.log('eeey');
  		this._toggleFooter();
  	}
    if (!(index > this.state.questionAnswers.length)) {
    	var answers;
    	if (index === this.state.questionAnswers.length) {
	        answers = this.state.questionAnswers.concat(answerValue);
	        var position = this.state.topQuestionPosition;
	        this.myScroll.scrollTo({x: 0, y: position+(index*149), animated: true})
	    }
	    else{
	    	answers = this.state.questionAnswers;
	      	answers[index] = answerValue;
	    }
	    this.setState({questionAnswers: answers});
    }
    if (index === 8) {
    	this._toggleFooter();
    }
  }
  componentDidMount() {
  	console.log(this.state.pickedAge);
  }
	render(){
    

	const screenWidth = Math.round(Dimensions.get('window').width);
	const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    const ages = this.props.ages;
	return(
		
      <View style={{height:  screenHeight+26, width: screenWidth, paddingTop: screenHeight/13, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
       <View style={{flex: 1, backgroundColor: '#F7F8FA'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#F7F8FA'}} ref={(ref) => {this.myScroll = ref}}>
          <View style={S.intro}>
            <Text style={S.intro_welcome}>
              Velkommen,
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
	            <View style={S.gender_box}>
	              <TouchableOpacity onPress={() => this.handleSelectGender('male')} style={[S.gender_box_choice, {left: 0, position: 'absolute'}, this.state.genderSelected === 'male' ? S.gender_box_choice_active : (this.state.genderSelected === '' ? S.gender_box_choice_current : null)]}>
	              	<Male width={55} height={58} style={S.gender_box_svg} stroke={this.state.genderSelected === 'male' ? '#565BF6' : '#989BB0'} />
	              	<Text style={[S.gender_box_choice_text, this.state.genderSelected === 'male' ? S.gender_box_choice_text_active : (this.state.genderSelected === '' ? S.gender_box_choice_text_active : null)]}>Mand</Text>
	              </TouchableOpacity>
	              <TouchableOpacity onPress={() => this.handleSelectGender('female')} style={[S.gender_box_choice, {right: 0, position: 'absolute'}, this.state.genderSelected === 'female' ? S.gender_box_choice_active : (this.state.genderSelected === '' ? S.gender_box_choice_current : null)]}>
	              	<Female width={55} height={58} style={S.gender_box_svg} stroke={this.state.genderSelected === 'female' ? '#565BF6' : '#989BB0'} />
	              	<Text style={[S.gender_box_choice_text, this.state.genderSelected === 'female' ? S.gender_box_choice_text_active : (this.state.genderSelected === '' ? S.gender_box_choice_text_active : null)]}>Dame</Text>
	              </TouchableOpacity>
	            </View>
          </View>
          <View style={S.section} onLayout={this._onLayout}>
            <Text style={S.section_title}>
              HVAD ER DIN ALDER?
            </Text>
            <View style={[S.section, {width: '100%', paddingLeft: 0, paddingRight: 0}]}>
	          	<View style={[S.box, this.state.pickedAge == 0 ? (this.state.genderSelected == '' ? null : S.box_current) : S.box_active, {height: 63, width: '100%', backgroundColor: 'white'}]}>
		            <Picker
					  selectedValue={this.state.pickedAge}
					  style={{height: 63, width: '100%'}}
					  mode='dropdown'
					  itemStyle={{fontWeight: 'bold'}}
					  onValueChange={(itemValue, itemIndex) =>
					    this.setState({pickedAge: itemValue})
					  }>
					  {ages.map((item) => {
					  		return <Picker.Item label={' ' + item.toString()} value={item} key={item} /> 
						})}   
					</Picker>
	          	</View>
            </View>
          </View>
          <QuestionnaireQuestion S={S} title={'HVORDAN ER DIT HUMØR?'} questionAnswers={this.state.questionAnswers} agePicked={this.state.pickedAge} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={1}/>
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
          <View style={[S.btn, {width: screenWidth*0.6}]}>
            <Text style={S.btn_text}>
              Gem
            </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
		</View>
      <Animated.View
            style={[S.footer,
              {transform: [{translateY: this.state.bounceValue}]}]}
          >
            <FooterItem questionNumber={1} isActive={this.state.questionAnswers.length >= 1 ? true : false} /> 
			<FooterItem questionNumber={2} isActive={this.state.questionAnswers.length >= 2 ? true : false} />
			<FooterItem questionNumber={3} isActive={this.state.questionAnswers.length >= 3 ? true : false} />
			<FooterItem questionNumber={4} isActive={this.state.questionAnswers.length >= 4 ? true : false} />
			<FooterItem questionNumber={5} isActive={this.state.questionAnswers.length >= 5 ? true : false} />
			<FooterItem questionNumber={6} isActive={this.state.questionAnswers.length >= 6 ? true : false} />
			<FooterItem questionNumber={7} isActive={this.state.questionAnswers.length >= 7 ? true : false} />
			<FooterItem questionNumber={8} isActive={this.state.questionAnswers.length >= 8 ? true : false} />
			<FooterItem questionNumber={9} isActive={this.state.questionAnswers.length >= 9 ? true : false} />
			
          </Animated.View>
          
      </View>
      
    );
	}
}
const mapStateToProps = state => {
	return {
		ages: state.users.ages,
		questions: state.users.questions
	}
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (age, sex, answers) => {
      dispatch(attemptCreateUserStepTwo(age, sex, answers));
    }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserStepTwo);