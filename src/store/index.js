import { compose, createStore, applyMiddleware } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk'
import firebase from '../config/firebaseConfig'

import rootReducer from '../store/reducers/rootReducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase),
    )
);

export default store;