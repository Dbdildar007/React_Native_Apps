import React from 'react'
import { View, Text, Dimensions,Image } from 'react-native'


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const WinningData = ({ item }) => {
    return (
        <View style={{ flex:1}}>
          
        {(item.index ==1)?
        <View style={{backgroundColor:'white',marginVertical:2,justifyContent:'space-between',flexDirection: 'row', height: height * 0.050,alignItems:'center'}}>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:'red',borderTopLeftRadius:30,marginStart:2,height:height*0.050}}><Text style={{paddingStart:6}}></Text></View>

            <Image style={{ height: height * 0.030, width: width * 0.070,marginStart:5}} source={require('../assets/reward.png')} />
        

        <Text style={{paddingStart:5,fontSize:20,paddingTop:4}}>{item.index}</Text>
        </View>
        <Text style={{paddingEnd:15,fontSize:20,fontWeight:'bold'}}>2220</Text>
        </View>
        :(item.index ==2)?
        <View style={{backgroundColor:'white',marginVertical:2,justifyContent:'space-between',flexDirection: 'row', height: height * 0.050,alignItems:'center'}}>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:'red',borderTopLeftRadius:30,marginStart:2,height:height*0.050,opacity:0.5}}><Text style={{paddingStart:6}}></Text></View>

            <Image style={{ height: height * 0.030, width: width * 0.070,marginStart:5}} source={require('../assets/reward.png')} />
        

        <Text style={{paddingStart:5,fontSize:20,paddingTop:4}}>{item.index}</Text>
        </View>
        <Text style={{paddingEnd:15,fontSize:20,fontWeight:'bold'}}>2220</Text>
        </View>
        :(item.index ==3)?
        <View style={{backgroundColor:'white',marginVertical:2,justifyContent:'space-between',flexDirection: 'row', height: height * 0.050,alignItems:'center'}}>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:'red',borderTopLeftRadius:30,marginStart:2,height:height*0.050,opacity:0.3}}><Text style={{paddingStart:6}}></Text></View>

            <Image style={{ height: height * 0.030, width: width * 0.070,marginStart:5}} source={require('../assets/reward.png')} />
        

        <Text style={{paddingStart:5,fontSize:20}}>{item.index}</Text>
        </View>
        <Text style={{paddingEnd:15,fontWeight:'bold',fontSize:20}}>2220</Text>
        </View>
        :(item.index == 4)?
        <View style={{backgroundColor:'white',marginVertical:2,justifyContent:'space-between',flexDirection: 'row', height: height * 0.050,alignItems:'center'}}>
        
        <View style={{flexDirection:'row'}}>
           
        <Text style={{paddingStart:15,fontSize:20}}>#{item.index} - {item.index +6 }</Text>
        </View>
        <Text style={{paddingEnd:15,fontSize:20,fontWeight:'bold'}}>2220</Text>
        </View>
        :(item.index ==5)?
        <View style={{backgroundColor:'white',marginVertical:2,justifyContent:'space-between',flexDirection: 'row', height: height * 0.050,alignItems:'center'}}>
        
        <View style={{flexDirection:'row'}}>
        <Text style={{paddingStart:15,fontSize:20}}>#{item.index+6} - {item.index + 45}</Text>
        </View>
        <Text style={{paddingEnd:15,fontWeight:'bold',fontSize:20}}>2220</Text>
        </View>
        :null}

        </View>
    )
}
export default WinningData;