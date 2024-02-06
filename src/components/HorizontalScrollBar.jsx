import React,{useContext} from 'react';
import { Box,Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = (props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            props.data.map((item)=>(
                <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
                >
                  {props.isBodyPart ? <BodyPart item={item} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart }/>: <ExerciseCard exercise={item}/>}
                </Box>
            ))
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar;