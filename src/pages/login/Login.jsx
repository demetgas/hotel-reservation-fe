import { useContext, useState } from "react";
import "./login.css";
import { ConfrimContext } from "../../context/ConfirmContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(ConfrimContext);

  return <div className="login"></div>;
};

export default Login;
