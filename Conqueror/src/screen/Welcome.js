import React, { useState, useEffect } from "react";
import { View,Text, StyleSheet,Dimensions, TouchableOpacity, Image } from "react-native";
import Slideshow from "react-native-image-slider-show";
import {LinearGradient} from 'react-native-linear-gradient'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width;
function App({navigation}) {
  return (
    <View style={{backgroundColor:'black',height:height}}>
     
       <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
       <Image 
       style={{height:height*0.15,width:width*0.13}}
       source={require('../assets/B.png')}/>
       <Text style={{color:'white',fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>CONQUEROR</Text>
       </View>
        <ImageSlider/>

      
    <View style={{marginTop:height*0.080,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Register')}
        style={{elevation:20,shadowColor:'white',shadowOffset:10,shadowOpacity:1,alignItems:'center',justifyContent:'center',backgroundColor:'white',width:width*0.80,borderRadius:15,height:height*0.050}}>
            <Text style={{fontSize:25,fontWeight:'bold',fontStyle:'italic'}}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:15,marginEnd:15,marginTop:40}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('CodeScreen')} 
        style={{alignItems:'flex-start'}}>
        <Text style={{color:'white'}}>Invite by a frined?</Text>
         <Text style={{color:'white',fontWeight:'bold'}}>Enter Code</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('Login')}
        style={{alignItems:'flex-end'}}>
        <Text style={{color:'white'}}>Already an user?</Text>
         <Text style={{color:'white',fontWeight:'bold',paddingEnd:7}}>Log in</Text>
        </TouchableOpacity>
      </View>
     
</View>
    
    
  );
}


const dataSource = [
  {
    title: 'Welcome to Conqueror',
    caption: 'Ready to start winning money just by killing  swap left to learn about this app',
    url:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
  },
  {
    title:'Select A Match',
    caption:'Choose a upcoming match that u want to play.',
    url:
      "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"
  },
  {
    title: 'Join A contest',
    caption: 'Compete with other player to get big rewards',
    url:
      "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg"
  },
  {
    title: 'Make a Team',
    caption: 'Create your Team using pubg id',
    url:
      "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg"
  }
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 2000);

    return () => clearInterval(toggle);
  });

  return (
    <View >

      <Slideshow position={position} dataSource={dataSource}
      arrowSize={0}
      height={height*0.55}
      indicatorSize = {0}
      titleStyle ={{color:'white',fontSize:30,fontWeight:'bold',alignSelf:'center'}}
      captionStyle={{alignSelf:'center',fontSize:17,color:'black',justifyContent:'center',textAlign:'center',fontWeight:'bold'}}
      />
      <LinearGradient 
colors={['rgba(2, 23, 1, 0)', 'rgba(0,0, 0, 1)']} 
style={{position:'absolute',height:height,top:0,bottom:0,width:width}}
start={{ x: 0.5, y: 0.3 }}
end={{ x: 0.5, y: 0}}>
</LinearGradient>

     


    </View>
    
  );
};



export default App;
