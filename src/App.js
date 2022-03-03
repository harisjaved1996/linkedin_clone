import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
//
import { useSelector } from "react-redux";

import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "./Actions/User";
// import { selectUser } from "./features/userSlice";
//
import Feed from "./components/Feed/Feed";
function App() {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          loginUser({
            email: userAuth.email,
            name: userAuth.displayName,
            picurl: userAuth.photoURL,
          })
        );
      } else {
        // user is not logged in

        dispatch(logoutUser());
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <Auth />
      ) : (
        <div className="main-container">
          <Header />
          <div className="main-content-container">
            <Sidebar />
            <Feed />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
