import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Popup({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    time: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, venue, time, date } = formData;
    if (!name || !venue || !time || !date) {
      alert("All fields are required.");
      return;
    }
    alert("Event created successfully!");
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
          Create Event
        </Typography>

        <TextField
          label="Event Name"
          name="name"
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

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Date"
              name="date"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Time"
              name="time"
              type="time"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Event
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
