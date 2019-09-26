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
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { getUserQuestionsFromOthers, setModal } from '../../redux/actions/actions.js';
import QuestionItem from './questionItem.js';

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
		fontWeight: 'bold',
	},
	box: {
		backgroundColor: '#fff',
		width: '100%',
		borderRadius: 7,
		elevation: 2
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
		height: 30,
		marginTop: 10
	},
	boxHeaderBtnActive: {
		backgroundColor: 'white',
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


class QuestionsOthers extends Component {
	state={
		questionsShown: 3,
		pageNumber: 1,
		questionsLoaded: 0,
		totalPages: 0
	}



	questionList() {
		var pageNumber = this.state.pageNumber;
		var questionsShown = this.state.questionsShown;
		return this.props.questions.map((question, index) => {
			if (index <= (pageNumber*questionsShown) - 1 && pageNumber === 1 || index <= (pageNumber*questionsShown) - 1 && index >= ((pageNumber-1) * questionsShown)) {
			
				if (index == 0 || index == (pageNumber-1)*questionsShown) {
					return (
						<QuestionItem id={question.ID} key={question.ID} date={question.post_date} questionTitle={question.post_title} questionUser={question.post_author_nickname} questionText={question.post_content} handleQuestionClick={(text, title, date, id) => this.handleQuestionClick(text, title, date, id)} />
					)
				}
				else{
					return (
						<View key={index}>
							<View style={S.borderLine}></View>
							<QuestionItem id={question.ID} key={question.ID} date={question.post_date} questionTitle={question.post_title} questionUser={question.post_author} questionText={question.post_content} handleQuestionClick={(text, title, date, id) => this.handleQuestionClick(text, title, date, id)} />
						</View>
					)
				}
			}
		})
	}
	handleQuestionClick = (text, title, date, id) => {
	
		this.props.setModal(true, 'userQuestionDisplay', text, title, true, date, id)
	}
	handleQuestionPageNavigation = (type) => {
		var pageNumber = this.state.pageNumber;
		var questionsLoaded = this.state.questionsLoaded;
		if(type === 'back' && pageNumber != 1){
			pageNumber--;
			this.setState({pageNumber});
		}
		else if(type === 'forward' && !((pageNumber+1)*this.state.questionsShown > this.props.questions.length)) {
			pageNumber++;
			this.setState({pageNumber});
			if ((pageNumber*this.state.questionsShown)+this.state.questionsShown >= questionsLoaded) {
				
				this.props.getQuestions(questionsLoaded, questionsLoaded);
				questionsLoaded = questionsLoaded*2;
				this.setState({questionsLoaded});
			}
		}
		
	}	
	componentDidMount() {
		this.props.questionsShown && this.props.questionsShown == 3 ? null : this.setState({questionsShown: 10});
		this.props.getQuestions(0, 30);
	}
	render(){
		const totalQuestions = this.props.questions && this.props.questions.length > 0 ? Math.floor(this.props.questions.length/this.state.questionsShown) : 0;

		if (this.props.questionsShown && this.props.questionsShown == 3) {
			return(
			<View style={S.background}>

				<Text style={S.sectionTitle}>
					Seneste spørgsmål
				</Text>

				<View style={S.box}>
					<View style={S.boxHeader}>
						<TouchableOpacity onPress={() => console.log('')}>
							<View style={[S.boxHeaderBtn, S.boxHeaderBtnActive]}>
								<Text>
									Alle
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => console.log('')}>
							<View style={S.boxHeaderBtn}>
								<Text>
									Nyeste
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => console.log(this.props.questions)}>
							<View style={S.boxHeaderBtn}>
								<Text>
									Ulæste
								</Text>
							</View>
						</TouchableOpacity>
						
					</View>
					<View style={S.boxInner}>
						{this.props.questions && this.props.questions.length > 0 ? this.questionList() : null}
					</View>
				</View>

				<View style={[S.box, S.pagination]}>
					<TouchableOpacity style={{paddingRight: 20, margin: 0, position: 'relative'}} onPress={() => this.handleQuestionPageNavigation('back')}>
						<View style={S.paginationActions}>
							<Text style={S.paginationText}>
								{'<'}
							</Text>
						</View>
					</TouchableOpacity>
					<View style={[S.paginationActions, {flex: 2, justifyContent: 'center', alignItems: 'center'}]}>
						<Text style={[S.paginationText, S.paginationPageCount, {justifyContent: 'center', alignItems: 'center'}]}>
							{'Side ' + this.state.pageNumber + ' af ' + totalQuestions}
						</Text>
					</View>
					<TouchableOpacity style={{paddingLeft: 20, margin: 0, position: 'relative'}} onPress={() => this.handleQuestionPageNavigation('forward')}>
						<View style={S.paginationActions}>
							<Text style={[S.paginationText, S.paginationArrowRight]}>
								>
							</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>
			);
		}
		else{
			return(
			<ScrollView style={{flex: 1}}>
			<View style={S.background}>

				<Text style={S.sectionTitle}>
					Seneste spørgsmål
				</Text>

				<View style={S.box}>
					<View style={S.boxHeader}>
						<TouchableOpacity onPress={() => console.log('')}>
							<View style={[S.boxHeaderBtn, S.boxHeaderBtnActive]}>
								<Text>
									Alle
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => console.log('')}>
							<View style={S.boxHeaderBtn}>
								<Text>
									Nyeste
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => console.log(this.props.questions)}>
							<View style={S.boxHeaderBtn}>
								<Text>
									Ulæste
								</Text>
							</View>
						</TouchableOpacity>
						
					</View>
					<View style={S.boxInner}>
						{this.props.questions && this.props.questions.length > 0 ? this.questionList() : null}
					</View>
				</View>

				<View style={[S.box, S.pagination]}>
					<TouchableOpacity style={{paddingRight: 20, margin: 0, position: 'relative'}} onPress={() => this.handleQuestionPageNavigation('back')}>
						<View style={S.paginationActions}>
							<Text style={S.paginationText}>
								{'<'}
							</Text>
						</View>
					</TouchableOpacity>
					<View style={[S.paginationActions, {flex: 2, justifyContent: 'center', alignItems: 'center'}]}>
						<Text style={[S.paginationText, S.paginationPageCount, {justifyContent: 'center', alignItems: 'center'}]}>
							{'Side ' + this.state.pageNumber + ' af ' + totalQuestions}
						</Text>
					</View>
					<TouchableOpacity style={{paddingLeft: 20, margin: 0, position: 'relative'}} onPress={() => this.handleQuestionPageNavigation('forward')}>
						<View style={S.paginationActions}>
							<Text style={[S.paginationText, S.paginationArrowRight]}>
								>
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{height: 100}}>
				</View>
			</View>
			</ScrollView>
		);
		}
		
	}
}

const mapStateToProps = state => {
	return {
		questions: state.users.userQuestionsOthers
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getQuestions: (offset, limit) => {
			dispatch(getUserQuestionsFromOthers(offset, limit))
		},
		setModal: (isVisible, type, text, title, editable, date, id) => {
	      dispatch(setModal(isVisible, type, text, title, editable, date, id));
	    } 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsOthers);