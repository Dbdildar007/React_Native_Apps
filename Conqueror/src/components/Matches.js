import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image } from 'react-native'
import Micon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width;
const Matches = () => {
 const navigation = useNavigation();

  /* navigation.push('Movie', item)}*/
  return (
    <View style={{ borderWidth:2,borderColor:'green',flex: 1, backgroundColor: 'white', elevation: 10,shadowColor:'black',justifyContent: 'flex-start', marginTop: 5, marginBottom: 8, width: width * 0.94, height: height * 0.20, borderRadius: 15 }}>
      <TouchableOpacity onPress={()=>navigation.navigate('contest')}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.025, alignItems: 'center', backgroundColor: '#ebf1f5', width: width * 0.93, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
        <View style={{ flexDirection: 'row', marginStart: 6 }}>
          <Image style={{ height: height * 0.020, width: width * 0.050 }} source={require('../assets/map.png')} />
          <Text style={{ paddingStart: 7, fontWeight: 'bold' }}>ARENA</Text>
        </View>


        <View style={{ flexDirection: 'row', marginEnd: 7 }}>
          <Image style={{ height: height * 0.020, width: width * 0.050 }} source={require('../assets/notification.png')} />
        </View>
      </View>


      <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#FF0000', borderRadius: 5, marginEnd: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, paddingStart: 2, paddingEnd: 2 }}>M</Text>
        </View>
        <View style={{ backgroundColor: '#FF0000', borderRadius: 5, marginEnd: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, paddingStart: 2, paddingEnd: 2 }}>S</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>time</Text>
      </View>


      <View style={{ marginTop: 5, flexDirection: 'row', marginStart: 10, marginEnd: 10, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>

        <Image style={{ height: height * 0.080, width: width * 0.23, borderRadius: 20 }} source={require('../assets/squad.png')} />
        <Image style={{ height: height * 0.040, width: width * 0.34, borderRadius: 20 }} source={require('../assets/gun.jpg')} />
        <Image style={{ height: height * 0.080, width: width * 0.23, borderRadius: 20 }} source={require('../assets/squad.png')} />
      </View>

      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#ebf1f5',borderRadius:10,marginHorizontal:10}}>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:3}}>
        <Text style={{fontSize:17,paddingStart:8}}>Huge</Text>
        <Micon name = 'currency-rupee' size = {15} style={{paddingStart:5,paddingTop:5}}/>
        <Text style={{fontSize:17,paddingStart:2,fontWeight:'bold'}}>300</Text>
        </View>

       
        <Text >SQUAD</Text>
        <View style={{flexDirection:'row',alignItems:'center',marginEnd:5}}>
          <Micon name ='settings' size={17}/>
          <Text style={{paddingStart:2}}>TTP</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}
export default Matches;



