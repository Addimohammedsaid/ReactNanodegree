import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import "./style.css";

import LoginForm from "./layouts/Login.layout";
import Nav from "./components/nav/Nav";
import PageNotFound from "./components/PageNotFound";
import configureStore from "./store/configureStore";
import StoreContext from "./contexts/storeContext";

const store = configureStore();

ReactDOM.render(
	<StoreContext.Provider value={store}>
		<React.StrictMode>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<LoginForm />
					</Route>
					<Route path="*">
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</React.StrictMode>
	</StoreContext.Provider>,
	document.getElementById("root")
);
