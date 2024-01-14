import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { units, unit_types } from "../unit-convertor-data";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import convert from "convert-units";
// var convert = require('convert-units')

// import convert from 'convert-units';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function UnitConvertor() {
  const [mainUnit, setMainUnit] = React.useState("");
  const [currentSubUnit, setCurrentSubUnit] = React.useState([]);
  const [userInput, setUserInput] = React.useState("");
  const [fromUnit, setFromUnit] = React.useState(null);
  const [toUnit, setToUnit] = React.useState(null);
  const [result,setResult] = React.useState(null);
  const [error,setError] = React.useState(false)
  const [fieldError,setFieldError] = React.useState(false)


React.useEffect(()=>(setResult(""),setUserInput("")),[fromUnit,toUnit]);


  const numberRegex = /^[0-9]+$/;

  const _handleUserInput = (e) => {
    const userEnteredValue = e.target.value;

    if (numberRegex.test(userEnteredValue) || userEnteredValue === "") {
      
      setUserInput(userEnteredValue);

    }

  };

  const _handleBackSpace = (e) => {
    if (e.key === "Backspace") {
      setUserInput((prevInput) => prevInput.slice(0, -1));
    }
    

  };

  const _handleChangeMain = (value) => {

if(value.label){
  setFieldError(false)
}

    setMainUnit(JSON.stringify(value.label));

    let getSelectedUnitTypes = unit_types.filter(
      (typeS, i) => typeS.unit_type === value?.value
    );

    // let getSubUnitNames = getSelectedUnitTypes.filter(() => {
    //   if (true) return true;
    // });
    console.log(getSelectedUnitTypes);
    setCurrentSubUnit(getSelectedUnitTypes);


    setFromUnit("")
    setToUnit("")
    setFromUnit(getSelectedUnitTypes[0]);
    setToUnit(getSelectedUnitTypes[1]);

  };



  const _handleGetResult = () => {


    if(mainUnit === "" && currentSubUnit.length == 0){
      setFieldError(true)
    }

    if((mainUnit !== "") && (currentSubUnit.length > 0) && (userInput === "")){
      setError(true)
    }
    else if(userInput !== ""){
    
      setError(false)
    
  let rawvalue =  convert(userInput).from(fromUnit.value).to(toUnit.value) 

   setResult( new Intl.NumberFormat('en-US').format(rawvalue) );

    }
   
  };
  return (
    <>
      <div
        style={{ display: "grid", placeItems: "center", marginTop: "100px" }}
      >
        <div
          style={{
            height: "70vh",
            // backgroundColor: "#3344B5",
            border: "none",
            borderRadius: 2,
          }}
        >
          <Card
            sx={{
              minWidth: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            
            }}
            elevation={4}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#107C10",
                  mb: 2,
                }}
              >
                Unit Convertor
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={units}
                sx={{ width: 380 }}
                renderInput={(params) => (
                  <TextField {...params} label="Units" />
                )}
                onChange={(e, value) => _handleChangeMain(value)}
                onKeyDown={_handleBackSpace}
              />

              <Box
                sx={{
                  mt: 3,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={currentSubUnit}
                  value={fromUnit}
                  sx={{ width: 180 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sub units" />
                  )}
                  onChange={(e, value) => {
                    setFromUnit(value); //
                  }}
                />

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={currentSubUnit}
                  value={toUnit}
                  sx={{ width: 180 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sub units" />
                  )}
                  onChange={(e, value) => {
                    setToUnit(value);
                  }}
                />
              </Box>

              <Box
                sx={{
                  mt: 1.5,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                <TextField
                  // label="Size"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  value={userInput}
                  size="small"
                  sx={{ width: 180 }}
                  // defaultValue={userInput}
                  onChange={_handleUserInput}
                />
                <TextField
                  size="small"
                  sx={{ width: 180 }}
                  id="outlined-read-only-in"
                  value={result}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>



              <Box
                sx={{
                  mt: 3,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 6,
                }}
              >

              <Button variant="contained" onClick={_handleGetResult}>Convert Unit</Button>
            
          {error ? <span style={{color:"red",fontSize:"21px",fontWeight:"bold"}}>Invalid Input</span> : fieldError ? <span style={{color:"red",fontSize:"21px",fontWeight:"bold"}}>Please Select Field</span>:""}  
              </Box>
            
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
