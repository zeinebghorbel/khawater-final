import axios from "axios";
import React, { useState } from "react";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const [values, setValues] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmittedValues = () => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    axios
      .post(`${process.env.REACT_APP_API_ENDPONIT}/users/login`, payload)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center"></Header>
        <Form size="large" onSubmit={handleSubmittedValues}>
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href="./Register">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default Login;
