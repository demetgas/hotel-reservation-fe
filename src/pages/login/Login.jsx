import { useState } from "react";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  return <div>Login</div>;
};

export default Login;
