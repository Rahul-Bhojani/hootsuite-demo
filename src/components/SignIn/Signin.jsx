// import claases from "../SignIn/Signin.module.css";
import React from "react";
import { useState } from "react";
import { classes } from "istanbul-lib-coverage";
//import { classExpression } from "@babel/types";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin">
      <h1>Sign In</h1>

      <form method="post" className={classes.form}>
        <div className={classes.inputWrapper}>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={classes.inputWrapper}>
          Password :
          {/* <a
            href="reset-password"
            className={classes.forgotPassword}
            tabIndex="3"
          >
            Forgot Password
          </a> */}
          <input
            type="password"
            required="true"
            maxLength="100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>

      <div>
        <button type="submit">SIgnIn</button>
      </div>

      <div>
        <a href="">Sign Up</a>
      </div>
      <div className={classes.info}>
        <p>
          By clicking Sign in, I agree to
          <a href=" ">Hootsuite's Terms</a>
          <p>
            including the payment terms, and{" "}
            <a href="Privacy Policy">Privacy Policy</a>
          </p>
        </p>
      </div>
    </div>
  );
};
export default Signin;
