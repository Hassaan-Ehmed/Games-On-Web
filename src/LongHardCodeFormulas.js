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

   const res = number * 1
   return res
  }
  else if(subUnit1=== "km/h" && SubUnit2 === "mile/h"){
      const res = number / 1.609
     return res
  }
  else if(subUnit1=== "km/h" && SubUnit2 === "nautical mile"){
    
      const res = number / 1.852

     return res
  }

  // (mile/h) ke liye

 else if(subUnit1=== "mile/h" && SubUnit2 === "km/h"){

   const res = number * 1.609
   return res
  }
  else if(subUnit1=== "mile/h" && SubUnit2 === "mile/h"){
    
      const res = number  * 1
     return res
  }
  else if(subUnit1=== "mile/h" && SubUnit2 === "nautical mile"){
    
      const res = number /  1.151
     return res
  }
  //  12354684610
  // 1,235,468,460
  
  // (nautical mile [Knot]) ke liye

  else if(subUnit1=== "nautical mile" && SubUnit2 === "km/h"){

    const res = number * 1.852
    return res
   }
   else if(subUnit1=== "nautical mile" && SubUnit2 === "mile/h"){
     
       const res = number  * 1.151
      return res
   }
   else if(subUnit1=== "nautical mile" && SubUnit2 === "nautical mile"){
     
       const res = number * 1
      return res
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