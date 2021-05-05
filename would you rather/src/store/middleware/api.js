import * as actions from "../api";

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

import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
} from "../../data/_DATA";

export function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({
			users,
			questions,
		})
	);
}

export function saveQuestion(question) {
	return Promise.all([_saveQuestion(question)]).then(([question]) => question);
}

export function saveQuestionAnswer(info) {
	return _saveQuestionAnswer(info);
}
