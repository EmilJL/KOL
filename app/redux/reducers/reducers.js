import { combineReducers } from 'redux';

const initialState = {
	notifications: [],
	user: {},
	userData: {},
	userDiary: {},
	questionnaires: [],
	questionnaireQuestions: [{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"1",
sQuestion:
"HVORDAN ER DIT HUMØR?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"3",
sQuestion:
"HVOR MEGET HOSTER DU?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"4",
sQuestion:
"HVOR MEGET SLIM HAR DU I LUNGERNE?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"5",
sQuestion:
"HVOR MEGET TRYKKEN FOR BRYSTET HAR DU?"
},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"6",
sQuestion:
"HVOR FORPUSTET BLIVER DU NÅR DU GÅR OP AF ÉN ETAGE, ELLER OP AD EN BAKKE?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"7",
sQuestion:
"ER DU BEGRÆNSET AF NOGEN FORM FOR AKTIVITETER I DIT HJEM?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"8",
sQuestion:
"ER DU TRYG VED AT FORLADE DIT HJEM PÅ TRODS AF DIN LUNGESYGDOM?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"9",
sQuestion:
"SOVER DU DYBT?"},
{dtCreated:
"2019-08-30 10:09:37",
dtUpdated:
"2019-08-30 10:09:37",
iID:
"10",
sQuestion:
"HAR DU MASSER AF ENERGI?"}],
	authenticating: false,
	fetchinUserData: false,
	isLoggedIn: false,
	failedFetching: false,
	headerIsVisible: true,
	notificationIsVisible: false,
	attemptingCreateUser: false,
	userQuestions: [],
	userAnswers: [],
	userQuestionsAnswered: [],
	userQuestionsOthers: [],
	failedToCreateUser: '',
	token: '',
	sideMenuIsVisible: false,
	fetchingData: false,
	ages: [],
	createUserComplete: false
}

const initialNavigationState = {
	currentTitle: 'DASHBOARD'
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_USER_COMPLETE':
			return{
				...state,
				createUserComplete: true
			}
		case 'SET_AGES':
			return {
				...state,
				ages: action.payload
			}
		case 'ATTEMPT_AUTHENTICATION':
			return {
				...state,
				authenticating: action.payload
			}
		case 'AUTHENTICATE_USER':
			return {
				...state,
				isLoggedIn: true,
				authenticating: false
			};
		case 'DECLINE_AUTHENTICATION_USER':
			return {
				...state,
				authenticating: false,
				isLoggedIn: false
			};
		case 'LOG_OUT':
			return {
				...state,
				isLoggedIn: false
			};
		case 'GET_QUESTIONNAIRE_QUESTIONS_SUCCESS': 
			return {
				...state,
				questionnaireQuestions: state.questionnaireQuestions.concat(action.payload)
			};
		case 'ATTEMPT_GET_DIARY_FOR_USER':
		case 'ATTEMPT_GET_QUESTIONS_FOR_USER':
		case 'ATTEMPT_GET_ANSWERS_FOR_USER':
		case 'ATTEMPT_GET_QUESTIONS_FROM_OTHERS':
		case 'ATTEMT_GET_ANSWERS_FROM_OTHERS':
		case 'ATTEMPT_GET_DIARIES_FROM_OTHERS':
		case 'ATTEMPT_ADD_DIARY_COMMENT':
			return {
				...state,
				fetchingData: true
			}
		case 'SET_DIARY_FOR_USER':
			return {
				...state,
				fetchingData: false,
				userDiary: action.payload
			}
		case 'POPULATE_USER_DATA':
			return {
				...state,
				userData: action.payload
			};
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
				headerIsVisible: !state.headerIsVisible
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
				user: action.payload,
				isLoggedIn: true
			}
		case 'CREATE_USER_FAILURE':
			return {
				...state,
				attemptingCreateUser: false,
				failedToCreateUser: action.payload
			}
		case 'SET_USER_QUESTIONS':
			return {
				...state,
				userQuestions: action.payload
			}
		case 'SET_USER_QUESTIONS_ANSWERED':
			return {
				...state,
				userQuestionsAnswered: action.payload
			}
		case 'SET_USER_QUESTIONS_FROM_OTHERS':
			return {
				...state,
				userQuestionsOthers: action.payload
			}
		case 'SET_USER_ANSWERS':
			return {
				...state,
				userAnswers: action.payload
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.payload
			}
		case 'TOGGLE_SIDE_MENU':
			return {
				...state,
				sideMenuIsVisible: !state.sideMenuIsVisible
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