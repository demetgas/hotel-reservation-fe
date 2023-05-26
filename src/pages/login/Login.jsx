import { useContext, useState } from "react";
import "./login.css";
import { ConfirmContext } from "../../context/ConfirmContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    pwd: undefined,
  });

  const { user, loading, error, dispatch } = useContext(ConfirmContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_BEGIN" });
    try {
      const res = await axios.post("/confirm/login", credentials);
      dispatch({ type: "LOGIN_DONE", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL", payload: err.response.data });
    }
  };
  console.log(user);

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lBtn">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
