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

const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export const toggleSideMenu = () => {
	return {
		type: TOGGLE_SIDE_MENU
	}
}

const SET_TOKEN = 'SET_TOKEN';
const setToken = (token) => {
	return {
		type: SET_TOKEN,
		payload: token 
	}
}

const SET_USER_QUESTIONS = 'GET_QUESTIONS_FOR_USER';
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

const SET_USER_QUESTIONS_ANSWERED = 'SET_QUESTIONS_FOR_USER_ANSWERS'
const setUserQuestionsAnswered = (questions) => {
	return {
		type: SET_USER_QUESTIONS_ANSWERED,
		payload: questions
	}
}

export const getUserQuestionsAndAnswers = () => {
	getUserAnswers();
	getUserQuestions();
	getUserQuestionsAnswered();
	return true;
}

const SET_QUESTIONS_FROM_OTHERS = 'SET_QUESTIONS_FROM_OTHERS';
const setQuestionsFromOthers = (questions) => {
	return {
		type: SET_QUESTIONS_FROM_OTHERS,
		payload: questions
	}
}

export const getUserQuestionsForTimespan = (startDate, endDate) => {
	return (dispatch, state) => {
		console.log(state.user.token);
		fetch('https://my.kolapp.dk/wp-json/keq/v1/questionnaire/get', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + state.users.token
			}),
			body: JSON.stringify({
				startDate: startDate,
				endDate: endDate
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(setUserQuestions(responseJson));
		})
		.catch(err => console.log(err));
	}
}

const getUserAnswers = () => {
	return (dispatch, getState) => {
		var token = getState(users).token;
		fetch('https://my.kolapp.dk/wp-json/keq/v1/questionnaire/get', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(setUserQuestions(responseJson));
		})
		.catch(err => console.log(err));
	}
}

const getUserQuestions = () => {
	return (dispatch, getState) => {
		var token = getState(users).token;
		fetch('https://my.kolapp.dk/wp-json/keq/v1/questionnaire/get', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(setUserAnswers(responseJson));
		})
		.catch(err => console.log(err));
	}
}

const getUserQuestionsAnswered = () => {
	return (dispatch, getState) => {
		var token = getState(users).token;
		fetch('https://my.kolapp.dk/wp-json/keq/v1/questionnaire/get', {
			method: 'POST',
			headers: new Headers({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}),
			body: JSON.stringify({
			}),
		})
		.then((response) => response.json(), error => console.log('An error occured ', error)).then((responseJson) =>{
			console.log(responseJson);
			return dispatch(setUserQuestionsAnswered(responseJson));
		})
		.catch(err => console.log(err));
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
	return (state, dispatch) => {
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


export const attemptAddQuestionnaire = (questionnaire) => {
	return (getState, dispatch) => {
		return fetch('https://my.kolapp.dk/wp-json/keq/v1/questions/insert', {

		})
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
						console.log(responseJson);
						dispatch(populateUserData(responseJson.data));
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