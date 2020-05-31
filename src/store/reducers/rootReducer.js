import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

import authReducer from './authReducer';
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer, 
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;