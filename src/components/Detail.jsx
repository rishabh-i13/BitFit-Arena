import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/bodypart.png";
import TargetImage from "../assets/icons/targetmuscle.png";
import EquipmentImage from "../assets/icons/dumbbell.png";
import ExerciseDetail from "../pages/ExerciseDetail";

const Detail = (props) => {
  const { bodyPart, gifUrl, name, target, equipment } = props.exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Every workout is a step closer to your goals. Do <span style={{color:"#1877F2"}}> {name}</span> to train your {" "}
          <span style={{color:"#1877F2"}}>{target}</span>. Keep pushing, keep grinding, and never give up.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#AFDBF5",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px"}}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "25px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
