import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs } from "../store/bugs";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Segment,
	Select,
} from "semantic-ui-react";

const LoginForm = () => {
	const dispatch = useDispatch();
	const bugs = useSelector((state) => state.entities.bugsReducer.list);

	useEffect(() => {
		dispatch(loadBugs());
	}, []);

	return (
		<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="teal" textAlign="center">
					<Image src="../assets/udacity-logo.png" /> Log-in to your account
				</Header>
				<Form size="large">
					<Form.Field>
						<div>
							{bugs.map((bug) => (
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
};

export default LoginForm;
