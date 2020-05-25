import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/auth-reducer';

const rootReducer = combineReducers(
    { 
    auth: authReducer 
    }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;