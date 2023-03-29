import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getJwtLogin, getStoreJwt, isValid } from "../proccess/JWT";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const login = () => {
    if (loginInfo.email != "" && loginInfo.password != "") {
      getJwtLogin(loginInfo);

      if (isValid) {
        navigate("/main");
      }
      // console.log(isValid);
    }
  };

  const changeInfo = (e: any) => {
    const { name, value } = e.target;
    let change = {};
    switch (name) {
      case "email":
        change = { email: value };
        break;
      case "password":
        change = { password: value };
        break;
      default:
        break;
    }

    setLoginInfo((preVal: any) => {
      return { ...preVal, ...change };
    });
  };

  return (
    <div>
      <Box>
        <TextField
          name="email"
          value={loginInfo.email}
          onChange={changeInfo}
          type="email"
        />
        <TextField
          name="password"
          value={loginInfo.password}
          type="password"
          onChange={changeInfo}
        />
        <Button onClick={login}>Connexion</Button>
      </Box>
    </div>
  );
};

export default Login;
