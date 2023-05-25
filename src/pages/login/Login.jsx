import { useContext, useState } from "react";
import "./login.css";
import { ConfirmContext } from "../../context/ConfirmContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(ConfirmContext);

  return (
    <div className="login">
      <div className="lContainer">
        <input type="text" placeholder="username" className="lInput" />
      </div>
    </div>
  );
};

export default Login;
