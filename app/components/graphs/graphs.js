import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';

const S = StyleSheet.create({
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
	    paddingBottom: 25, 
	},
	boxInner: {
	    paddingLeft: 20,
	    paddingRight: 20,
	    paddingTop: 16
	},
	textBubble: {
	    marginTop: 25,
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
	graphScore: {
		fontWeight: 'bold',
		fontSize: 28,
		lineHeight: 40
	},
	boxTitle: {
		fontSize: 16,
		paddingBottom: 10
	},
	subText: {
	  	marginTop: 11,
	  	fontSize: 12,
	  	color: '#AEACBE',
	},
	graphWrapper: {
	  	flexDirection: 'row',
	  	width: '100%',
	  	marginTop: 22,
	  	height: 234,
	  	alignItems: 'flex-end',
	},
	weekDays: {
	  	flexDirection: 'row',
	},
	weekDay: {
		flexGrow: 1,
		position: 'relative',
		textAlign: 'center',
		color: '#414D55',
	},
	graphPile: {
		flexGrow: 1,
		width: 7,
		height: 234,
		backgroundColor: '#FAFBFD',
		justifyContent: 'center',
		alignItems: 'center',
	},
	graphPileProcent: {
		position: 'absolute',
		bottom: 0,
		width: 7,
		backgroundColor: '#565BF6',
		borderRadius: 4,
	},
	graphPileCount: {
		width: 28,
		height: 20,
		backgroundColor: '#989BB0',
		color: 'white',
		textAlign: 'center',
		position: 'absolute',
		top: -28,
		left: -10.5,
		fontSize: 10,
		lineHeight: 20,
		borderRadius: 8,
	},
});
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}

class Graphs extends Component {
	state={
		titleIsActive: false,
		textFieldIsActive: false,
		diaryDate: 'Skrevet d. 29 Nov 2019',
		mondayScore: 0,
		tuesdayScore: 0,
		wednesdayScore: 0,
		thursdayScore: 0,
		fridayScore: 0,
		saturdayScore: 0,
		sundayScore: 0,
		averageScore: 0
	}

	setScoresForWeek = () => {

		var weekNumber = getWeekNumber(new Date());
		var questionnaires = this.props.questionnaires[0];
		console.log(questionnaires);
		var questionnairesToShow = [];
		var currentDay;
		var totalScore = 0;
		var answersForWeek = 0;

		for (var i = 0; i < questionnaires.length; i++) {
			 var questionnaire = questionnaires[i];
			 console.log(questionnaire.dtCreated);
			 var questionnaireDate = new Date(questionnaire.dtCreated);
			 var dayNum = questionnaireDate.getUTCDay() || 7;
			 var weekNumberQuestionnaire = getWeekNumber(questionnaireDate);
			 console.log('testYOOO');
			 console.log(weekNumber);
			 console.log(weekNumberQuestionnaire);
			 
			 if (weekNumberQuestionnaire[1] == weekNumber[1]) {
			 	var score = 0;
			 	for (var t = 0; t < questionnaire.answers.length; t++) {
			 		if (t != 0) {
			 			score = parseInt(questionnaire.answers[t].iAnswer)+score;
			 			console.log('score: ' + score);
			 		}
			 	}
			 	totalScore += score;
			 	answersForWeek++;
		
			 	switch (dayNum) {
			 		case 1:
			 				this.setState({mondayScore: score});
			 				break;
			 		case 2:
			 				this.setState({tuesdayScore: score});
			 				break;
			 		case 3:
			 				this.setState({wednesdayScore: score});
			 				break;
			 		case 4:
			 				this.setState({thursdayScore: score});
			 				break;
			 		case 5:
			 				this.setState({fridayScore: score});
			 				break;
			 		case 6:
			 				this.setState({saturdayScore: score});
			 				break;
			 		case 7:
			 				this.setState({sundayScore: score});
			 				break;
			 		default:
			 			return null;
			 	}
			}
		}
		var averageScore = totalScore/answersForWeek;
		this.setState({averageScore});
	}
	test = () => {
		console.log('hereingraphs: ');
		console.log(this.props.questionnaires);
	}
	componentDidMount(){
		this.setScoresForWeek();
	}

	render(){
		var mondayScore = this.state.mondayScore;
		var tuesdayScore = this.state.tuesdayScore;
		var wednesdayScore = this.state.wednesdayScore;
		var thursdayScore = this.state.thursdayScore;
		var fridayScore = this.state.fridayScore;
		var saturdayScore = this.state.saturdayScore;
		var sundayScore = this.state.sundayScore;
		return(
			<View style={{flex: 1,}}>
				<View style={S.section}>
						<Text style={S.section_title}>
		                	Din ugentlige KOL score
		              	</Text>
	              	

					<View style={S.box}>

		            	<View style={S.boxInner}>

			              	<Text style={S.graphScore}>
			                	{this.state.averageScore}
			              	</Text>

			              	<Text style={S.boxTitle}>
			                	Gennemsnitlig ugentligt KOL score
			              	</Text>

			           		<View style={S.graphWrapper}>

					            <View style={S.graphPile}>
			              			<View style={{height: mondayScore != 0 ? Math.round(mondayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{mondayScore}
			              				</Text>
			              			</View>
					             </View>

					            <View style={S.graphPile}>
			              			<View style={{height: tuesdayScore != 0 ? Math.round(tuesdayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{tuesdayScore}
			              				</Text>
			              			</View>
					             </View>

					            <View style={S.graphPile}>
			              			<View style={{height: wednesdayScore != 0 ? Math.round(wednesdayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{wednesdayScore}
			              				</Text>
			              			</View>
					             </View>

					            <View style={S.graphPile}>
			              			<View style={{height: thursdayScore != 0 ? Math.round(thursdayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{thursdayScore}
			              				</Text>
			              			</View>
					             </View>
					             
					            <View style={S.graphPile}>
			              			<View style={{height: fridayScore != 0 ? Math.round(fridayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{fridayScore}
			              				</Text>
			              			</View>
					             </View>
					             
					            <View style={S.graphPile}>
			              			<View style={{height: saturdayScore != 0 ? Math.round(saturdayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{saturdayScore}
			              				</Text>
			              			</View>
					             </View>
					             
					            <View style={S.graphPile}>
			              			<View style={{height: sundayScore != 0 ? Math.round(sundayScore/40*234) : 0, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					{sundayScore}
			              				</Text>
			              			</View>
					             </View>

				            </View>

			              	<View style={S.weekDays}>
				              	<Text style={S.weekDay}>
				              		man
				              	</Text>
				              	<Text style={S.weekDay}>
				              		tir
				              	</Text>
				              	<Text style={S.weekDay}>
				              		ons
				              	</Text>
				              	<Text style={S.weekDay}>
				              		tor
				              	</Text>
				              	<Text style={S.weekDay}>
				              		fre
				              	</Text>
				              	<Text style={S.weekDay}>
				              		lør
				              	</Text>
				              	<Text style={S.weekDay}>
				              		søn
				              	</Text>
			           		</View>

			           		<View style={S.textBubble}>
				              	<Text style={S.textBubbleText}>  
				                	Dine svar kan bruges af dig og din læge til at hjælpe med at forbedre behandlingen af din KOL, så du får størst muligt gavn af den.
				              	</Text>

				              	<Text style={S.diaryDate}>
				                	Vend tilbage imorgen og tag testen igen for at få en bedre overblik over din sygdom
				              	</Text>
			           		</View>
			           	
			            </View>

					</View>

				</View>

			</View>
		);
	}
}

mapStateToProps = state => {
  return {
  	questionnaires: state.users.questionnaires
  }
}

export default connect(mapStateToProps)(Graphs);