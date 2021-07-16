import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import firebaseSlice from "./firebaseSlice";

const reducerRoot = combineReducers({
    userAuth: firebaseSlice
})

const store = configureStore({
    reducer: reducerRoot,
    middleware: [...getDefaultMiddleware()]
})

export default store;