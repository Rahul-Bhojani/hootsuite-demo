import React from "react";
import { useState } from "react";
import { classes } from "istanbul-lib-coverage";
//import { classExpression } from "@babel/types";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
      <h1>Sign Up</h1>

      <form method="post" className={classes.form}>
        <div className={classes.inputWrapper}>
          Name :
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
        <button type="Submit">Signup</button>
      </div>
    </div>
  );
};
export default Signup;
