import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [login, setlogin] = useState(true);
  const Authfun = (data) => {
    if (data === "signupshow") {
      setlogin(false);
    } else if (data === "loginshow") setlogin(true);
  };
  return (
    <div>{login ? <Login fun={Authfun} /> : <Signup fun={Authfun} />}</div>
  );
};

export default Auth;
