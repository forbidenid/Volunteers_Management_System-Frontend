import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import "../Styles/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); 

  const handleLogin = () => {
    if (role === "volunteer") {
      navigate("/volunteer");
    } else if (role === "organization") {
      navigate("/organization");
    } else if (role === "community") {
      navigate("/community");
    } else {
      alert("Please select a valid role");
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            InputProps={{ className: "textfield-input" }}
            InputLabelProps={{ className: "textfield-label" }}
            className="textfield"
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Role selection */}
          <TextField
            className="textfield"
            label="Role (volunteer, organization, community)"
            variant="filled"
            value={role}
            onChange={(e) => setRole(e.target.value.toLowerCase())}
            sx={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            className="login__card--button"
            sx={{ backgroundColor: "#e86a33" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
