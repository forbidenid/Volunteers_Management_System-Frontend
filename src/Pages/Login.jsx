import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import loginImage from "../assets/imgs/login.jpg";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${loginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "white" }}
      >
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{
          input: { color: "white" }, 
          label: { color: "white" }, 
          bgcolor: "rgba(255, 255, 255, 0.2)", 
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{
          input: { color: "white" },
          label: { color: "white" },
          bgcolor: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: "#E86A33",
          "&:hover": {
            bgcolor: "#d55a2f", 
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;

