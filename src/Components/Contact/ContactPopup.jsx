import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const ContactPopup = ({ open, handleClose }) => {
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
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactPopup;
