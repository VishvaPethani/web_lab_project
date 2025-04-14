import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Welcome to WardrobeHUB</h2>
        <p>Sign in to get started!</p>
      </div>
      <div className="login-right">
        <div className="login-toggle-tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SIGNUP
          </button>
        </div>

        <form className="login-form">
          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter Mobile Number" required />

          {isLogin ? (
            <button type="submit">CONTINUE</button>
          ) : (
            <>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
              <label>Email</label>
              <input type="email" placeholder="Enter email" required />
              <button type="submit">REGISTER</button>
            </>
          )}
        </form>

        <p className="terms">
          By continuing, you agree to our <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
