import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
//to connect to furebase and firestore
import { createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './config/firebaseConfig';
import store from './store/index';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
