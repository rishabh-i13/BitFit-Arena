import React, { useState,useEffect } from 'react'
import {Box,Stack,Typography,TextField,Button} from '@mui/material';
import { fetchData,exerciseOptions } from '../utils/fetchData';

import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = (props) => {

    const [search,setSearch]=useState('');
    const [bodyParts,setBodyParts]=useState([]);

    useEffect(()=>{
        const fetchExercisesData=async()=>{
            const bodyPartsData =await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            const Data=await bodyPartsData.json();
            console.log("Data..",Data)
            setBodyParts(Data);
        }
        fetchExercisesData();
    },[])

    const handelSearch= async ()=>{
        if(search){
            const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
              );
        

            setSearch('');
            console.log(searchedExercises);
            props.setExercises(searchedExercises);
        }   
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px" ,xs:"30px"}}} mb="50px" textAlign="center">
            Awesome Exercises You 
            <br/>
            Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
                height="76px"
                value={search}
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
                sx={{
                    input:{ fontWeight:'700', border:'none', borderRadius:'4px'},width:{lg:"800px",xs:'350px'}, backgroundColor:"#fff", borderRadius:"40px"
                }}
            />
            <Button className='search-btn' sx={{bgcolor:"#002D62",color:"#fff",textTransform:"none", width:{lg:{lg:"175px", xs:"80px"}},height:"56px",position:"absolute",right:"0"}}
            onClick={handelSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative', width:"100%", p:"20px"}}>
            <HorizontalScrollBar data={bodyParts} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises;