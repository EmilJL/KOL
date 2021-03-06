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
import { getQuestionnairesForUser } from '../../redux/actions/actions.js';
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
	    marginBottom: 0,
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
	    elevation: 2
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
/*function getWeekNumber(d) {
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
}*/

class Graphs extends Component {
	componentDidMount(){
		this.props.getQuestionnaires();
	}

	render(){
		var mondayScore = this.props.scores ? this.props.scores[1] : 0;
		var tuesdayScore = this.props.scores ? this.props.scores[2] : 0;
		var wednesdayScore = this.props.scores ? this.props.scores[3] : 0;
		var thursdayScore = this.props.scores ? this.props.scores[4] : 0;
		var fridayScore = this.props.scores ? this.props.scores[5] : 0;
		var saturdayScore = this.props.scores ? this.props.scores[6] : 0;
		var sundayScore = this.props.scores ? this.props.scores[7] : 0;
		
			if (this.props.isForDashboard && this.props.isForDashboard == true) {
				return(
				
				<View style={{flex: 1}}>
					<View style={S.section}>
							<Text style={S.section_title}>
			                	Din ugentlige KOL score
			              	</Text>
						<View style={S.box}>

			            	<View style={S.boxInner}>

				              	<Text style={S.graphScore}>
				              		{this.props.scores ? this.props.scores[0] : 0}
				              	</Text>

				              	<Text style={S.boxTitle}>
				                	Gennemsnitlig ugentligt KOL score
				              	</Text>

				           		<View style={S.graphWrapper}>

						            <View style={S.graphPile}>
				              			<View style={{height: mondayScore != 0 ? Math.round(mondayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
				              				<Text style={S.graphPileCount}>
				              					{mondayScore}
				              				</Text>
				              			</View>
						             </View>

						            <View style={S.graphPile}>
				              			<View style={{height: tuesdayScore != 0 ? Math.round(tuesdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
				              				<Text style={S.graphPileCount}>
				              					{tuesdayScore}
				              				</Text>
				              			</View>
						             </View>

						            <View style={S.graphPile}>
				              			<View style={{height: wednesdayScore != 0 ? Math.round(wednesdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
				              				<Text style={S.graphPileCount}>
				              					{wednesdayScore}
				              				</Text>
				              			</View>
						             </View>

						            <View style={S.graphPile}>
				              			<View style={{height: thursdayScore != 0 ? Math.round(thursdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
				              				<Text style={S.graphPileCount}>
				              					{thursdayScore}
				              				</Text>
				              			</View>
						             </View>
						             
						            <View style={S.graphPile}>
				              			<View style={{height: fridayScore != 0 ? Math.round(fridayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
				              				<Text style={S.graphPileCount}>
				              					{fridayScore}
				              				</Text>
				              			</View>
						             </View>
						             
						            <View style={S.graphPile}>
				              			<View style={{height: saturdayScore != 0 ? Math.round(saturdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
				              				<Text style={S.graphPileCount}>
				              					{saturdayScore}
				              				</Text>
				              			</View>
						             </View>
						             
						            <View style={S.graphPile}>
				              			<View style={{height: sundayScore != 0 ? Math.round(sundayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
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
		
		else {
			return(
				<ScrollView style={{flex: 1}}>
					<View style={{height: 760, marginTop: 20}}>
						<View style={S.section}>

							<Text style={S.section_title}>
			                	Din ugentlige KOL score
			              	</Text>

							<View style={S.box}>

			            		<View style={S.boxInner}>

				              		<Text style={S.graphScore}>
				                		{this.props.scores && this.props.scores[0] ? this.props.scores[0] : 0}
				              		</Text>

					              	<Text style={S.boxTitle}>
					                	Gennemsnitlig ugentligt KOL score
					              	</Text>

					           		<View style={S.graphWrapper}>

							            <View style={S.graphPile}>
					              			<View style={{height: mondayScore != 0 ? Math.round(mondayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
					              				<Text style={S.graphPileCount}>
					              					{mondayScore}
					              				</Text>
					              			</View>
							             </View>

							            <View style={S.graphPile}>
					              			<View style={{height: tuesdayScore != 0 ? Math.round(tuesdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
					              				<Text style={S.graphPileCount}>
					              					{tuesdayScore}
					              				</Text>
					              			</View>
							             </View>

							            <View style={S.graphPile}>
					              			<View style={{height: wednesdayScore != 0 ? Math.round(wednesdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
					              				<Text style={S.graphPileCount}>
					              					{wednesdayScore}
					              				</Text>
					              			</View>
							             </View>

							            <View style={S.graphPile}>
					              			<View style={{height: thursdayScore != 0 ? Math.round(thursdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
					              				<Text style={S.graphPileCount}>
					              					{thursdayScore}
					              				</Text>
					              			</View>
							             </View>
							             
							            <View style={S.graphPile}>
					              			<View style={{height: fridayScore != 0 ? Math.round(fridayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
					              				<Text style={S.graphPileCount}>
					              					{fridayScore}
					              				</Text>
					              			</View>
							             </View>
							             
							            <View style={S.graphPile}>
					              			<View style={{height: saturdayScore != 0 ? Math.round(saturdayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
					              				<Text style={S.graphPileCount}>
					              					{saturdayScore}
					              				</Text>
					              			</View>
							             </View>
							             
							            <View style={S.graphPile}>
					              			<View style={{height: sundayScore != 0 ? Math.round(sundayScore/40*234) : 5, backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
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
				</ScrollView>
			);
		}
	}
}

mapStateToProps = state => {
  return {
  	scores: state.users.scoresForWeek
  }
}
mapDispatchToProps = dispatch => {
  	return {
  		getQuestionnaires: () => {
	      dispatch(getQuestionnairesForUser('2019-01-01', '2019-12-31'))
	    }	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Graphs);