import { normalize, schema } from 'normalizr';
import fetch from 'cross-fetch';
import { Alert } from 'react-native'; 
import AsyncStorage from '@react-native-community/async-storage';


const POPULATE_QUESTIONNAIRE_ANSWERS = 'POPULATE_QUESTIONNAIRE_ANSWERS';
const POPULATE_MESSAGES = 'POPULATE_MESSAGES';
const POPULATE_CALENDAR = 'POPULATE_CALENDAR';

const FETCH_FORUM_DATA = 'FETCH_FORUM_DATA';
const RECEIVE_FORUM_DATA = 'RECEIVE_FORUM_DATA';
const FAIL_FETCHING_FORUM_DATA = 'FAIL_FETCHING_FORUM_DATA'


const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_CALENDAR_ENTRY = 'ADD_CALENDAR_ENTRY';

const NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE = 'NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE';

const NOTIFY_NEW_FORUM_REPLY = 'NOTIFY_FORUM_REPLY';




const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONS';



const ATTEMPT_GET_DIARY_FOR_USER = 'ATTEMPT_GET_DIARY_FOR_USER';
const attemptGetDiaryForUser = () => {
	return {
		type: ATTEMPT_GET_DIARY_FOR_USER
	}
}

const SET_AGES = 'SET_AGES';
const setAges = (ages) => {
	return {
		type: SET_AGES,
		payload: ages
	}
}
export const setAgesNow = () => {
	return (dispatch) => {
		var ages = [];
	  	for (var i = 17; i <= 99; i++) {
	  		ages.push(i);
		}
		return dispatch(setAges(ages))
	}
}

export const getDiaryForUser = (offset, limit) => {
	return (dispatch, getState) => {
		var token = getState().users.token;
		fetch('https://my.kolapp.dk/wp-json/keu/v1/diary/my', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				offset: offset,
				limit: limit
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			var diary = {
				title: responseJson.post_title,
				public: responseJson.post_status == "publish" ? true : false,
				comments: responseJson.comments
			}
			return dispatch(setDiaryForUser(diary));
		})
		.catch(err => console.log(err));
	}
}

const SET_DIARY_FOR_USER = 'SET_DIARY_FOR_USER';
const setDiaryForUser = (diary) => {
	return {
		type: SET_DIARY_FOR_USER,
		payload: diary
	}
}

const ATTEMPT_ADD_DIARY_COMMENT = 'ATTEMPT_ADD_DIARY_COMMENT';
const attemptAddDiaryComment = () => {
	return {
		type: ATTEMPT_ADD_DIARY_COMMENT
	}
}

export const addDiaryComment = (comment) => {
	return (dispatch, getState) => {
		var token = getState().users.token;
		var now = new Date();
		fetch('https://my.kolapp.dk/wp-json/keu/v1/diary/insert', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				diarytitle: now.toString(),
				diarytext: comment,
				publish: 0
			}),
		})
		.then((response) => {
			var newDiary = getState().users.diary;
			newDiary.comments.push(comment);
			dispatch(setDiaryForUser(newDiary)); 
		})
		.catch(err => console.log(err));
	}
}

/*const SET_DIARY_COMMENT = 'SET_DIARY_COMMENT';
const setDiaryComment = (comment) => {
	return {
		type: SET_DIARY_COMMENT,
		payload: comment
	}
}
*/

const SET_TOKEN = 'SET_TOKEN';
const setToken = (token) => {
	return {
		type: SET_TOKEN,
		payload: token 
	}
}
const ATTEMPT_GET_QUESTIONS_FOR_USER = 'ATTEMPT_GET_QUESTIONS_FOR_USER';
const attemptGetQuestionsForUser = () => {
	return {
		type: ATTEMPT_GET_QUESTIONS_FOR_USER
	}
}
const ATTEMPT_GET_ANSWERS_FOR_USER = 'ATTEMPT_GET_ANSWERS_FOR_USER';
const attemptGetAnswersForUser = () => {
	return {
		type: ATTEMPT_GET_ANSWERS_FOR_USER
	}
}

export const getUserQuestions = (offset, limit) => {
	return (dispatch, getState) => {
		dispatch(attemptGetQuestionsForUser());
		var token = getState().users.token;
		var now = new Date();
		fetch('https://my.kolapp.dk/wp-json/keu/v1/userquestions/myquestions', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				offset: offset,
				limit: limit
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			var questions = responseJson.map(function(el) {
				var o = Object.assign({}, el);
				var q = {};
				q.id = o.ID
				q.userID = o.post_author; 
				q.title = o.post_title;
				q.posted = o.post_date;
				q.text = o.post_content;
				q.edited = o.post_modified;
				q.comments = o.comments;
				return q;
			});
			return dispatch(setUserQuestions(questions));
		})
		.catch(err => console.log(err));
	}
}

export const getUserQuestionsAndAnswers = () => {
	getUserAnswers();
	getUserQuestions();
	getUserQuestionsOthers();
	return true;
}



export const getUserAnswers = (offset, limit) => {
	return (dispatch, getState) => {
		dispatch(attemptGetAnswersForUser());
		var token = getState().users.token;
		var now = new Date();
		fetch('https://my.kolapp.dk/wp-json/keu/v1/useranswer/myanswer', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				offset: offset,
				limit: limit
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			var questions = responseJson.map(function(el) {
				var o = Object.assign({}, el);
				var q = {};
				q.id = o.ID
				q.userID = o.post_author; 
				q.title = o.post_title;
				q.posted = o.post_date;
				q.text = o.post_content;
				q.edited = o.post_modified;
				q.comments = o.comments;
				return q;
			});
			return dispatch(setUserQuestions(questions));
		})
		.catch(err => console.log(err));
	}
}
const ATTEMPT_GET_QUESTIONS_FROM_OTHERS = 'ATTEMPT_GET_QUESTIONS_FROM_OTHERS';
const attemptGetQuestionsFromOthers = () => {
	return {
		type: ATTEMPT_GET_QUESTIONS_FROM_OTHERS
	}
}
export const getUserQuestionsFromOthers = (offset, limit) => {
	return (dispatch, getState) => {
		dispatch(attemptGetQuestionsFromOthers());
		var token = getState().users.token;
		fetch('https://my.kolapp.dk/wp-json/keu/v1/userquestions/all', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				offset: offset,
				limit: limit
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			var questions = responseJson.map(function(el) {
				var o = Object.assign({}, el);
				var q = {};
				q.id = o.ID
				q.userID = o.post_author; 
				q.title = o.post_title;
				q.posted = o.post_date;
				q.text = o.post_content;
				q.edited = o.post_modified;
				q.comments = o.comments;
				return q;
			});
			return dispatch(setQuestionsFromOthers(responseJson));
		})
		.catch(err => console.log(err));
	}
}
const SET_QUESTIONS_FROM_OTHERS = 'SET_QUESTIONS_FROM_OTHERS';
const setQuestionsFromOthers = (questions) => {
	return {
		type: SET_QUESTIONS_FROM_OTHERS,
		payload: questions
	}
}

const SET_USER_QUESTIONS = 'SET_QUESTIONS_FOR_USER';
const setUserQuestions = (questions) => {
	return {
		type: SET_USER_QUESTIONS,
		payload: questions
	}
}

const SET_USER_ANSWERS = 'GET_ANSWERS_FOR_USER';
const setUserAnswers = (answers) => {
	return {
		type: SET_USER_ANSWERS,
		payload: answers
	}
}



const SET_QUESTIONNAIRES_FOR_USER = 'GET_QUESTIONNAIRES_FOR_USER';
const setQuestionnairesForUser = (questionnaires) => {
	return {
		type: SET_QUESTIONNAIRES_FOR_USER,
		payload: questionnaires
	}
}
export const getQuestionnairesForUser = (startDate, endDate) => {
	return (getState, dispatch) => {
		var token = getState().users.token;
		fetch('https://my.kolapp.dk/wp-json/keq/v1/questionnaire/get', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + state.users.token
			}),
			body: JSON.stringify({
				startdate: startDate,
				endDate: endDate
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(setQuestionnairesForUser(responseJson));
		})
		.catch(err => console.log(err));
	}
}



const CHECK_QUESTIONNAIRE_ANSWERED = 'CHECK_QUESTIONNAIRE_ANSWERED';


export const attemptAddQuestionnaire = (questionnaireAnswers) => {
	return (getState, dispatch) => {
		var token = getState().users.token;
		fetch('https://my.kolapp.dk/wp-json/keq/v1/questions/insert', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + state.users.token
			}),
			body: JSON.stringify({
				answers: questionnaireAnswers
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(setQuestionnairesForUser(questionnaireAnswers));
		})
		.catch(err => console.log(err));
	}
}

const ADD_QUESTIONNAIRE = 'ADD_QUESTIONNAIRE_ANSWER';
const addQuestionnaire = (questionnaire) => {
	return {
		type: ADD_QUESTIONNAIRE,
		payload: questionnaire
	}
}


export const authenticateWithToken = () => {
	return (dispatch) => {
		dispatch(attemptAuthentication());
		AsyncStorage.getItem('userId')
		.then((token) => {
			if (token !== null) {
				console.log(token);
				return fetch('https://my.kolapp.dk/wp-json/keq/v1/me/get', {
						method: 'POST',
						headers: new Headers({
							Accept: 'application/json',
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + token
						})
					}).then((response) => response.json(), error => console.log('An error occured', error)).then((responseJson) =>{
						console.log(responseJson)
;						dispatch(populateUserData(responseJson.data));
						return dispatch(authenticateUser());
					})
					.catch((err) => {
						console.log(err);
						return dispatch(declineAuthenticationUser());
					});
			}
			else{
				return dispatch(declineAuthenticationUser());
			}
		})
		.catch(err => { 
			console.log(err)
			return dispatch(declineAuthenticationUser());
		})
	}
	console.log()
	
}

const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const authenticateUser = () => {
	return {
		type: AUTHENTICATE_USER
	}
}
const ATTEMPT_AUTHENTICATION = 'ATTEMPT_AUTHENTICATION';
const attemptAuthentication = value => {
	return {
		type: ATTEMPT_AUTHENTICATION,
		payload: value
	}
}

const DECLINE_AUTHENTICATION_USER = 'DECLINE_AUTHENTICATION_USER'
const declineAuthenticationUser = () => {
	return {
		type: DECLINE_AUTHENTICATION_USER
	}
}

export const getSavedToken = () => {
	return (dispatch) => {
		AsyncStorage.getItem('userId')
		.then((token) => {
			if (token !== null) {
				return dispatch(setToken(token));
			}
			else{
				console.log('motherfucker')
			}
		})
		.catch(err => { 
			console.log(err)
			return dispatch('???');
		})
	}
}

export const createTokenAttempt = (user) => {
	return (dispatch) => {
		fetch('https://my.kolapp.dk/wp-json/simple-jwt-authentication/v1/token', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user.email,
				password: user.password
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured', error)).then((responseJson) =>{
			console.log(responseJson);
			AsyncStorage.setItem('userId', responseJson.token);
			dispatch(setToken(responseJson.token));
			return responseJson.token;
		})
		.then((token) => {
		return fetch('https://my.kolapp.dk/wp-json/keq/v1/me/update', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				metadata: {
					nickname: user.nickname
				}
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(createUserSuccess(user));
		})
		.catch((err) => {
			console.log(err);
			return dispatch(declineAuthenticationUser());
		});
	})
	.catch((err) => {
		console.log(err);
		return dispatch(declineAuthenticationUser());
	});
	}
}

const CREATE_USER_STEP_TWO = 'CREATE_USER_STEP_TWO';
const createUserStepTwo = (userData) => {
	return {
		type: CREATE_USER_STEP_TWO,
		payload: userData
	}
}

const CREATE_USER_STEP_TWO_ATTEMPT = 'CREATE_USER_STEP_TWO_ATTEMPT';
const createUserStepTwoAttempt = () => {
	return {
		type: CREATE_USER_STEP_TWO_ATTEMPT
	}
}

const CREATE_USER_STEP_TWO_FAILURE = 'CREATE_USER_STEP_TWO_FAILURE';
const createUserStepTwoFailure = () => {
	return {
		type: CREATE_USER_STEP_TWO_FAILURE
	}
}

const CREATE_USER_STEP_TWO_SUCCESS = 'CREATE_USER_STEP_TWO_SUCCESS';
const createUserStepTwoSuccess = () => {
	return {
		type: CREATE_USER_STEP_TWO_SUCCESS
	}
}

export const attemptCreateUserStepTwo = (age, sex, questionnaire) => {
	return (getState, dispatch) => {
		var token = getState().users.token;
		return fetch('https://my.kolapp.dk/wp-json/keq/v1/me/update', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
				metadata: {
					age: age,
					sex: sex
				}
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured', error)).then((responseJson) =>{
			
			return dispatch(createUserSuccess(user));
		})
		.catch((err) => {
			console.log(err);
			return dispatch(declineAuthenticationUser());
		});
	}
}




export const requestCreateUser = (name, email, password) => {
	return (dispatch) => {
		dispatch(createUserAttempt());
		fetch('https://my.kolapp.dk/wp-json/wp/v2/users/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',	
				'Content-Type' : 'application/json',
			},
			body: JSON.stringify({
				username: email,
				email: email,
				password: password
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured', error)).then((responseJson) =>{
			if (responseJson) {
				
				if(responseJson.code === 200){
					var user = {
						nickname: name,
						email: email,
						password: password
					}
					return dispatch(createTokenAttempt(user))
				}
				else
				{
					Alert.alert(
					  'Fejl ved oprettelse!',
					  responseJson.message,
					  [
					    {text: 'OK', onPress: () => console.log('OK Pressed')},
					  ],
					  {cancelable: false},     
					);
					return dispatch(createUserFailure(responseJson.message))
				}
			}
			else{
				console.log('wtf?')
				return null;
			}
		})
		.catch(err => console.log('kig her: ' + err));
	}
}

const CREATE_USER_ATTEMPT = 'CREATE_USER_ATTEMPT';
const createUserAttempt = () => {
	return {
		type: CREATE_USER_ATTEMPT
	}
}
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const createUserSuccess = (user) => {
	return {
		type: CREATE_USER_SUCCESS,
		payload: user
	}
}

const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
const createUserFailure = (reason) => {
	return {
		type: CREATE_USER_FAILURE,
		payload: reason
	}
}


const LOG_OUT = 'LOG_OUT';
export const logOut = () => {
	return {
		type: LOG_OUT
	}
}



const SET_CURRENT_TITLE = 'SET_CURRENT_TITLE';
export const setCurrentTitle = title => {
	return {
		type: SET_CURRENT_TITLE,
		payload: title
	}
}

const POPULATE_USER_DATA = 'POPULATE_USER_DATA';
const populateUserData = (data) => {
	return {
		type: POPULATE_USER_DATA,
		payload: data
	}
}

const FAIL_FETCHING_USER_DATA = 'FAIL_FETCHING_USER_DATA';
function failFetchingUserData(fetching){
	return {
		type: FAIL_FETCHING_USER_DATA,
		fetching
	}
}

function populateQuestionnaireAnswers(questionnaireAnswers){
	return {
		type: POPULATE_QUESTIONNAIRE_ANSWERS,
		questionnaireAnswers
	}
}

function populateMessages(messages){
	return {
		type: POPULATE_MESSAGES,
		messages
	}
}

function populateCalendar(calendarEntries){
	return {
		type: POPULATE_CALENDAR,
		calendarEntries
	}
}

function addQuestionnaireAnswer(questionnaireAnswer){
	return {
		type: ADD_QUESTIONNAIRE_ANSWER,
		questionnaireAnswer
	}
}
function addMessage(message){
	return {
		type: ADD_MESSAGE,
		message
	}
}
function addCalendarEntry(calendarEntry){
	return {
		type: ADD_CALENDAR_ENTRY,
		calendarEntry
	}
}

function fetchForumData(fetching){
	return {
		type: FETCH_FORUM_DATA,
		fetching
	}
}
function receiveForumData(forumData){
	return {
		type: RECEIVE_FORUM_DATA,
		userData
	}
}
function failFetchingForumData(fetching){
	return {
		type: FAIL_FETCHING_FORUM_DATA,
		fetching
	}
}




const NOTIFY_NEW_MESSAGE = 'NOTIFY_NEW_MESSAGE';
export const notifyNewMessage = (notification) => {
	return {
		type: NOTIFY_NEW_MESSAGE,
		payload: notification
	}
}


const TOGGLE_HEADER_VISIBILITY = 'TOGGLE_HEADER_VISIBILITY';
export const toggleHeaderVisibility = () =>{
	return {
		type: TOGGLE_HEADER_VISIBILITY
	}
}

const TOGGLE_NOTIFICATION_VISIBILITY = 'TOGGLE_NOTIFICATION_VISIBILITY';
export const toggleNotificationVisibility = (isVisible) =>{
	return {
		type: TOGGLE_NOTIFICATION_VISIBILITY,
		payload: isVisible
	}
}

const ADD_NOTIFICATIONS = 'ADD_NOTIFICATIONS';
export const addNotifications = (notifications) => {
	return{
		type: ADD_NOTIFICATIONS,
		payload: notifications
	}
}