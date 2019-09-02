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
		opacity: 96,
		width: '100%',
		height: '100%',
		padding: 20,
	},
	sectionTitle: {
		textTransform: 'uppercase',
		color: '#AEACBE',
		marginBottom: 15,
		fontWeight: 'bold'
	},
	box: {
		backgroundColor: '#fff',
		width: '100%',
		borderRadius: 7,
	},
	boxHeader: {
		backgroundColor: '#F8F9FF',
		height: 50,
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
		flexDirection: 'row',
		paddingLeft: 20,
	},
	boxHeaderBtn: {
		marginRight: 20,
		justifyContent: 'center',
	},
	boxHeaderBtnActive: {
		backgroundColor: 'white',
		height: 30,
		marginTop: 10,
		paddingLeft: 13,
		paddingRight: 13,
		borderRadius: 15,
		elevation: 4,
	},
	boxInner: {
		paddingTop: 24,
		paddingLeft: 20,
		paddingRight: 20,
	},
	question: {
	},
	questionDateTime: {
		color: '#C5C8CB',
		textTransform: 'uppercase',
		fontSize: 10,
	},
	questionTitle: {
		fontSize: 16,
		color: '#414D55',
		fontWeight: 'bold',
		width: '80%',
		marginTop: 6,
		marginBottom: 7,
		lineHeight: 22,
	},
	questionBy: {
		fontSize: 10,
		color: '#8D9499',
	},
	btns: {
		flexDirection: 'row',
		marginTop: 19,
		marginBottom: 30,
	},
	btn: {
		backgroundColor: '#F8F9FF',
		borderRadius: 15,
		marginRight: 20,
		height: 30,
		paddingLeft: 17,
		paddingRight: 17,
	},
	btnText: {
		color: '#565BF6',
		lineHeight: 30,
		fontSize: 12,
	},
	borderLine: {
		backgroundColor: '#C5C9CB',
		height: 1,
		width: '100%',
		marginBottom: 24
	},
	pagination: {
		flexDirection: 'row',
		marginTop: 16,
		height: 37,
		paddingLeft: 20,
		paddingRight: 20,
	},
	paginationActions: {
		flex: 1,
	},
	paginationText: {
		lineHeight: 37,
	},
	paginationPageCount: {
		textAlign: 'center',
	},
	paginationArrowRight: {
		textAlign: 'right',
	},
});

class QuestionItem extends Component {
	render(){
		console.log('renderJeg?');
		return(
			<View style={S.question}>
				<Text style={S.questionDateTime}>
					{this.props.date}
				</Text>

				<Text style={S.questionTitle}>
					{this.props.questionTitle}	
				</Text>

				<Text style={S.questionBy}>
					{this.props.questionUser}	
				</Text>

				<View style={S.btns}>
					<View style={S.btn}>
						<Text style={S.btnText}>
							Læs mere
						</Text>
					</View>

					<View style={S.btn}>
						<Text style={S.btnText}>
							Besvar
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default QuestionItem;