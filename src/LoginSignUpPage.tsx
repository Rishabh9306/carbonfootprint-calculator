import React, { useState } from "react";

const LoginSignUpPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isSignUp) {
      // Perform sign-up logic
      console.log("Signing up:", email, password);
    } else {
      // Perform login logic
      console.log("Logging in:", email, password);
    }
  };

  return (
    <div className="login-signup-page">
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Login"
          : "Don’t have an account? Sign Up"}
      </button>
    </div>
  );
};

export default LoginSignUpPage;
