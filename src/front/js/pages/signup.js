import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/login.css";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const history = useHistory("");

  const handleClick = (e) => {
    e.preventDefault();
    actions.createUser(email, password).then((data) => history.push("/"));
  };
  return (
    <div>
      <form className="form">
        <div className="top">
          <img
            className="logo"
            src="https://media.discordapp.net/attachments/617586904866619402/977376727657508904/Add_a_heading_2.png"
          />
          <br />
          <a href="/" className="Login">
            Login
          </a>
          <a href="/signup" className="Signup">
            Signup
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="data">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="phone_number"
            placeholder="Phone Number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
        </div>
        <br />
        <br />
        <div className="submitdiv">
          <input
            href="/demo"
            onClick={handleClick}
            className="submitbtn"
            placeholder="Sign up"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};
