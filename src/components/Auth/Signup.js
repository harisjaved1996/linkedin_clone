import React, { useState } from "react";
import { auth } from "../../Firebase";
import { useDispatch } from "react-redux";
import "./Signup.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { loginUser } from "../../Actions/User";
const Signup = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picurl, setPicUrl] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: picurl,
        });
      })
      .then(() => {
        dispatch(
          loginUser({
            email: email,
            name: name,
            picurl: picurl,
          })
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="signup-container">
        <div className="logo">
          <img src="https://www.comeet.com/resources/wp-content/uploads/2019/03/linkedin-logo.png" />
        </div>
        <div className="signup-form-container">
          <form onSubmit={submitHandler}>
            <h2>SignUp</h2>
            <div className="name">
              <input
                placeholder="Full Name"
                type="text"
                className="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="picture_url">
              <input
                placeholder="Picture URL"
                type="url"
                value={picurl}
                className="picurl"
                onChange={(e) => setPicUrl(e.target.value)}
              />
            </div>
            <div className="email">
              <input
                placeholder="Email"
                type="text"
                value={email}
                className="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                placeholder="Password"
                type="password"
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit">
              <input
                disabled={
                  email === "" ||
                  name === "" ||
                  picurl === "" ||
                  password === ""
                    ? true
                    : false
                }
                type="submit"
                value="Sign In"
              />
            </div>
            <p>
              Already have an account?
              <span>
                <input
                  className="join_now"
                  value="SignIn"
                  type="button"
                  onClick={() => props.fun("loginshow")}
                />
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
