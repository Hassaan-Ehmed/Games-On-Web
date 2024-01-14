import React from "react";
import gamer from '../images/gamer.jpg'
import MediaControlCard from "../MUI-Playground";
const Home = () => {
 return (
  <div style={{zIndex:1}}>

<img src={gamer} alt=""   style={{


height:"100vh",
width:"100%",
objectFit:"cover",
position:"absolute",
 zIndex:-1

}}/>

<MediaControlCard/>

  </div>
 )};

export default Home;
