import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// reducer
let lastId = 0;

const slice = createSlice({
	initialState: {
		list: [],
		loading: false,
		lastfech: null,
	},
	name: "bugs",
	reducers: {
		bugsRequested: (bugs, action) => {
			bugs.loading = true;
		},
		bugsRequestedFaild: (bugs, action) => {
			bugs.loading = false;
		},
		// action => action handerls
		bugsReceived: (bugs, action) => {
			console.log("action", action);
			bugs.list = action.payload;
			bugs.loading = false;
			bugs.lastfech = Date.now();
		},
		bugAdded: (bugs, action) => {
			bugs.list.push(action.payload);
		},
		bugResolve: (bugs, action) => {
			const index = bugs.findIndex((bug) => bug.id === action.payload.id);
			bugs[index].resolved = true;
		},
		bugAssignUser: (bugs, action) => {
			const { userId, bugsId } = action.payload;
			const index = bugs.findIndex((bug) => bug.id === bugsId);
			bugs[index].userId = userId;
		},
	},
});

export const {
	bugAdded,
	bugsRequested,
	bugRemoved,
	bugResolve,
	bugAssignUser,
	bugsReceived,
	bugsRequestedFaild,
} = slice.actions;

export default slice.reducer;

// Actions Creators
const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
	const { lastfech } = getState().entities.bugsReducer;
	console.log("last fetch", lastfech);

	dispatch(
		apiCallBegan({
			url,
			onStart: slice.actions.bugsRequested.type,
			onSuccess: slice.actions.bugsReceived.type,
			onError: slice.actions.bugsRequestedFaild.type,
		})
	);
};

export const addBug = (bug) =>
	apiCallBegan({
		url,
		method: "post",
		data: bug,
		onSuccess: bugAdded.type,
	});
