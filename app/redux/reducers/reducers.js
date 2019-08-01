import { combineReducers } from 'redux';

const initialState = {
	notifications: [],
	userData: {},
	forumData: {},
	messages: [],
	questionnaireAnswers: [],
	calendarEntries: [],
	forumComments: [],
	forumPosts: [],
	fetchinUserData: false,
	fetchingForumData: false,
	isLoggedIn: false,
	failedFetching: false,
	headerIsVisible: false,
	notificationIsVisible: false,
}

const initialNavigationState = {
	currentPage: 'k'
}

const user = (state = initialState, action) => {
	console.log(action.type);
	switch (action.type) {
		case 'AUTHENTICATE_USER':
			console.log("hej2");
			console.log(action.success);
			return {
				...state,
				isLoggedIn: action.payload
			};
		case 'LOG_OUT':
			return {
				...state,
				isLoggedIn: false
			};
		case 'FETCH_USER_DATA':
			return Object.assign({}, state, {
				fetchingUserData: action.fetching
			});
		case 'RECEIVE_USER_DATA':
			return Object.assign({}, state, {
				userData: action.userData,
				fetchingUserData: false
			});
		case 'FAIL_FETCHING_USER_DATA':
			return Object.assign({}, state, {
				failedFetching: true,
				fetchingUserData: action.fetching
			});
		case 'FETCH_FORUM_DATA':
			return Object.assign({}, state, {
				fetchingForumData: action.fetching
			});
		case 'RECEIVE_FORUM_DATA':
			return Object.assign({}, state, {
				forumData: action.forumData,
				fetchingForumData: false
			});
		case 'FAIL_FETCHING_FORUM_DATA':
			return Object.assign({}, state, {
				failedFetching: true,
				fetchingForumData: action.fetching
			});
		case 'POPULATE_QUESTIONNAIRE_ANSWER':
			return Object.assign({}, state, {
				questionnaireAnswers: action.questionnaireAnswers
			})
		case 'ADD_QUESTIONNAIRE_ANSWER':
			return Object.assign({}, state, {
				questionnaireAnswers: [
					...state.questionnaireAnswers,
					action.questionnaireAnswer
				]
			});
		case 'POPULATE_MESSAGES':
			return Object.assign({}, state, {
				messages: action.messages
			});
		case 'ADD_MESSAGE':
			return Object.assign({}, state, {
				messages: [
					...state.messages,
					action.message
				]
			});
		case 'POPULATE_CALENDAR':
			return Object.assign({}, state, {
				calendarEntries: action.calendarEntries
			});
		case 'ADD_CALENDAR_ENTRY':
			return Object.assign({}, state, {
				calendarEntries: [
					...state.calendarEntries,
					action.calendarEntry
				]
			});
		case 'NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE':
			return Object.assign({}, state, {
				notifications: [
					...state.calendarEntries,
					action.notification
				]
			});
		case 'NOTIFY_NEW_MESSAGE':
			return Object.assign({}, state, {
				notifications: [
					...state.calendarEntries,
					action.notification
				]
			});
		case 'NOTIFY_NEW_FORUM_REPLY':
			return Object.assign({}, state, {
				notifications: [
					...state.calendarEntries,
					action.notification
				]
			});
		case 'TOGGLE_HEADER_VISIBILITY':
			return {
				...state,
				headerIsVisible: action.payload
			};
		case 'TOGGLE_NOTIFICATION_VISIBILITY':
			return {
				...state,
				notificationIsVisible: action.payload
			};
		default:
			console.log('wtf');
			console.log(action.type);
			console.log('wtf2');
			return state;
	}
	
}
const navigation = (state = initialNavigationState, action) => {
	console.log(action.type);
	switch(action.type) {
		case 'SET_CURRENT_PAGE':
			console.log('this working?');
			console.log(action.payload);
			return {
				...state,
				currentPage: action.payload
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	users: user,
	nav: navigation
});

export default rootReducer;