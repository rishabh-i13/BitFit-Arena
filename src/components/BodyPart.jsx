import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/gym-icon-ga.png';

import '../Styles/BodyPart.css';

const BodyPart = (props) => {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className='bodyPart-card'
    sx={{
            borderTop: props.bodypart===props.item ? "4px solid #ff2625":"",
            backgroundColor:"#fff",
            borderBottomLeftRadius:"20px",
            width:"240px",
            height:"260px",
            cursor:"pointer", 
            gap:"47px",
            margin:"16px",
            border:"2px solid #002D62",
            
    }}
    onClick={()=>{
        props.setBodyPart(props.item);
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
    >
        <img src={Icon} alt="dumbell" style={{width:'80px', height:"80px"}} />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{props.item}</Typography>
    </Stack>
  )
}

export default BodyPart