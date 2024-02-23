import React from "react";
import {useState} from 'react'
import {View,Text,Dimensions} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import LeaderBoardData from "../components/LeaderBoardData";

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const LeaderBoard = ()=> {
    const [data,setdata] = useState([1,2,3,4,5,6,7,8,9]);
    return (
      <View style={{ flex: 1}}>
       
       <View style={{height:height*0.040,justifyContent:'center',alignItems:'flex-start',marginVertical:1.5,backgroundColor:'white'}}>
            <Text style={{paddingStart:13}}>Be the first in your Enviroment to join this contest.</Text>
            </View>
       
            <View style={{height:height*0.040,justifyContent:'center',alignItems:'flex-start',marginVertical:1.5,backgroundColor:'white'}}>
            <Text style={{paddingStart:13}}>All Teams <Text>({data.length})</Text></Text>
            </View>

        <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{backgroundColor:'white',height:height*0.050}}></View>}
        
        data={data}
        keyExtractor={item => item}
        renderItem={(item)=><LeaderBoardData item = {item}/>}
        />
        
      </View>
    );
  }

 export default LeaderBoard;
  