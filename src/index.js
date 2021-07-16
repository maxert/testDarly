import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FirebaseAppProvider} from "reactfire";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import store from "./store/reducer";

const firebaseConfig = {
    apiKey: "AIzaSyDszJNo440hb69iSCRFeL47D4Ro0zxUGig",
    authDomain: "darlytest.firebaseapp.com",
    databaseURL: "https://darlytest-default-rtdb.firebaseio.com",
    projectId: "darlytest",
    storageBucket: "darlytest.appspot.com",
    messagingSenderId: "401153536401",
    appId: "1:401153536401:web:652a1b4fc5d6a942292a30",
    measurementId: "G-L62X2KVX08"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <App/>
            </FirebaseAppProvider>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
