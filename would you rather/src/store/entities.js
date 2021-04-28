import {combineReducers } from "@reduxjs/toolkit";
import bugsReducer from './bugs';
import projectReducer from './projects';
import usersReducer from './users';


export default combineReducers({
    bugsReducer,
    projectReducer,
    usersReducer
});