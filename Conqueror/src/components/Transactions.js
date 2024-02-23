import React from "react";
import { View,Text,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
const heigh = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Transactions = ()=>{
    return(
        <View style={{backgroundColor:"white",flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderTopWidth:0.5,borderColor:'grey',height:heigh*0.070,width:width}}>
          
            <View style={{marginStart:18,flexDirection:'row',alignItems:'center'}}>
            <Icon name ='plus-circle' size={30} color ='green'/>

            <View style={{marginStart:8}}>
                <Text style={{fontSize:20,fontStyle:'italic',fontWeight:'bold'}}>name of third party</Text>
                <Text>date and time</Text>
            </View>
            </View>

          <View style={{flexDirection:'row',marginEnd:15}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>+RS</Text>
            <Text style={{paddingStart:5,fontWeight:'bold',fontSize:18}}>340</Text>
          </View>
            
        </View>
    )
}
export default Transactions;