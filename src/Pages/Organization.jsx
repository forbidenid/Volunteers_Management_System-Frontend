import React, { useState } from "react";
import {
  Grid,
  Button,
  IconButton,
  Paper,
  Typography,
  Dialog,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const initialOrganizations = [
  {
    id: 1,
    name: "Helping Hands",
    venue: "Community Hall",
    period: "1-3 months",
    task: "Food Drive",
  },
  {
    id: 2,
    name: "Tree Plantation",
    venue: "National Park",
    period: "3-6 months",
    task: "Planting Trees",
  },
  {
    id: 3,
    name: "Blood Donation Camp",
    venue: "Hospital",
    period: "6-9 months",
    task: "Collecting Blood",
  },
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

const OrgCard = styled(Paper)({
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

const Organization = () => {
  const [organizations, setOrganizations] = useState(initialOrganizations);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    period: "",
    task: "",
  });
  const [editId, setEditId] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", venue: "", period: "", task: "" });
    setEditId(null);
  };

  const handleSubmit = () => {
    if (editId) {
      setOrganizations(
        organizations.map((org) =>
          org.id === editId ? { ...formData, id: editId } : org
        )
      );
    } else {
      setOrganizations([
        ...organizations,
        { ...formData, id: organizations.length + 1 },
      ]);
    }
    handleClose();
  };

  const handleEdit = (org) => {
    setEditId(org.id);
    setFormData(org);
    handleOpen();
  };

  const handleDelete = (id) => {
    setOrganizations(organizations.filter((org) => org.id !== id));
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
          Organization Events
        </Typography>
        <CustomButton startIcon={<AddIcon />} onClick={handleOpen}>
          {editId ? "Update Event" : "Add Event"}
        </CustomButton>
      </HeaderContainer>

      <Grid container spacing={3}>
        {organizations.map((org) => (
          <Grid item xs={12} sm={6} md={4} key={org.id}>
            <OrgCard>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {org.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Venue: {org.venue}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Period: {org.period}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Task: {org.task}
              </Typography>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton color="primary" onClick={() => handleEdit(org)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(org.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </OrgCard>
          </Grid>
        ))}
      </Grid>

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
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel id="period-label">Period</InputLabel>
            <Select
              labelId="period-label"
              value={formData.period}
              label="Period"
              onChange={(e) =>
                setFormData({ ...formData, period: e.target.value })
              }
            >
              <MenuItem value="1-3 months">1-3 months</MenuItem>
              <MenuItem value="3-6 months">3-6 months</MenuItem>
              <MenuItem value="6-9 months">6-9 months</MenuItem>
              <MenuItem value="9 months-1 year">9 months - 1 year</MenuItem>
              <MenuItem value="More than a year">More than a year</MenuItem>
            </Select>
          </FormControl>
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

export default Organization;
