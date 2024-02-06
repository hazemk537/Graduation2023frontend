import React from "react";
import styles from "../styles/signup.module.css";
function LoginForm() {
  return (
    <div className={styles.LoginForm}>
      <div class="container">
        <form>
          <div class="head">
            <span>Sign up</span>
            <p>Create a free account with your email.</p>
          </div>
          <div class="inputs">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign up</button>
        </form>
        <div class="form-footer">
          <p>
            Have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

