import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from '../../pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from '../../modules/reducers';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import Login from '../../pages/login';
import Signup from '../../pages/signup';

// Initialize Firebase
firebase.initializeApp({});

firebase.firestore();

const store = createStore(rootReducer);

const rrfProps = {
	firebase,
	config: {
		userProfile: 'users',
		useFirestoreForProfile: true
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

// Initialize Font Awesome
library.add(fas);

// Render the app
render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />

				</Switch>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>, document.getElementById('root'));
