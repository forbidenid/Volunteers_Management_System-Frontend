import React, { useState } from "react";
import {
  Grid,
  Button,
  IconButton,
  Paper,
  Typography,
  Dialog,
  TextField,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const initialEvents = [
  {
    id: 1,
    name: "Cleanup Drive",
    venue: "Park",
    date: "2024-10-01",
    task: "Cleaning",
  },
  {
    id: 2,
    name: "Food Drive",
    venue: "Community Center",
    date: "2024-10-10",
    task: "Distributing food",
  },
  {
    id: 3,
    name: "Blood Donation Camp",
    venue: "Hospital",
    date: "2024-10-15",
    task: "Collecting blood",
  },
  {
    id: 4,
    name: "Plantation Drive",
    venue: "School",
    date: "2024-10-20",
    task: "Planting trees",
  },
  {
    id: 5,
    name: "Educational Camp",
    venue: "Community Center",
    date: "2024-10-25",
    task: "Teaching kids",
  },
  {
    id: 6,
    name: "Health Camp",
    venue: "Hospital",
    date: "2024-10-30",
    task: "Checkup",
  }
];

const CustomButton = styled(Button)({
  backgroundColor: "#e86a33",
  color: "#fff",
  padding: "10px",
  borderRadius: "8px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#cc5b2d",
  },
});

const EventCard = styled(Paper)({
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const FormWrapper = styled(Paper)({
  padding: "30px",
  borderRadius: "12px",
  backgroundColor: "#f9f9f9",
});

const HeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const CommunityEventsPage = () => {
  const [events, setEvents] = useState(initialEvents);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    date: "",
    task: "",
  });
  const [editId, setEditId] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", venue: "", date: "", task: "" });
    setEditId(null);
  };

  const handleSubmit = () => {
    if (editId) {
      setEvents(
        events.map((event) =>
          event.id === editId ? { ...formData, id: editId } : event
        )
      );
    } else {
      setEvents([...events, { ...formData, id: events.length + 1 }]);
    }
    handleClose();
  };

  const handleEdit = (event) => {
    setEditId(event.id);
    setFormData(event);
    handleOpen();
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

    const handleBackToHome = () => {
      navigate("/");
    };

  return (
    <div style={{ padding: "20px" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#e86a33",
          color: "#fff",
          marginBottom: "20px",
          "&:hover": {
            backgroundColor: "#d75e2d",
          },
        }}
        onClick={handleBackToHome}
      >
        Back to Home
      </Button>
      <HeaderContainer>
        <Typography variant="h5" sx={{ color: "#e86a33", fontWeight: "bold" }}>
          Community Events
        </Typography>
        <CustomButton startIcon={<AddIcon />} onClick={handleOpen}>
          {editId ? "Update Event" : "Add Event"}
        </CustomButton>
      </HeaderContainer>

      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {event.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Venue: {event.venue}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Date: {event.date}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Task: {event.task}
              </Typography>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton color="primary" onClick={() => handleEdit(event)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(event.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </EventCard>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Add/Edit Event */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <FormWrapper>
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            {editId ? "Edit Event" : "Add Event"}
          </Typography>
          <TextField
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            label="Venue"
            fullWidth
            value={formData.venue}
            onChange={(e) =>
              setFormData({ ...formData, venue: e.target.value })
            }
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            sx={{ marginBottom: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Task"
            fullWidth
            value={formData.task}
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            sx={{ marginBottom: "20px" }}
          />
          <CustomButton onClick={handleSubmit}>
            {editId ? "Update Event" : "Add Event"}
          </CustomButton>
        </FormWrapper>
      </Dialog>
    </div>
  );
};

export default CommunityEventsPage;
