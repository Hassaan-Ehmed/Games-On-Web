import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Link } from 'react-router-dom';


export default function HomePageCard({title,subTitle,image,link}) {
  const theme = useTheme();

  return (

 
    <Card sx={{ display: 'flex', justifyContent:"space-around",background: 'rgba(255, 255, 255, 0.17)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3.9px)',
    WebkitBackdropFilter: 'blur(3.9px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',backdropFilter:"blur(10px)"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{color:"white"}}>
           {title}
          </Typography>
          <Typography variant="subtitle1" color="text.main" component="div" >
            {subTitle}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography sx={{fontWeight:"bold",color:"lightgray"}}>
            Let's Try
          </Typography>
          <IconButton aria-label="play/pause" sx={{
            ":hover":{
                color:"white"
            }
          }} >
            <Link to={link}>
            <PlayArrowIcon sx={{ height: 38, width: 38, color:"white",":hover":{
                color:"#107C10"
            }}} />
            </Link>
          </IconButton>
         
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 170}}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
   
  );
}