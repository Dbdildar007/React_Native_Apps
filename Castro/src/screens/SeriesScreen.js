import React from "react";
import { View,Text,Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import TopTab from "../components/Tabs";
const {width,height} = Dimensions.get('screen');


const SeriesScreen = ({navigation})=>{
    return(
        <View style={{ flex: 1,justifyContent:'flex-start',backgroundColor:'black'}}>
    
            <View style={{elevation:10,marginTop:8,shadowColor:'white',height:height*0.04,backgroundColor:'black',justifyContent:'space-between',alignItems:'flex-end',flexDirection:'row'}}>
                <Icon name='arrow-left' size={30} color='white' style={{paddingStart:15}} onPress={()=>navigation.goBack()}/>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Series</Text>
                <Icon name = 'search' size ={30} color='white' style={{paddingEnd:15}} onPress={()=>navigation.navigate('Search')}/>
            </View>
            
       <TopTab/>
   
        </View>
    )
}
export default SeriesScreen;