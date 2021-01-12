import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";

import {
  Button,
  Message,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmittedValues = () => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      email: values.email,
    };

    axios
      .post(`${process.env.REACT_APP_API_ENDPONIT}/users/register`, payload)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        history.push("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center"></Header>
        <Form size="large" onSubmit={handleSubmittedValues}>
          <Segment stacked>
            <Form.Input
              fluid
              name="firstName"
              icon="user"
              iconPosition="left"
              placeholder="First name"
              value={values.firstName}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="lastName"
              icon="user"
              iconPosition="left"
              placeholder="First name"
              value={values.lastName}
              onChange={handleChange}
            />

            <Form.Input
              name="email"
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="email"
              type="email"
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
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href="./Login ">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default Register;
