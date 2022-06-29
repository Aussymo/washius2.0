import React, { useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/signup.css";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [error, setError] = useState(null);
  const [phone_number, setPhoneNumber] = useState("");
  const history = useHistory("");

  const handleClick = (e) => {
    e.preventDefault();
    actions
      .createUser(email, password, phone_number, full_name, history)
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleClick} className="form">
        <div className="top">
          <img
            className="logo"
            src="https://cdn.discordapp.com/attachments/617586904866619402/981352043421769728/Add_a_heading_2.png"
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
            type="full_name"
            placeholder="Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
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
        {error && (
          <div className="alert alert-danger">
            <h6>{error.message}</h6>
          </div>
        )}
        <div className="submitdiv">
          <button
            href="/login"
            className="submitbtn glow-on-hover"
            placeholder="Sign up"
          >
            Signup
          </button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};
