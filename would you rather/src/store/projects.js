import {createSlice} from "@reduxjs/toolkit";

// reducer
let lastId = 0;

const slice = createSlice({
    initialState : [],
    name : 'projects',
    reducers : {
        // action => action handerls
        projectAdded :  (project, action) => {
            project.push({
                id : ++lastId,
                name : action.payload.name,                
            })
        },        
    }
})

export const {projectAdded} = slice.actions;
export default slice.reducer;