import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            component={Link}
            to="/"
            sx={{
              color: "#e86a33",
              position: "absolute",
              top: 0,
              right: 0,
              textDecoration: "none",
            }}
          >
            Back Home
          </Typography>
        </Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          We'd love to hear from you! Please fill out the form below and we’ll
          get back to you as soon as possible.
        </Typography>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
