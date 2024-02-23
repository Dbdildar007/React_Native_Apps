import React from 'react'
import { View, Text, Dimensions,Image } from 'react-native'


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const LeaderBoardData = ({ item }) => {
    return (
        <View style={{backgroundColor:'white',marginVertical:2,justifyContent:'space-between',flexDirection: 'row', height: height * 0.050,alignItems:'center'}}>
        
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{borderRadius:50,borderColor:'red',borderWidth:2,marginStart:12,flexDirection:'row'}}>
            <Image style={{height:height*0.0415,width:width*0.090}} source={require('../assets/human.png')}/>
        </View>
        <Text style={{paddingStart:7}}>name of the condidate.</Text>
        </View>
        </View>
    )
}
export default LeaderBoardData;