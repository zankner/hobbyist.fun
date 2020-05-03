import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDj-XlIHQtG3mreawIu76gRTMU_ClNUroc',
  authDomain: 'meta-dash.firebaseapp.com',
  databaseURL: 'https://meta-dash.firebaseio.com',
  projectId: 'meta-dash',
  storageBucket: 'meta-dash.appspot.com',
  messagingSenderId: '868613708260',
  appId: '1:868613708260:web:d77fa4736319ca9b538ff1',
});

firebase.firestore();
