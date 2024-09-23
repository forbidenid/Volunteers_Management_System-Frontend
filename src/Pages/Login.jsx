import React from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import "../Styles/Login.scss";

const Login = () => {
  return (
    <Box className="login">
      <Card className="login__card">
        <Typography variant="h4" className="login__card--title">
          Login
        </Typography>
        <Box className="login__card--form">
          <TextField
            className="textfield"
            id="filled-basic"
            label="Email"
            variant="filled"
            InputProps={{ className: "textfield-input" }}
            InputLabelProps={{ className: "textfield-label" }}
          />
          <TextField
            InputProps={{ className: "textfield-input" }}
            InputLabelProps={{ className: "textfield-label" }}
            className="textfield"
            id="filled-basic"
            label="Password"
            variant="filled"
          />
          <Button
            variant="contained"
            className="login__card--button"
            sx={{ backgroundColor: "#e86a33"}}
          >
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
