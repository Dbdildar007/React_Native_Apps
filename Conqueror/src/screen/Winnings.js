import React from "react";
import {useState} from 'react'
import {View,Text,Dimensions} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import WinningData from "../components/WinningData";

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Winnings = ()=> {
    const [data,setdata] = useState([1,2,3,4,5,6,7,8]);
    return (
      <View style={{ flex: 1}}>
       
       
        <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{backgroundColor:'white',height:height*0.050}}></View>}
        ListHeaderComponent ={<HeaderCom/>}
        data={data}
        keyExtractor={item => item}
        renderItem={(item)=><WinningData item = {item}/>}
        />
        
      </View>
    );
  }

 const HeaderCom = ()=>{
    return(
        <View style={{}}>
            <View style={{height:height*0.040,justifyContent:'center',alignItems:'flex-start',marginVertical:1.5,backgroundColor:'white'}}>
            <Text style={{paddingStart:13}}>Be the first in your Enviroment to join this contest.</Text>
            </View>
            
            <View style={{height:height*0.040,justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginVertical:1.5,backgroundColor:'white'}}>
            <Text style={{paddingStart:15}}>Rank</Text>
            <Text style={{paddingEnd:15}}>Winnings</Text>
            </View>
        </View>
    )
 }
  export default Winnings;
  