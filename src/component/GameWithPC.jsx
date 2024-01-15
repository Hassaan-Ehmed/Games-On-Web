import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from '@mui/icons-material/People';
import ReplayIcon from "@mui/icons-material/Replay";
import { IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import imageBG from '../images/ella-don-0oqMvhc1ntw-unsplash.jpg';

export default function GameWithPC() {
  const [zeroORex, set_zeroORex] = useState("X");
  const [result, setResult] = useState("");
  const [waitForYourMove, setWaitForYourMove] = useState(false);

  const [itemData, set_itemData] = useState(
    // [...Array(9)]
    ["", "", "", "", "", "", "", "", ""]
  );

  const WinnerCombinationS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    WinnerCombinationS.forEach((element) => {
      let [x, y, z] = element;

      if (itemData[x] === "X" && itemData[y] === "X" && itemData[z] === "X") {
        setResult("You Winner 🎉");

        set_itemData(["", "", "", "", "", "", "", "", ""]);

        set_zeroORex("X");
      } else if (
        itemData[x] == "O" &&
        itemData[y] == "O" &&
        itemData[z] == "O"
      ) {
        setResult("Computer is Winner 🎉");

        set_itemData(["", "", "", "", "", "", "", "", ""]);

        set_zeroORex("X");
        setWaitForYourMove(true);
      } else {
        const isTurnOver = itemData.every((item) => item !== "");

        console.log(isTurnOver);

        if (isTurnOver) {
          setResult("Match Draw ⚔️");

          set_itemData(["", "", "", "", "", "", "", "", ""]);
          set_zeroORex("X");
        }
      }
    });

    if (zeroORex === "O") {
      let cMove = setTimeout(() => {
        _makeComputerMove();
      }, 1000);

      return () => clearTimeout(cMove);
    }
  }, [zeroORex, itemData]);

  const _handleGameClick = (index) => {
    if (zeroORex == "X") {
      if (itemData[index] == "") {
       
        if(zeroORex == "X"){
          set_zeroORex("O")
        }else if (zeroORex == "O"){
          set_zeroORex("X")
        }
        


        let COPY_itemData = [...itemData];

        COPY_itemData.splice(index, 1, zeroORex);

        set_itemData([...COPY_itemData]);

        setWaitForYourMove(true);
      }
    }
  };

  const _handleRestart = () => {
    set_itemData(["", "", "", "", "", "", "", "", ""]);

    setResult("");
    set_zeroORex("X");
    setWaitForYourMove(false);
  };

  const _makeComputerMove = () => {
    const emptyCells = [];

    // Get Empty Item so we place random items in it !
    for (let i = 0; i < itemData.length; i++) {
      if (itemData[i] === "") {
        emptyCells.push(i);
      }
    }

    // Means run till last turn (empty cells remaining one 1)
    if (emptyCells.length > 0) {
      let randomChoice = Math.floor(Math.random() * emptyCells.length);

      const arrayFor_RANDOM = [...itemData];

      // ! Important : in my main array assign zero in random any order but in empty cell.
      arrayFor_RANDOM[emptyCells[randomChoice]] = "O";

      set_itemData(arrayFor_RANDOM);

      setWaitForYourMove(false);
      set_zeroORex("X");
    }
  };

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      height: "100vh",
      width: "100%"
    }}
  >

    
<img src={imageBG} alt=""   style={{


height:"100vh",
width:"100%",
objectFit:"cover",
position:"absolute",
 zIndex:-1,
 top:0,
 borderRadius: '16px',
 boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
 backdropFilter: 'blur(3.9px)',
 
}}/>

      <Paper
        sx={{
          width: "100%",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          position: "realtive",
          marginTop:"6vw",

  background: 'rgba(255, 255, 255, 0.27)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(3.9px)',
  WebkitBackdropFilter: 'blur(3.9px)',
  backdropFilter:"blur(10px)",
  
}}
elevation={6}

      >

<div

style={{
              heigh: "50%",
              display: "flex",
              position: "absolute",
              left: 70,
            }}
          >
        
        <Button
         onClick={_handleRestart}
            variant="contained"
            endIcon={<ReplayIcon />}
          >
            Game restart
          </Button>
          </div>

        <div
          style={{
            height: "80%",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1  style={{
              fontSize:"1.8vw"
          }}>TIC TAC TOE</h1>

          <span
            style={{
              color: "white",
              fontSize: "1.7vw",
                fontWeight:"bold"
            }}
          >
            {result !== ""
              ? result
              : zeroORex == "X"
              ? `Your turn`
              : zeroORex == "O"
              ? `Computer's Turn`
              : ""}
          </span>
        
        </div>
        <div
          style={{
            backgroundColor: "#fafafa",
            borderRadius:"5px",
            heigh: "50%",
            display: "flex",
            position: "absolute",
            right: 70,
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#107C10" }}
            to={"/tic-tac-toe"}
          >
            <Button
              style={{
                padding: "16px 20px",
              }}
              variant="outlined"
              endIcon={<PeopleIcon />}


              
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                {" "}
                Play with your Friend
              </Typography>
            </Button>
          </Link>
        </div>
      </Paper>
      <ImageList
         sx={{
          width: "30%",
          height:"86vh",
          bgcolor: "white",
          overflow:"hidden",

          
    background: 'rgba(255, 255, 255, 0.27)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3.9px)',
    WebkitBackdropFilter: 'blur(3.9px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',backdropFilter:"blur(10px)"


        }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item, i) => (
          <IconButton
            disabled={waitForYourMove}
            sx={{
              backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              borderRadius:5,
              height : "20vh",
               width:"96%",
               ":hover":{
                backgroundColor:"darkgreen"},
                ":disabled":{
                  backgroundColor:"grey",
                opacity:1}
               }
            }
            onClick={(e) => {
              setWaitForYourMove(true);
              _handleGameClick(i);
            }}
          >
            {item}
          </IconButton>
        ))}
      </ImageList>
    </div>
  );
}
