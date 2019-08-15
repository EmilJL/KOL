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
	authenticationFailed: false,
	authenticating: false,
	fetchinUserData: false,
	fetchingForumData: false,
	isLoggedIn: false,
	failedFetching: false,
	headerIsVisible: true,
	notificationIsVisible: false,
	attemptingCreateUser: false,
	failedToCreateUser: ''
}

const initialNavigationState = {
	currentTitle: 'DASHBOARD'
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'ATTEMPT_AUTHENTICATION':
			return {
				...state,
				authenticating: action.payload
			}
		case 'AUTHENTICATE_USER':
			return {
				...state,
				isLoggedIn: action.payload,
				authenticating: false
			};
		case 'DECLINE_AUTHENTICATION_USER':
			return {
				...state,
				authenticationFailed: action.payload,
				authenticating: false
			};
		case 'LOG_OUT':
			return {
				...state,
				notifications: []
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
			return {
				...state,
				notifications: [...state.notifications, action.payload]
			};
		case 'NOTIFY_NEW_MESSAGE':
			return {
				...state,
				notifications: [...state.notifications, action.payload]
			};
		case 'NOTIFY_NEW_FORUM_REPLY':
			return {
				...state,
				notifications: [...state.notifications, action.payload]
			};
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
		case 'CREATE_USER_ATTEMPT':
			return {
				...state,
				attemptingCreateUser: true
			}
		case 'CREATE_USER_SUCCESS':
			return {
				...state,
				attemptingCreateUser: false,
				user: action.payload
			}
		case 'CREATE_USER_FAILURE':
			return {
				...state,
				attemptingCreateUser: false,
				failedToCreateUser: action.payload
			}
		default:
			return state;
	}
	
}
const navigation = (state = initialNavigationState, action) => {
	switch(action.type) {
		case 'SET_CURRENT_TITLE':
			return {
				...state,
				currentTitle: action.payload
			};
		case 'LOG_OUT':
			return {
				...state,
				currentTitle: 'DASHBOARD'
			}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	users: user,
	nav: navigation
});

export default rootReducer;