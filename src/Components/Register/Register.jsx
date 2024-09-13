import React, { useState } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import VolunteerPopup from "./VolunteerPopup"; // Import the VolunteerPopup component
import OrganizationPopup from "./OrganizationPopup"; // Import the OrganizationPopup component
import CommunityPopup from "./CommunityPopup"; // Import the CommunityPopup component

const mapItems = [
  {
    id: 1,
    title: "Become A Volunteer",
    description:
      "Become a volunteer and start contributing your time and skills to meaningful causes",
    icon: <VolunteerActivismRoundedIcon />,
    backgroundColor: "#13763A",
  },
  {
    id: 2,
    title: "NonProfit organization",
    description: "Empower Your Mission with Our Volunteer Management System",
    icon: <Groups3RoundedIcon />,
    backgroundColor: "#B16E09",
  },
  {
    id: 3,
    title: "Community Group",
    description:
      "Strengthen Your Community with Seamless Volunteer Coordination!",
    icon: <Diversity1RoundedIcon />,
    backgroundColor: "#5E5AFF",
  },
];

const MapItem = ({ title, description, icon, backgroundColor, onClick }) => (
  <Card
    sx={{
      maxWidth: 345,
      margin: 2,
      borderRadius: 2,
      border: "1px solid #ddd",
      cursor: "pointer", // Indicate that the card is clickable
    }}
    onClick={onClick}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: backgroundColor,
            marginRight: 2,
          }}
        >
          {icon}
        </Box>
        <IconButton>
          <ArrowOutwardRoundedIcon />
        </IconButton>
      </Box>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const Register = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isOrganizationModalOpen, setIsOrganizationModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

  const handleVolunteerOpen = () => setIsVolunteerModalOpen(true);
  const handleVolunteerClose = () => setIsVolunteerModalOpen(false);
  const handleOrganizationOpen = () => setIsOrganizationModalOpen(true);
  const handleOrganizationClose = () => setIsOrganizationModalOpen(false);
  const handleCommunityOpen = () => setIsCommunityModalOpen(true);
  const handleCommunityClose = () => setIsCommunityModalOpen(false);

  const handleCardClick = (id) => {
    if (id === 1) {
      handleVolunteerOpen();
    } else if (id === 2) {
      handleOrganizationOpen();
    } else if (id === 3) {
      handleCommunityOpen();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {mapItems.map((item) => (
        <MapItem
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          backgroundColor={item.backgroundColor}
          onClick={() => handleCardClick(item.id)} // Pass the card id to handleCardClick
        />
      ))}
      <VolunteerPopup
        open={isVolunteerModalOpen}
        handleClose={handleVolunteerClose}
      />
      <OrganizationPopup
        open={isOrganizationModalOpen}
        handleClose={handleOrganizationClose}
      />
      <CommunityPopup
        open={isCommunityModalOpen}
        handleClose={handleCommunityClose}
      />
    </Box>
  );
};

export default Register;
