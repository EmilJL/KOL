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
  Image,
  Dimensions
} from 'react-native';

const S = StyleSheet.create({
	background: {
		
		backgroundColor: '#F7F8FA',
		paddingLeft: 20,
		paddingRight: 20
	},
	section_title: {
		color: '#AEACBE',
		marginTop: 23,
		marginBottom: 15,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
  	boxesWrapper: {
  		flexDirection: 'row',
  	},
  	weatherBox: {
  		backgroundColor: 'white',
  		height: 76,
  		borderRadius: 7,
  		flexDirection: 'row',
  		flex: 1, 
  		justifyContent: 'center', 
  		alignItems: 'center',
  	},
  	wheaterIcon: {
  		height: 32,
  		maxWidth: 30,
  		marginRight: 10,
  	},
  	weatherNumber: {
  		fontSize: 18,
  		color: '#414D55'
  	},
  	weatherType: {
  		fontSize: 14,
  		color: '#989BB0'
  	},


	
  	box: {
  		backgroundColor: 'white',
  		borderRadius: 7,
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
});

var styles = StyleSheet.create({
	
});

class DashboardWidget extends Component {
	render(){

		const screenHeight = Math.round(Dimensions.get('window').height);
		const screenWidth = Math.round(Dimensions.get('window').width);

		return(
			<View style={S.background}>

				<Text style={S.section_title}>
					Vejret i dag i Glostrup
				</Text>

				<View style={S.boxesWrapper}>

					<View style={[S.weatherBox, {marginRight: 20}]}>
						<Image resizeMode={'contain'} source={require('../../assets/sun_cloud.png')} style={S.wheaterIcon} />
						<View style={S.textWrapper}>
							<Text style={S.weatherNumber}>
								22°
							</Text>
							<Text style={S.weatherType}>
								Grader
							</Text>
						</View>
					</View>

					<View style={S.weatherBox}>
						<Image resizeMode={'contain'} source={require('../../assets/water.png')} style={S.wheaterIcon} />
						<View style={S.textWrapper}>
							<Text style={S.weatherNumber}>
								58%
							</Text>
							<Text style={S.weatherType}>
								Luftfugtighed
							</Text>
						</View>
					</View>

				</View>

				

			</View>
		);
	}
}

export default DashboardWidget;