import React, { useState, useEffect, useReducer, useContext } from "react";
import {
  EMAIL_INITIAL_STATE,
  emailReducer,
} from "../../reducers/email-reducer";
import {
  PASSWORD_INITIAL_STATE,
  passwordReducer,
} from "../../reducers/password-reducer";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(
    emailReducer,
    EMAIL_INITIAL_STATE
  );

  const [passwordState, passwordDispatch] = useReducer(
    passwordReducer,
    PASSWORD_INITIAL_STATE
  );

  const { isValid: isEmailValid } = emailState;

  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      console.log("CLEANING UP!!");
      clearTimeout(timeoutID);
    };
  }, [isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({
      type: "SET_VALUE",
      payload: { value: event.target.value },
    });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({
      type: "SET_VALUE",
      payload: { value: event.target.value },
    });
  };

  const validateEmailHandler = () => {
    emailDispatch({
      type: "CHECK_VALID",
    });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({
      type: "CHECK_VALID",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState.isValid}
          label="E-Mail"
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          isValid={passwordState.isValid}
          label="Password"
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
