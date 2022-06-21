import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory("");

  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password, history).catch((error) => {
      SpeechSynthesisErrorEvent(error);
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
          <a href="/" className="active">
            Login
          </a>
          <a href="/signup" className="unactive">
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
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          {/* <a href="#" className="forgotpsw">
          <input type="text" className="inputs" placeholder="Email Address" />
          <input type="text" className="inputs" placeholder="Password" />
          <br />
          <a href="#" className="forgotpsw">
            Forgot Password?
          </a> */}
        </div>
        {error && (
          <div className="alert alert-danger">
            <h6>{error.message}</h6>
          </div>
        )}
        <br />
        <br />
        <div className="submitdiv">
          <button
            href="/app"
            className="submitbtn glow-on-hover"
            placeholder="Login"
          >
            Login
          </button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};
