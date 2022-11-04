import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";

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
    <div>
      <div>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              required={true}
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
