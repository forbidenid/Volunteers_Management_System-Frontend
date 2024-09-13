import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        <Grid container spacing={2} columns={12} className="join__content">
          <Grid className="join__content--box" xs={4}>
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
          </Grid>

          <Grid className="join__content--box" xs={4}>
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
          </Grid>

          <Grid className="join__content--box" xs={4}>
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
          </Grid>
        </Grid>
      </Box>

      <Box className="faqs">
        <Box className="faqs__all">
          <Typography variant="h6" style={{ paddingBottom: "2rem" }}>
            Frequently Asked Questions
          </Typography>
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid container spacing={2} columns={12}>
                <Grid item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid>
              </Grid>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid container spacing={2} columns={12}>
                <Grid item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid>
              </Grid>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid container spacing={2} columns={12}>
                <Grid item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid>
              </Grid>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid container spacing={2} columns={12}>
                <Grid item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid>
              </Grid>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="faqs__content">
            <Box className="faqs__content--list">
              <Grid container spacing={2} columns={12}>
                <Grid item xs={10}>
                  <Typography variant="h6">How do I sign up?</Typography>
                </Grid>
                <Grid item xs={2}>
                  <ExpandMoreRoundedIcon />
                </Grid>
              </Grid>
              <Typography variant="body2">
                Click on the sign-up button on the top right corner of the page
              </Typography>
            </Box>
          </Box>
          <Divider />
        </Box>
      </Box>

      <Box className="footer">
        <Grid container spacing={2} columns={12}>
          <Grid xs={4} className="footer__top">
            <Grid className="footer__top--round">
              <PinDropRoundedIcon />
            </Grid>
            <Grid className="footer__top--details">
              <Typography style={{ color: "#E86A33" }} variant="h6">
                Full Address
              </Typography>
              <Typography variant="body2">
                Uzima Centre Mezannine Floor, Mali Road, Nairobi Town
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={4} className="footer__top">
            <Grid className="footer__top--square">
              <PhoneRoundedIcon />
            </Grid>
            <Grid className="footer__top--details">
              <Typography style={{ color: "#E86A33" }} variant="h6">
                Phone Number
              </Typography>
              <Typography variant="body2">
                (+254) 700000000 (+254) 712345678
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={4} className="footer__top">
            <Button className="footer__top--btn" variant="contained">
              Get In Touch
            </Button>
          </Grid>
        </Grid>

        <Divider style={{ backgroundColor: "#000", width: "100%" }} />
        <Grid container spacing={2} columns={12}>
          <Grid size={4} className="footer__bottom">
            <img
              src={Logo}
              alt="Logo"
              className="footer__bottom--logo"
              style={{ width: "300px", height: "auto" }}
            />
            <Typography variant="body2">
              Empowering communities by simplifying volunteer engagement—
            </Typography>
            <Typography variant="body2">
              because every opportunity matters and every contribution counts.
            </Typography>
          </Grid>
          <Grid size={2} className="footer__bottom">
            <Typography variant="h6" className="footer__bottom--heading">
              General
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Home
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              About Us
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Our Stories
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Our Program
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Blog
            </Typography>
          </Grid>
          <Grid size={2} className="footer__bottom">
            <Typography variant="h6" className="footer__bottom--heading">
              Services
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Stories
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Videos
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Our Stories
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              New Releases
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Careers
            </Typography>
          </Grid>
          <Grid size={2} className="footer__bottom">
            <Typography variant="h6" className="footer__bottom--heading">
                Support
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              FAQs
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Call Center
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Contact Us
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Newsletter
            </Typography>
          </Grid>
          <Grid size={2} className="footer__bottom">
            <Typography variant="h6" className="footer__bottom--heading">
              Follow Us
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Facebook
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Twitter
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Instagram
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Linkedn
            </Typography>
            <Typography variant="body2" className="footer__bottom--links">
              Youtube
            </Typography>
          </Grid>
        </Grid>

        <Box className="footer__copy">
          <Typography variant="body2">
            &copy; 2021 VMS. All Rights Reserved. Terms and Conditions
          </Typography> 
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
