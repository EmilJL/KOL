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

class Graphs extends Component {
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
			<View style={{flex: 1,}}>

				<View style={S.section}>

	              	<Text style={S.section_title}>
	                	Din ugentlige KOL score
	              	</Text>

					<View style={S.box}>

		            	<View style={S.boxInner}>

			              	<Text style={S.graphScore}>
			                	25
			              	</Text>

			              	<Text style={S.boxTitle}>
			                	Gennemsnitlig ugentligt KOL score
			              	</Text>

			           		<View style={S.graphWrapper}>

					            <View style={S.graphPile}>
			              			<View style={{height: '50%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
			              				</Text>
			              			</View>
					             </View>

					            <View style={S.graphPile}>
			              			<View style={{height: '50%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
			              				</Text>
			              			</View>
					             </View>

					            <View style={S.graphPile}>
			              			<View style={{height: '50%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
			              				</Text>
			              			</View>
					             </View>

					            <View style={S.graphPile}>
			              			<View style={{height: '50%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
			              				</Text>
			              			</View>
					             </View>
					             
					            <View style={S.graphPile}>
			              			<View style={{height: '100%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
			              				</Text>
			              			</View>
					             </View>
					             
					            <View style={S.graphPile}>
			              			<View style={{height: '50%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
			              				</Text>
			              			</View>
					             </View>
					             
					            <View style={S.graphPile}>
			              			<View style={{height: '50%', backgroundColor: '#565BF6', position: 'absolute', bottom: 0, width: 7, borderRadius: 4}}>
			              				<Text style={S.graphPileCount}>
			              					29
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

export default Graphs;