import React, { useState } from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

function LoginForm({ history }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="E-mail *"
          required={true}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password *"
          required={true}
          onChange={handleChange}
        />

        <p className="forgotPAssword">Frogot your password ?</p>
        <input type="submit" value="Login" />

        <Link to="/register">
          <p className="createAccount">Create Account</p>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
