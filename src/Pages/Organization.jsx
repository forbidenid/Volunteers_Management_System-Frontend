import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AddCircle } from "@mui/icons-material";
import Popup from "../Components/Organization/Popup";

export default function Organization() {
  const [organizations, setOrganizations] = useState([
    {
      organizationName: "Organization One",
      email: "orgone@example.com",
      phone: "123456789",
      task: "Event Management",
      period: "3-6 months",
    },
    {
      organizationName: "Organization Two",
      email: "orgtwo@example.com",
      phone: "987654321",
      task: "Social Media",
      period: "6-9 months",
    },
  ]);

  const [filteredOrganizations, setFilteredOrganizations] =
    useState(organizations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = organizations.filter(
      (org) =>
        org.organizationName.toLowerCase().includes(value) ||
        org.email.toLowerCase().includes(value) ||
        org.phone.includes(value)
    );
    setFilteredOrganizations(filtered);
  };

  const handleFilterPeriod = (e) => {
    const value = e.target.value;
    setFilterPeriod(value);
    const filtered = value
      ? organizations.filter((org) => org.period === value)
      : organizations;
    setFilteredOrganizations(filtered);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const displayedOrganizations = filteredOrganizations.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Organization Management
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search Organizations"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            select
            fullWidth
            label="Filter by Period"
            value={filterPeriod}
            onChange={handleFilterPeriod}
          >
            <MenuItem value="">All Periods</MenuItem>
            <MenuItem value="1-3 months">1-3 months</MenuItem>
            <MenuItem value="3-6 months">3-6 months</MenuItem>
            <MenuItem value="6-9 months">6-9 months</MenuItem>
            <MenuItem value="9 months-1 year">9 months-1 year</MenuItem>
            <MenuItem value="More than a year">More than a year</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircle />}
            onClick={handleOpen}
            fullWidth
          >
            Add Event
                  </Button>
            <Popup open={open} handleClose={handleClose} />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Organization Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Period</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedOrganizations.length ? (
              displayedOrganizations.map((org, index) => (
                <TableRow key={index}>
                  <TableCell>{org.organizationName}</TableCell>
                  <TableCell>{org.email}</TableCell>
                  <TableCell>{org.phone}</TableCell>
                  <TableCell>{org.task}</TableCell>
                  <TableCell>{org.period}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No organizations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(filteredOrganizations.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>

    </Box>
  );
}
