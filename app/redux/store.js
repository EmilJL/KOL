import { createStore, combineReducers } from 'redux';
import user from './reducers/reducers';

const rootReducer = combineReducers({
	users: user
});

const configureStore = () => {
	return createStore(rootReducer);
}

export default configureStore;