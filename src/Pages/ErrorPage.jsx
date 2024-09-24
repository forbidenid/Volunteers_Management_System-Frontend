// src/Components/ErrorPage/ErrorPage.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h3" color="primary" gutterBottom>
        Page Under Maintenance
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        We are currently working on this page. Please check back later.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ mt: 2, bgcolor: "#028e37" }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
