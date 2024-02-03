import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';



const Home = () => {

  const [exercises,setExercises]=useState([]);
  const [bodyPart,setBodyPart]=useState('all');

  console.log(bodyPart);
  return (
    <Box>
      {/* <Player
        src='https://lottie.host/90b71fa7-53e4-480e-9bf5-8ae76263a50f/SEmCaGLI0b.json'
        className="player" loop
        autoplay style={{width:"200px", height:"200px"}}
      /> */}
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home;

