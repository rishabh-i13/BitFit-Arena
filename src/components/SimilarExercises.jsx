import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = (props) => {
  return (
    <Box sx={{mt:{lg:"20px",xs:"0"}}}>
      <Typography variant='h4' mb={5}>
        Exercises that target the same Muscle Group
      </Typography>
      <Stack direction="row" sx={{p:"4", position:"relative"}}>
        {
          props.targetMuscleExercises.length? <HorizontalScrollBar data={props.targetMuscleExercises} />
          : <Loader/>
        }
      </Stack>
      <Typography variant='h4' mb={5} mt={5}>
        Exercises that uses the same Equipment
      </Typography>
      <Stack direction="row" sx={{p:"4", position:"relative"}}>
        {
          props.equipmentExercises.length? <HorizontalScrollBar data={props.equipmentExercises} />
          : <Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises