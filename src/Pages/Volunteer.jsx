import { Box, Button, Divider, Typography } from "@mui/material";
import FemaleUser from "../assets/imgs/female-user.png";
import "../Styles/Volunteer.scss";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VolunteersTable from "../Components/Volunteers/VolunteersTable";

export default function Volunteer() {
  return (
    <Box className="volunteer">
      <Box className="volunteer__user">
        <Box className="volunteer__user--left">
          <figure class="shape">
            <img src={FemaleUser} alt="Person on a tour" class="img" />
            <figcaption class="caption">Jane Doe</figcaption>
          </figure>
          <Typography variant="h4">Jane Doe</Typography>
        </Box>
        <Box className="volunteer__user--right">
          <Button variant="contained" className="button">
            Edit Profile
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1 }} className="volunteer__info">
        <Grid container spacing={2} columns={16}>
          <Grid size={8}>
            <Box className="volunteer__info--left">
              <PersonIcon />
              <Typography
                variant="h6"
                sx={{ color: "#e86a33", marginRight: "2rem" }}
              >
                Name:
              </Typography>
              <Typography variant="body2">Jane Doe</Typography>
            </Box>
            <Box className="volunteer__info--left">
              <TaskAltIcon />
              <Typography
                variant="h6"
                sx={{ color: "#e86a33", marginRight: "2rem" }}
              >
                Task:
              </Typography>
              <Typography variant="body2">Registering Attendees</Typography>
            </Box>
            <Box className="volunteer__info--left">
              <AccessTimeFilledIcon />
              <Typography
                variant="h6"
                sx={{ color: "#e86a33", marginRight: "2rem" }}
              >
                {" "}
                Period:
              </Typography>
              <Typography variant="body2">1 day</Typography>
            </Box>
          </Grid>
          <Grid size={8}>
            {" "}
            <Box className="volunteer__info--right">
              <PersonIcon />
              <Typography
                variant="h6"
                sx={{ color: "#e86a33", marginRight: "2rem" }}
              >
                Phone:
              </Typography>
              <Typography variant="body2">0700000000</Typography>
            </Box>
            <Box className="volunteer__info--right">
              <TaskAltIcon />
              <Typography
                variant="h6"
                sx={{ color: "#e86a33", marginRight: "2rem" }}
              >
                Email:
              </Typography>
              <Typography variant="body2">Jane@gmail.com</Typography>
            </Box>
            <Box className="volunteer__info--right">
              <AccessTimeFilledIcon />
              <Typography
                variant="h6"
                sx={{ color: "#e86a33", marginRight: "2rem" }}
              >
                {" "}
                Password:
              </Typography>
              <Typography variant="body2">******</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box className="volunteer__events">
        <Box className="volunteer__events--title">
          <Typography variant="h5">Events</Typography>
          <Typography variant="body2">
            List and details of volunteer events
          </Typography>
        </Box>
        <Box className="volunteer__events--toggle">
          {["Upcoming", "Past", "Pending", "Cancelled", "All"].map((text) => (
            <Typography
              variant="h6"
              key={text}
            >
              {text}
            </Typography>
          ))}
        </Box>
        <Box className="volunteer__events--list">
          <VolunteersTable />
        </Box>
      </Box>
    </Box>
  );
}
