import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = (props) => {
  return (
    <Link className="exercise-card" to={`/exercise/${props.exercise.id}`}>
      <img
        src={props.exercise.gifUrl}
        alt={props.exercise.name}
        loading="lazy"
        style={{borderRadius:"100px"}}
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#002D62",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {props.exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#002D62",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {props.exercise.target}
        </Button>
      </Stack>
       
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="24px">
            {props.exercise.name}
        </Typography>
    </Link>
  );
};

export default ExerciseCard;
