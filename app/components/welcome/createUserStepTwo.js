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
  TextInput,
  Picker,
  Animated
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import SlidingUpPanel from 'rn-sliding-up-panel';
import QuestionnaireQuestion from './questionnaireQuestion.component.js';
import LoadingComponent from '../loading/loadingComponent.js';
import Male from "../../assets/male.svg";
import Female from "../../assets/female.svg";
import { attemptCreateUserStepTwo } from '../../redux/actions/actions.js';
import FooterItem from './footerItem.component.js';
import styles from '../../styles/styles.js';

const S = styles;

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
  	if (this.state.questionAnswers.length == 9) {
  		var answers = 
    	{
    		'1': this.state.questionAnswers[0],
    		'3': this.state.questionAnswers[1],
    		'4': this.state.questionAnswers[2],
    		'5': this.state.questionAnswers[3],
    		'6': this.state.questionAnswers[4],
    		'7': this.state.questionAnswers[5],
    		'8': this.state.questionAnswers[6],
    		'9': this.state.questionAnswers[7],
    		'10': this.state.questionAnswers[8],
    	};
    	console.log('final answers');
    	console.log(answers);
    	var age = this.state.pickedAge;
    	var sex = this.state.genderSelected;
    	var token = this.props.token;
    	this.props.createUser(age, sex, answers, token);
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
	        console.log('answers: ');
	        console.log(answers);
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
  	console.log('please herunder?');
  	console.log(this.props.questionnaireQuestions);
  }
	render(){
    

	const screenWidth = Math.round(Dimensions.get('window').width);
	const screenHeight = Math.round(Dimensions.get('window').height);
    const statusBarHeight = StatusBar.currentHeight;
    const ages = this.props.ages;
    const questionnaireQuestions = this.props.questionnaireQuestions
    if (this.props.createUserComplete) {
    	return(
        <LoadingComponent path={'DrawerFlow'} isNewUser={true} navigation={this.props.navigation} />
      );
    }
    else{
		return(
			
	      <View style={{position: 'absolute', top: 0, height: '100%', width: '100%', paddingTop: statusBarHeight, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
	       <View style={{flex: 1, backgroundColor: '#F7F8FA'}}>
	        <ScrollView style={{flex: 1, backgroundColor: '#F7F8FA', paddingTop: 25}} ref={(ref) => {this.myScroll = ref}}>
	          <View style={S.intro}>
	            <Text style={S.intro_welcome}>
	              Velkommen,
	            </Text>
	            <Text style={S.intro_welcome_span}>
	              {this.props.nickname}
	            </Text>
	            <Text style={[S.intro_date, {marginBottom: 12}]}>
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
	          <QuestionnaireQuestion S={S} title={questionnaireQuestions[0] ? questionnaireQuestions[0].sQuestion : '1'} questionAnswers={this.state.questionAnswers} agePicked={this.state.pickedAge} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={1}/>
	          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Rigtig meget'} title={questionnaireQuestions[1] ? questionnaireQuestions[1].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={2}/>
	          <QuestionnaireQuestion S={S} leftText={'Intet slim'} rightText={'Meget slim'} title={questionnaireQuestions[2] ? questionnaireQuestions[2].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={3}/>
	          <QuestionnaireQuestion S={S} leftText={'Intet'} rightText={'Meget'} title={questionnaireQuestions[3] ? questionnaireQuestions[3].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={4}/>
	          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Meget'} title={questionnaireQuestions[4] ? questionnaireQuestions[4].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={5}/>
	          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Meget'} title={questionnaireQuestions[5] ? questionnaireQuestions[5].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={6}/>
	          <QuestionnaireQuestion S={S} leftText={'Slet ikke'} rightText={'Meget'} title={questionnaireQuestions[6] ? questionnaireQuestions[6].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={7}/>
	          <QuestionnaireQuestion S={S} leftText={'Nej slet ikke'} rightText={'Ja meget'} title={questionnaireQuestions[7] ? questionnaireQuestions[7].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={8}/>
	          <QuestionnaireQuestion S={S} leftText={'Nej slet ikke'} rightText={'Ja meget'} title={questionnaireQuestions[8] ? questionnaireQuestions[8].sQuestion : '1'} questionAnswers={this.state.questionAnswers} genderSelected={this.state.genderSelected} handleQuestionAnswered={(answer, index) => this.handleQuestionAnswered(answer, index)} questionNumber={9}/>
	          <Text style={S.outro}>
	            Dine svar kan bruges af dig og din læge til at hjælpe med at forbedre behandlingen af din KOL, så du får størst muligt gavn af den.
	          </Text>
	          <TouchableOpacity onPress={() => this.handleSaveClick()}>
	          <View style={[S.btn, {width: screenWidth*0.6}]}>
	            <Text style={S.btn_text}>
	              Gem
	            </Text>
	            </View>
	          </TouchableOpacity>
	          <View style={{height: 30}}>
	          </View>
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
}
const mapStateToProps = state => {
	return {
		ages: state.users.ages,
		questionnaireQuestions: state.users.questionnaireQuestions,
		nickname: state.users.user.nickname,
		token: state.users.token,
		createUserComplete: state.users.createUserComplete
	}
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (age, sex, answers, token) => {
      dispatch(attemptCreateUserStepTwo(age, sex, answers, token));
    }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CreateUserStepTwo));