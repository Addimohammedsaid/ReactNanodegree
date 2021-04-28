import {createSlice} from "@reduxjs/toolkit";

// id inc
let lastId = 0;

const slice = createSlice({
    initialState : [],
    name : 'users',
    reducers : {
        // action => action handerls
        userAdded :  (users, action) => {
            users.push({
                id : ++lastId,
                name : action.payload.name,                
            })
        },            
    }
})

export const { userAdded } = slice.actions;

export default slice.reducer;