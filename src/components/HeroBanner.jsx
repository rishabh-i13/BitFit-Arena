import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";

import HerobannerImg from "../assets/images/bn2.jpg";
import { Player } from '@lottiefiles/react-lottie-player';
const HeroBanner = () => {
  return (
    <Box

      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#002D62" fontWeight="600" fontSize="30px">
        BitFit Arena
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Transforming Dreams
        <br /> into Gains!
        <br />
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Your Journey to Strength Starts Here!
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#002D62",padding:'10px'}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#002D62"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        BitFit 
      </Typography>
      <img src={HerobannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
