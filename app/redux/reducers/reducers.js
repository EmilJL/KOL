import {
	AUTHENTICATE_USER,
	FETCH_USER_DATA,
	RECEIVE_USER_DATA,
	FAIL_FETCHING_USER_DATA,
	FETCH_FORUM_DATA,
	RECEIVE_FORUM_DATA,
	FAIL_FETCHING_FORUM_DATA,
	POPULATE_QUESTIONNAIRE_ANSWER,
	POPULATE_MESSAGES,
	POPULATE_CALENDAR,
	ADD_QUESTIONNAIRE_ANSWER,
	ADD_MESSAGE,
	ADD_CALENDAR_ENTRY,
	NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE,
	NOTIFY_NEW_MESSAGE,
	NOTIFY_NEW_FORUM_REPLY
} from './actions/actions.js';

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
	isLoggedIn: false
	failedFetching: false,
}

function user(state, action) {
	switch (action.type) {
		case AUTHENTICATE_USER:
			return Object.assign({}, state {
				isLoggedIn: action.success
			})
		case FETCH_USER_DATA:
			return Object.assign({}, state {
				fetchingUserData: action.fetching
			});
		case RECEIVE_USER_DATA:
			return Object.assign({}, state {
				userData: action.userData
				fetchingUserData: false
			});
		case FAIL_FETCHING_USER_DATA:
			return Objec.assign({}, state {
				failedFetching: true,
				fetchingUserData: action.fetching
			})

		case FETCH_FORUM_DATA:
			return Object.assign({}, state {
				fetchingForumData: action.fetching
			});
		case RECEIVE_FORUM_DATA:
			return Object.assign({}, state {
				forumData: action.forumData
				fetchingForumData: false
			});
		case FAIL_FETCHING_FORUM_DATA:
			return Objec.assign({}, state {
				failedFetching: true,
				fetchingForumData: action.fetching
			});

		case POPULATE_QUESTIONNAIRE_ANSWER:
			return Object.assign({}, state {
				questionnaireAnswers: action.questionnaireAnswers
			})
		case ADD_QUESTIONNAIRE_ANSWER:
			return Object.assign({}, state {
				questionnaireAnswers: [
					...state.questionnaireAnswers,
					action.questionnaireAnswer
				]
			});

		case POPULATE_MESSAGES:
			return Object.assign({}, state {
				messages: action.messages
			});
		case ADD_MESSAGE:
			return Object.assign({}, state {
				messages: [
					...state.messages,
					action.message
				]
			});

		case POPULATE_CALENDAR:
			return Object.assign({}, state {
				calendarEntries: action.calendarEntries
			});
		case ADD_CALENDAR_ENTRY:
			return Object.assign({}, state {
				calendarEntries: [
					...state.calendarEntries,
					action.calendarEntry
				]
			});

		case NOTIFY_NEW_QUESTIONNAIRE_AVAILABLE:
			return Object.assign({}, state {
				notifications: [
					...state.calendarEntries,
					action.notification
				]
			});
		case NOTIFY_NEW_MESSAGE:
			return Object.assign({}, state {
				notifications: [
					...state.calendarEntries,
					action.notification
				]
			});
		case NOTIFY_NEW_FORUM_REPLY:
			return Object.assign({}, state {
				notifications: [
					...state.calendarEntries,
					action.notification
				]
			});
		default:
			return state;
	}
	
}