  import React, { useState, useEffect } from "react";
  import ImageList from "@mui/material/ImageList";
  import Button from "@mui/material/Button";
  import Paper from "@mui/material/Paper";
  import IconButton from '@mui/material/IconButton'
  import ReplayIcon from "@mui/icons-material/Replay";
  import ComputerIcon from '@mui/icons-material/Computer';
  import Typography from '@mui/material/Typography'
  import { Link } from "react-router-dom";
  import imageBG from '../images/edge2edge-media-uKlneQRwaxY-unsplash.jpg';

  export default function Game() {
    const [zeroORex, set_zeroORex] = useState("O");
    const [result, setResult] = useState("");

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

        console.log(x, y, z);
        if (itemData[x] === "X" && itemData[y] === "X" && itemData[z] === "X") {
          setResult("Player X is Winner 🎉");

          set_itemData(["", "", "", "", "", "", "", "", ""]);

          set_zeroORex("X");
        } else if ( itemData[x] == "O" && itemData[y] == "O" && itemData[z] == "O" ) {
          setResult("Player O is Winner 🎉");

          set_itemData(["", "", "", "", "", "", "", "", ""]);

          set_zeroORex("X");
        } else  {
        
          const isTurnOver = itemData.every((item) => item !== "");

          console.log(isTurnOver);
          
          if (isTurnOver) {

            setResult("Match Draw ⚔️");
            
            set_itemData(["", "", "", "", "", "", "", "", ""]);

          
          }
        }
      });

    }, [itemData]);

    const _handleGameClick = (index) => {

      if (itemData[index] == "") {
        zeroORex == "X" 
          ? set_zeroORex("O")
          : zeroORex == "O"
          ? set_zeroORex("X")
          : "";

        let COPY_itemData = [...itemData];

        COPY_itemData.splice(index, 1, zeroORex);

        set_itemData([...COPY_itemData]);
      }
    };  

    const _handleRestart = () => {
      
      set_itemData(["", "", "", "", "", "", "", "", ""]);

      setResult("");
  set_zeroORex("X");

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
    backdropFilter:"blur(10px)"
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
            <h1 style={{
              fontSize:"1.8vw",
            }}>TIC TAC TOE</h1>

            <span
              style={{
                color: "green",
                fontSize: "1.7vw",
                fontWeight:"bold"
              }}
            >
              {result !== ""
                ? result
                : zeroORex == "X"
                ? `Player X Turn`
                : zeroORex == "O"
                ? `Player O Turn`
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
              to={"/tic-tac-toe/computer"}

            >
              <Button
                style={{
                  padding: "16px 20px",
                }}
                variant="outlined"
                endIcon={<ComputerIcon />}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                  variant="outlined"
                >
                  Play with Computer
                
                </Typography>
              </Button>
            </Link>
          </div>
        </Paper>

      
        <ImageList
          sx={{
            width: "30%",
            height:"86vh",
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
                height : "120px",
                 width:"96%",
                 ":hover":{
                  backgroundColor:"darkgreen"
                 }
              }}
              onClick={(e) => {
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
