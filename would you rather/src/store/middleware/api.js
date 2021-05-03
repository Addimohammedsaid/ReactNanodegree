import axios from "axios";
import * as actions from "../api";
import { getUsers } from "../../data/_DATA";

const api = ({ dispatch }) => (next) => async (action) => {
	if (action.type !== actions.apiCallBegan.type) {
		return next(action);
	}

	const { url, method, data, onStart, onSuccess, OnError } = action.payload;

	if (onStart) dispatch({ type: onStart });

	next(action);

	try {
		let users = await getUsers();
		console.log("users", Object.values(users));

		console.log(onSuccess);

		if (onSuccess) dispatch({ type: onSuccess, payload: Object.values(users) });
		else dispatch(actions.apiCallSuccess({ status: "200" }));
	} catch (e) {
		if (OnError) dispatch({ type: OnError, payload: e });
		else dispatch(actions.apiCallFailed(e));
	}
};

export default api;
