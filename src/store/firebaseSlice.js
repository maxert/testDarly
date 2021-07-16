import {createSlice} from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

export const firebaseSlice = createSlice({
    name: "firebaseAuth",
    initialState: {
        userData: null,
        initialized: false
    },
    reducers: {
        SET_INITIALIZED: (state, {payload}) => {
            state.initialized = payload;
        },
        LOGIN: (state, {payload}) => {
            state.userData = payload.user;
        },
        LOGOUT: (state) => {
            state.userData = null;
        },
    }
})

export const {SET_INITIALIZED, LOGIN, LOGOUT, SET_USER_DATA} = firebaseSlice.actions;

export const setAuthListener = () => (dispatch, state) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user && !state().userAuth.initialized) {
            dispatch(LOGIN({user: firebase.auth().currentUser.toJSON()}));
        }
        !state().userAuth.initialized && dispatch(SET_INITIALIZED(true));
    })
}

export const login = ({email, password}) => async (dispatch, state) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(LOGIN({user: firebase.auth().currentUser.toJSON()}));
    return state().userAuth.userData;
}
export const logout = () => async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(LOGOUT());
}

export const selectUser = (state) => {
    return state.userAuth.userData;
}
export default firebaseSlice.reducer;



