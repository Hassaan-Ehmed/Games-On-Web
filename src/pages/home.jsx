import React from "react";
import image from '../images/pexels-pixabay-326333.jpg'
import MediaControlCard from "../MUI-Playground";
import HomePageCard from "../MUI-Playground";
import {Grid} from '@mui/material'
import Tic_Tac_Toe from '../images/2076261.png'
import Tic_Tac_Toe_With_PC from '../images/2076262.png'
import Unit_Convertor from '../images/unitc.png'
const Home = () => {
 return (
  <div style={{zIndex:1,position:"relative"}}>

<img src={image} alt=""   style={{


height:"100vh",
width:"100%",
objectFit:"cover",
position:"absolute",
 zIndex:-1,
 top:0

}}/>

<Grid container columnSpacing={1}rowSpacing={2} style={
        {
            width:"100%",
             marginTop:"15vw",
             position:"absolute",
             
        } 
    }>

<Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
  <HomePageCard title={"Tic Tac Toe"} subTitle={"Two Players"} image={Tic_Tac_Toe} link={"/tic-tac-toe"}/> </Grid>

<Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
  <HomePageCard title={"Tic Tac Toe"} subTitle={"With Computer"} image={Tic_Tac_Toe_With_PC} link={"/tic-tac-toe/computer"}/> </Grid>

<Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
  <HomePageCard  title={"Unit Convertor"} subTitle={"Unit Conversion"} image={Unit_Convertor} link={'/unit-convertor'}/> </Grid>


</Grid>
  </div>
 )};

export default Home;
