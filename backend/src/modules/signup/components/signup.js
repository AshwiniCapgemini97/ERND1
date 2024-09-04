import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import InputBox from "../../../shared/components/inputBox/inputBox";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import { signupAsync, resetSignup } from "../redux/signupSlice";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../../../shared/utils/validation";
import "./css/signup.scss";

export default function Signup() {
  const dispatch = useDispatch();

  const isSignupSuccess = useSelector(
    (state) => state.signupReducer.isSuccessfull
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  // on ComponentUnmount reset the signup Reducer
  useEffect(() => {
    return () => {
      dispatch(resetSignup());
    };
  }, []);

  // reset form after successfull signup
  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }, [isSignupSuccess]);

  const handleValidation = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "name":
        errorMsg = nameValidation(name, value);
        break;
      case "email":
        errorMsg = emailValidation(name, value);
        break;
      case "password":
        errorMsg = passwordValidation(name, value);
        break;
      case "confirmPassword":
        errorMsg = passwordValidation(name, value);
        break;
    }
    return errorMsg;
  };

  const handleChange = (name, value) => {
    const errorMsg = handleValidation(name, value);

    // handle error
    if (errorMsg) {
      setError({ ...error, [name]: errorMsg });
    } else {
      const copyError = { ...error };
      delete copyError[name];
      setError({ ...copyError });
    }

    // save data into local state
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = (formData) => {
    let isValid = true;
    const errObj = {};
    for (let name in formData) {
      const err = handleValidation(name, formData[name]);
      if (err) errObj[name] = err;
    }
    // Extra validation
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      errObj.confirmPassword = "Password and Confirm password not matching";
    }
    if (Object.keys(errObj).length >= 1) {
      setError(errObj);
      isValid = false;
    }
    return isValid;
  };

  /* always create the function because sometime state contains extra data that 
     we don't want to send to api call 
  */
  const getParam = (formData) => {
    return {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = isFormValid(formData);
    const param = getParam(formData);
    if (!isValid) {
      return;
    }
    dispatch(signupAsync(param));
  };

  return (
    <div className="signup-wrapper">
      <HeaderStrip pageName="Signup to your account" isRequiredNote={true} />
      <div className="main-container">
        <Grid style={{ marginTop: "40px" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450, margin: "auto" }}>
            {isSignupSuccess && (
              <Message
                success
                header="Your user registration was successful"
                content="Please wait untill it is approved by the Admin"
              />
            )}
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
                <InputBox
                  label="Name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fluid
                  type="text"
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  error={error.name ?? false}
                />
                <InputBox
                  label="Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fluid
                  type="text"
                  icon="envelope"
                  iconPosition="left"
                  placeholder="E-mail address"
                  error={error.email ?? false}
                />
                <InputBox
                  label="Password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  fluid
                  type="text"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  error={error.password ?? false}
                />
                <InputBox
                  label="Confirm Password"
                  required
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fluid
                  type="text"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  error={error.confirmPassword ?? false}
                />
                <Button color="blue" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message style={{ textAlign: "center" }}>
              Login to you account <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
