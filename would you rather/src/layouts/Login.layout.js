import React, { useContext, useEffect, useState, Component } from "react";
import { loadBugs } from "../store/bugs";
import StoreContext from "../contexts/storeContext";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Segment,
	Select,
} from "semantic-ui-react";

const options = [
	{ key: "all", text: "All", value: "all" },
	{ key: "articles", text: "Articles", value: "articles" },
	{ key: "products", text: "Products", value: "products" },
];

class LoginForm extends Component {
	static contextType = StoreContext;

	state = { bugs: [] };

	componentDidMount() {
		const store = this.context;
		this.unsubscribe = store.subscribe(() => {
			console.log("bugs in store");
			const bugsInStore = store.getState().entities.bugsReducer.list;
			console.log("bugsInStore", bugsInStore);
			if (bugsInStore != this.state.bugs) this.setState({ bugs: bugsInStore });
		});

		store.dispatch(loadBugs());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<Grid
				textAlign="center"
				style={{ height: "100vh" }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="teal" textAlign="center">
						<Image src="../assets/udacity-logo.png" /> Log-in to your account
					</Header>
					<Form size="large">
						<Form.Field>
							<div>
								{this.state.bugs.map((bug) => (
									<li key={bug.id}>{bug.name}</li>
								))}
							</div>
							{/* <Select size="large" options={options} defaultValue="articles" /> */}
						</Form.Field>
						<Button color="teal" fluid size="large">
							Login
						</Button>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

export default LoginForm;
