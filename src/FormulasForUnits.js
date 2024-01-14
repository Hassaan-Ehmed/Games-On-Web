var convert  = require('convert-units');

function MassWeight(){

}

function Area(){


}

function Length(){

}
function Speed(conversionInfo){

  const {subUnit1, SubUnit2,number} = conversionInfo;



// (km/h) ke liye 
  if(subUnit1=== "km/h" && SubUnit2 === "km/h"){

   return  convert(number).from('km/h').to('km/h');
  }
  else if(subUnit1=== "km/h" && SubUnit2 === "mile/h"){

      return  convert(number).from('km/h').to('m/h');
  }
  else if(subUnit1=== "km/h" && SubUnit2 === "nautical mile"){
    
      return  convert(number).from('km/h').to('knot');

  }

  // (mile/h) ke liye

 else if(subUnit1=== "mile/h" && SubUnit2 === "km/h"){

    return  convert(number).from('m/h').to('km/h');
  }
  else if(subUnit1=== "mile/h" && SubUnit2 === "mile/h"){
    
    return  convert(number).from('m/h').to('m/h');
  }
  else if(subUnit1=== "mile/h" && SubUnit2 === "nautical mile"){
    
    return  convert(number).from('m/h').to('knot');

   
  }

  
  // (nautical mile [Knot]) ke liye

  else if(subUnit1=== "nautical mile" && SubUnit2 === "km/h"){

    return  convert(number).from('knot').to('km/h');
   }
   else if(subUnit1=== "nautical mile" && SubUnit2 === "mile/h"){
     
    return  convert(number).from('knot').to('m/h');
   }
   else if(subUnit1=== "nautical mile" && SubUnit2 === "nautical mile"){
     
    return  convert(number).from('knot').to('knot');
   }


}


function Temprature(conversionInfo){

  const {subUnit1, SubUnit2,number} = conversionInfo;


// (0C) ke liye 
  if(subUnit1=== "°C" && SubUnit2 === "°C"){

   const res = number * 1
   return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "°F"){
      const res = (number * 9/5 ) + 32
     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "K"){
    
      const res = number +  273.15

     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "R"){
    
      const res = number * 9/5 + 491.67

     return res
  }
// (0C) ke liye 
  if(subUnit1=== "°C" && SubUnit2 === "°C"){

   const res = number * 1
   return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "°F"){
      const res = (number * 9/5 ) + 32
     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "K"){
    
      const res = number +  273.15

     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "R"){
    
      const res = number * 9/5 + 491.67

     return res
  }
// (0C) ke liye 
  if(subUnit1=== "°C" && SubUnit2 === "°C"){

   const res = number * 1
   return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "°F"){
      const res = (number * 9/5 ) + 32
     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "K"){
    
      const res = number +  273.15

     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "R"){
    
      const res = number * 9/5 + 491.67

     return res
  }
// (°C) ke liye 
  if(subUnit1=== "°C" && SubUnit2 === "°C"){

   const res = number * 1
   return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "°F"){
      const res = (number * 9/5 ) + 32
     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "K"){
    
      const res = number +  273.15

     return res
  }
  else if(subUnit1=== "°C" && SubUnit2 === "R"){
    
      const res = number * 9/5 + 491.67

     return res
  }


}
function Time(){

}
function Volume(){

}
export {MassWeight,Area,Length,Speed,Temprature,Time,Volume}