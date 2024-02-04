import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = (props) => {
  return (
    <Box sx={{mt:{lg:"20px",xs:"0"}}}>
      <Typography variant='h4'>
        Exercises that target the same Muscle Group
      </Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
        {
          props.targetMuscleExercises.length? <HorizontalScrollBar data={props.targetMuscleExercises}/>
          : <Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises