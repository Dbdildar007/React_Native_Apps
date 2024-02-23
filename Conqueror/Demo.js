import React from "react";
import {View,Text} from 'react-native'
import {useState,useEffect} from 'react'
const Demo = ()=>{
    const [days,setdays] = useState();
    const [hours,sethours] = useState();
    const [minut,setminut] = useState();
    const [sec,setsec] = useState();


const countDownDate = new Date("Wed Sep 07 2023 20:30:08 GMT+0530").getTime();
const datum = new Date("Wed Sep 07 2023 20:43:08 GMT+0530")

let timedata = datum.toLocaleTimeString();
const x = setInterval(function() {

  let now = new Date().getTime();
  const distance = countDownDate - now;
    
  // Time 
  setdays(Math.floor(distance / (1000 * 60 * 60 * 24)));
  sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  setminut(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  setsec(Math.floor((distance % (1000 * 60)) / 1000));
   

  // Output the result in an element with id="demo"

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
   
  }
}, 1000);

useEffect(() => {
    
    return () => {
        clearInterval(x);
    };
},[countDownDate])


return(
    <View>
        <Text>days{days}</Text>
        <Text>hour{hours}</Text>
        <Text>minut{minut}</Text>
        <Text>second{sec}</Text>

        <Text>{timedata}</Text>
    </View>
)
}
export default Demo;
