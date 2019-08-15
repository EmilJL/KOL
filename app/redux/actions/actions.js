import { normalize, schema } from 'normalizr';
import fetch from 'cross-fetch';


const POPULATE_QUESTIONNAIRE_ANSWERS = 'POPULATE_QUESTIONNAIRE_ANSWERS';
const POPULATE_MESSAGES = 'POPULATE_MESSAGES';
const POPULATE_CALENDAR = 'POPULATE_CALENDAR';

const FETCH_FORUM_DATA = 'FETCH_FORUM_DATA';
const RECEIVE_FORUM_DATA = 'RECEIVE_FORUM_DATA';
const FAIL_FETCHING_FORUM_DATA = 'FAIL_FETCHING_FORUM_DATA'

const ADD_QUESTIONNAIRE_ANSWER = 'ADD_QUESTIONNAIRE_ANSWER';
const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_CALENDAR_ENTRY = 'ADD_CALENDAR_ENTRY';

const NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE = 'NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE';

const NOTIFY_NEW_FORUM_REPLY = 'NOTIFY_FORUM_REPLY';




const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONS';



export const requestCreateUser = (email, password) => {
	return (dispatch) => {
		dispatch(createUserAttempt());
		fetch('https://local.my.kolapp.dk/wp-json/wp/v2/users/register', {
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
						email: email,
						password: pasword
					}
					return dispatch(createUserSuccess(user));		
				}
				else{
						return dispatch(createUserFailure(responseJson.message));
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

const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const authenticateUser = success => {
	return {
		type: AUTHENTICATE_USER,
		payload: success
	}
}
const ATTEMPT_AUTHENTICATION = 'ATTEMPT_AUTHENTICATION';
export const attemptAuthentication = value => {
	return {
		type: ATTEMPT_AUTHENTICATION,
		payload: value
	}
}

const DECLINE_AUTHENTICATION_USER = 'DECLINE_AUTHENTICATION_USER'
export const declineAuthenticationUser = success => {
	return {
		type: DECLINE_AUTHENTICATION_USER,
		payload: success
	}
}

const SET_CURRENT_TITLE = 'SET_CURRENT_TITLE';
export const setCurrentTitle = title => {
	return {
		type: SET_CURRENT_TITLE,
		payload: title
	}
}



const FETCH_USER_DATA = 'FETCH_USER_DATA';
function fetchUserData(fetching){
	return {
		type: FETCH_USER_DATA,
		fetching
	}
}

const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
function receiveUserData(userData){
	return {
		type: RECEIVE_USER_DATA,
		userData
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


function notifyNewQuestionnaireAvailable(notification){
	return {
		type: NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE,
		notification
	}
}

const NOTIFY_NEW_MESSAGE = 'NOTIFY_NEW_MESSAGE';
export const notifyNewMessage = (notification) => {
	return {
		type: NOTIFY_NEW_MESSAGE,
		payload: notification
	}
}

function notifyNewForumReply(notification){
	return {
		type: NOTIFY_NEW_MESSAGEFORUM_REPLY,
		notification
	}
}

const TOGGLE_HEADER_VISIBILITY = 'TOGGLE_HEADER_VISIBILITY';
export const toggleHeaderVisibility = (isVisible) =>{
	return {
		type: TOGGLE_HEADER_VISIBILITY,
		payload: isVisible
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