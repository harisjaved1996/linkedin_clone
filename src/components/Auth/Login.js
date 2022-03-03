import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../Firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Actions/User";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          loginUser({
            email: userAuth.email,
            name: userAuth.displayName,
            picurl: userAuth.photoURL,
          })
        );
      })
      .catch((err) => console.log(err));
  };

  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userAuth) =>
  //       dispatch(
  //         loginUser({
  //           email: userAuth.email,
  //           name: userAuth.name,
  //           picurl: userAuth.picurl,
  //         })
  //       )
  //     )
  //     .catch((err) => console.log(err));
  // };
  return (
    <div>
      <div className="login-container">
        <div className="logo">
          <img src="https://www.comeet.com/resources/wp-content/uploads/2019/03/linkedin-logo.png" />
        </div>
        <div className="login-form-container">
          <form onSubmit={loginHandler}>
            <h2>Login </h2>
            <div className="email">
              <input
                placeholder="Email"
                type="text"
                className="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                placeholder="Password"
                type="password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit">
              <input
                disabled={email === "" || password === "" ? true : false}
                style={{ cursor: "pointer" }}
                type="submit"
                value="Sign In"
              />
            </div>
            <p>
              New to LinkedIn?
              <span>
                <input
                  className="join_now"
                  value="Join now"
                  type="button"
                  onClick={() => props.fun("signupshow")}
                />
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
