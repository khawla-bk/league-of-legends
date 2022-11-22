import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";
import "./Form.scss";

function RegisterForm({ history }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(user, history));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="uername"
          placeholder="Username *"
          required={true}
          onChange={handleChange}
        />
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

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterForm;
