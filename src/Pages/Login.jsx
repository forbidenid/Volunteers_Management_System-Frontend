import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "../Styles/Login.scss";

const Login = () => {
  return (
    <Box className="login">
      <Box className="login__card">
        <Typography
          sx={{ color: "white" }}
          variant="h4"
          className="login__card--title"
        >
          Login
        </Typography>
        <Box className="login__card--form">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            InputProps={{ className: "textfield-input" }}
            InputLabelProps={{ className: "textfield-label" }}
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            InputProps={{ className: "textfield-input" }}
            InputLabelProps={{ className: "textfield-label" }}
          />
          <Button variant="contained" className="login__card--button">
            Contained
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
