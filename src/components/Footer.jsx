import React from 'react';
import {Box,Stack,Typography} from '@mui/material';

import Logo from '../assets/images/footerbiceplogo.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#AFDBF5">
      <Stack gap="20px" alignItems="center" px="40px" pt="10px" pb="10px">
        <img src={Logo} alt="logo" height="100px" width="100px"/>
        <Typography variant='h5'>
          Welcome to the BitFit Arena , your gym partener.
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer