import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";
import CancelIcon from "@material-ui/icons/Cancel";

function Login() {
  function showRegister() {
    document.getElementById("registerForm").style.display = "flex";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("title").innerHTML = "Register";
  }
  function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("title").innerHTML = "Login";
  }

  function closeLogin() {
    document.getElementById("login").style.display = "none";
    document.body.overflowY = "scroll";
  }

  return (
    <div className="login" id="login">
      <div className="containerFluid">
        <div className="login__header">
          <h1 id="title">Login </h1>
        </div>
        <CancelIcon onClick={closeLogin} class="cross" />
        <br />
        <div id="registerForm" className="login__form">
          <form action="" autoComplete="off">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Full Name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" placeholder="Mobile Number" name="mobile" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" name="email" />
            </div>
            <div className="form-group">
              <Button>Verify</Button>
            </div>
          </form>

          <h5>Enter your OTP</h5>
          <form className="submitForm" action="">
            <div className="login__otp">
              <input
                type="text"
                class="form-control"
                placeholder="0"
                maxlength="1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="0"
                maxlength="1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="0"
                maxlength="1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="0"
                maxlength="1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="0"
                maxlength="1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="0"
                maxlength="1"
              />
            </div>
            <Button type="submit" className="submitBtn" block>
              Submit
            </Button>
          </form>
          <p className="changeForm" onClick={showLogin}>
            Go back to "Login"
          </p>
        </div>
        <div id="loginForm" className="login__form">
          <form action="" autoComplete="off">
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" placeholder="Mobile Number" name="mobile" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" name="email" />
            </div>
            <div className="form-group">
              <Button>Verify</Button>
            </div>
            <p className="changeForm" onClick={showRegister}>
              New User? "Register here"
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
