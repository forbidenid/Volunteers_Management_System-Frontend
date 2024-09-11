import React from "react";
import { Box, Typography, Button, Grid2, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "../Styles/Landing.scss";
import Logo from "../assets/imgs/logo.png";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Landing = () => {
  return (
    <Box className="landing">
      <Box className="header">
        <Box className="header__background" />

        <Box className="header__content">
          <Box className="header__logo">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
            <Typography variant="h6" className="header__logo--title">
              {" "}
              VMS{" "}
            </Typography>
          </Box>

          <Box className="header__menu">
            <Button
              className="header__menu--btn"
              component={Link}
              to="/home"
              color="inherit"
            >
              Home
            </Button>
            <Button
              className="header__menu--btn"
              component={Link}
              to="/about"
              color="inherit"
            >
              About
            </Button>
            <Button
              className="header__menu--btn"
              component={Link}
              to="/services"
              color="inherit"
            >
              Our Stories
            </Button>
            <Button
              className="header__menu--btn"
              component={Link}
              to="/services"
              color="inherit"
            >
              Our Program
            </Button>
          </Box>

          <Box className="header__log">
            <Button
              className="header__log--btn"
              variant="contained"
              component={Link}
              to="/register"
              color="inherit"
            >
              Sign Up
            </Button>
            <Button
              className="header__log--btn"
              variant="contained"
              component={Link}
              to="/login"
              color="inherit"
            >
              Log In
            </Button>
          </Box>

          <Box className="header__title">
            <Box className="header__title--text">
              <Typography variant="h6"> Manage Volunteers with </Typography>
              <Typography className="acc" variant="h6">
                {" "}
                Ease,{" "}
              </Typography>
              <Typography variant="h6"> Drive Change </Typography>
            </Box>
            <Box className="header__title--subtext">
              <Typography variant="h6">
                Management and coordination of volunteer activities
              </Typography>
              <Typography variant="body2">
                Post and organize volunteer events,
              </Typography>
              <Typography variant="body2">
                Track volunteer hours, and communicate seamlessly with
                participant
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography variant="h6" className="title">
        Join us
      </Typography>
      <Box className="join">
        <Grid2 container spacing={2} columns={12} className="join__content">
          <Grid2 className="join__content--box" xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              className="icons"
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#13763A", // Optional background color
                }}
              >
                <VolunteerActivismRoundedIcon />
              </Box>
              <Box>
                <ArrowOutwardRoundedIcon />
              </Box>
            </Box>
            <Typography style={{ paddingBottom: "2rem" }} variant="h6">
              Become A Volunteer
            </Typography>
            <Typography style={{ paddingBottom: "2rem" }} variant="body2">
              Become a volunteer and start contributing your time and skills to
              meaningful causes
            </Typography>
          </Grid2>

          <Grid2 className="join__content--box" xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              className="icons"
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#B16E09",
                }}
              >
                <Groups3RoundedIcon />
              </Box>
              <Box>
                <ArrowOutwardRoundedIcon />
              </Box>
            </Box>
            <Typography style={{ paddingBottom: "2rem" }} variant="h6">
              NonProfit organization
            </Typography>
            <Typography style={{ paddingBottom: "2rem" }} variant="body2">
              Empower Your Mission with Our Volunteer Management System
            </Typography>
          </Grid2>

          <Grid2 className="join__content--box" xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              className="icons"
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#5E5AFF",
                }}
              >
                <Diversity1RoundedIcon />
              </Box>
              <Box>
                <ArrowOutwardRoundedIcon />
              </Box>
            </Box>
            <Typography style={{ paddingBottom: "2rem" }} variant="h6">
              Community Group
            </Typography>
            <Typography style={{ paddingBottom: "2rem" }} variant="body2">
              Strengthen Your Community with Seamless Volunteer Coordination!
            </Typography>
          </Grid2>
        </Grid2>
      </Box>

      <Box className="faqs">
        <Box className="faqs__all">
          <Typography variant="h6" style={{ paddingBottom: "2rem" }}>
            Frequently Asked Questions
          </Typography>
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid2 container spacing={2} columns={12}>
                <Grid2 item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid2>
                <Grid2 item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid2>
              </Grid2>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid2 container spacing={2} columns={12}>
                <Grid2 item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid2>
                <Grid2 item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid2>
              </Grid2>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid2 container spacing={2} columns={12}>
                <Grid2 item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid2>
                <Grid2 item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid2>
              </Grid2>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid2 container spacing={2} columns={12}>
                <Grid2 item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid2>
                <Grid2 item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid2>
              </Grid2>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid2 container spacing={2} columns={12}>
                <Grid2 item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid2>
                <Grid2 item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid2>
              </Grid2>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
        </Box>
      </Box>

      <Box className="footer">
        <Grid2 className="footer__top">
          <Grid2 className="footer__top--round">
            <PinDropRoundedIcon />
          </Grid2>
          <Grid2 className="footer__top--details">
            <Typography style={{ color: "#E86A33" }} variant="h6">
              Full Address
            </Typography>
            <Typography variant="body2">
              Uzima Centre Mezannine Floor, Mali Road, Nairobi Town
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 className="footer__top">
          <Grid2 className="footer__top--square">
            <PhoneRoundedIcon />
          </Grid2>
          <Grid2 className="footer__top--details">
            <Typography style={{ color: "#E86A33" }} variant="h6">
              Phone Number
            </Typography>
            <Typography variant="body2">
              (+254) 700000000 (+254) 712345678
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 className="footer__top">
          <Button className="footer__top--btn" variant="contained">
            Get In Touch
          </Button>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Landing;
