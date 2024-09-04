import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  emailValidation,
  passwordValidation,
} from "../../../shared/utils/validation";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { pageURL } from "../../../shared/constants/constant";
import InputBox from "../../../shared/components/inputBox/inputBox";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import { loginAsync } from "../redux/loginSlice";
import "./css/login.scss";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const isSuccess = useSelector((state) => state.authReducer.isAuthenticated);
  const role = useSelector((state) => state.authReducer.role);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    // Redirect user to dashboard page after successful login
    if (isSuccess) {
      if (role === "User") navigate("/dashboard");
      if (role === "Admin") navigate(pageURL.userList);
    }
  }, [isSuccess]);

  const handleValidation = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "email":
        errorMsg = emailValidation(name, value);
        break;
      case "password":
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
    // call APi here
    dispatch(loginAsync(param));
  };

  return (
    <div className="login-wrapper">
      <HeaderStrip pageName="Log-in to your account" isRequiredNote={true} />
      <div className="main-container">
        <Grid verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450, margin: "auto" }}>
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
                <InputBox
                  label="Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fluid
                  type="text"
                  icon="user"
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
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={{ textAlign: "center" }}>
              Don't have an account ? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
