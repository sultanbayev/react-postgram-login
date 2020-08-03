import React from "react";
import { ProvideFirebase } from "./firebase/useFirebase";
import { Router } from "@reach/router";
import MainPage from "./posts/MainPage";
import PasswordChange from './auth/PasswordChange';
import ForgotPassword from './auth/ForgotPassword';
import Login from "./auth/Login";
import Register from "./auth/Register";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <ProvideFirebase>
      <Router>
        <MainPage path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <PasswordChange path="/passwordChange" />
        <ForgotPassword path="/forgot" />
      </Router>
    </ProvideFirebase>
  );
}

export default App;
