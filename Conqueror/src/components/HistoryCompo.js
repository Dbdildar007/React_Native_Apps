import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image } from 'react-native'
import Micon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Oicon from 'react-native-vector-icons/Octicons'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width;

const HistoryCompo = () => {
 const navigation = useNavigation();

  /* navigation.push('Movie', item)}*/
  return (
    <View style={{flex: 1, backgroundColor: 'white', elevation: 10,shadowColor:'black',justifyContent: 'flex-start', marginTop: 5, marginBottom: 8, width: width * 0.94, height: height * 0.20, borderRadius: 15 }}>
      <TouchableOpacity onPress={()=>navigation.navigate('contest')}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.025, alignItems: 'center', backgroundColor: '#ebf1f5', width: width * 0.93, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
        <View style={{ flexDirection: 'row', marginStart: 6 }}>
          <Image style={{ height: height * 0.020, width: width * 0.050 }} source={require('../assets/map.png')} />
          <Text style={{ paddingStart: 7, fontWeight: 'bold' }}>ARENA</Text>
        </View>
        <Text >SQUAD</Text>
        <View style={{flexDirection:'row',alignItems:'center',marginEnd:10}}>
          <Micon name ='settings' size={17}/>
          <Text style={{paddingStart:2}}>TTP</Text>
        </View>
      </View>

      
      <View style={{ justifyContent: 'center',flexDirection:'row', alignItems: 'center',marginTop:5}}>
        <Text style={{paddingEnd:5}}>Date</Text>
        <Text>(time)</Text>
      </View>


      <View style={{ marginTop: 5, flexDirection: 'row', marginStart: 10, marginEnd: 10, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>

        <Image style={{ height: height * 0.080, width: width * 0.23, borderRadius: 20 }} source={require('../assets/squad.png')} />
        <Image style={{ height: height * 0.040, width: width * 0.34, borderRadius: 20 }} source={require('../assets/gun.jpg')} />
        <Image style={{ height: height * 0.080, width: width * 0.23, borderRadius: 20 }} source={require('../assets/squad.png')} />
      </View>



      <View style={{borderBottomRightRadius:10,borderBottomStartRadius:15,alignItems:'center',flexDirection:'row',marginTop:28,justifyContent:'space-between',backgroundColor:'white',borderTopWidth:0.2,borderTopColor:'grey'}}>

<View style={{flexDirection:'row'}}>
<Text style={{paddingStart:15,fontStyle:'italic'}}>Winnigs:</Text>
<Text style={{paddingStart:10,color:'#22CD22',fontWeight:'bold'}}>50 ₹</Text>

</View>

        <View style={{flexDirection:'row',marginEnd:15,alignItems:'center'}}>
            <Oicon  name ='issue-closed' color='#22CD22' size={18}/>
            <Text style={{paddingStart:5,color:'#22CD22',fontWeight:'bold'}}>Paid out</Text>
        </View>
       
      </View>
      </TouchableOpacity>
    </View>
  )
}
export default HistoryCompo;



