import React, { useState } from "react";

function FormComponent({ active, onRegisterClick, onLoginClick }) {
  return (
    <div className={`container ${active ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={onRegisterClick}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button onClick={onLoginClick}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="sign-in-btn" onClick={onLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Explorer!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="sign-up-btn" onClick={onRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthForm() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className="app">
            <FormComponent
                active={isActive}
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick}
            />
        </div>
    );
}

export default AuthForm;
