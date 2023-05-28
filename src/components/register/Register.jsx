import { useState } from "react";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    pwd: undefined,
  });
  return <div>Register</div>;
};

export default Register;
