import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const CommunityPopup = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    host: "",
    venue: "",
    event: "",
    date: "",
    email: "",
    phone: "",
    task: "",
    period: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const {
      host,
      venue,
      event,
      date,
      email,
      phone,
      task,
      period,
      password,
      confirmPassword,
    } = formData;
    if (
      !host ||
      !venue ||
      !event ||
      !date ||
      !email ||
      !phone ||
      !task ||
      !period ||
      !password ||
      !confirmPassword
    ) {
      alert("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Community registered successfully!");
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
          Community Registration
        </Typography>
        <TextField
          label="Host"
          name="host"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Venue"
          name="venue"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Event"
          name="event"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Date"
          name="date"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <TextField
          label="Task"
          name="task"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          select
          label="Period"
          name="period"
          value={formData.period}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="1-3 months">1-3 months</MenuItem>
          <MenuItem value="3-6 months">3-6 months</MenuItem>
          <MenuItem value="6-9 months">6-9 months</MenuItem>
          <MenuItem value="9 months-1 year">9 months-1 year</MenuItem>
          <MenuItem value="More than a year">More than a year</MenuItem>
        </TextField>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommunityPopup;
