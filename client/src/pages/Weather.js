import React from "react";
// import { InlineWidget } from "react-calendly";
const url = "https://www.windy.com/?47.686,-122.299,5";

const Weather = () => {
    return (
      <div 
      // className='card-wrapper'
      onClick={() => window.open(url, '_blank')}  
    >
    </div>
    );
  };
  
export default Weather;