
import React from 'react'
import {useState,useRef} from 'react'
import { View, Text, Dimensions,FlatList,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import Matches from '../components/Matches';
import TopModel from '../components/TopModel';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const Home = ({navigation})=> {
    const [data,setdata] = useState([1,2,3,4,5,6]);
    let childRef = useRef(null)
    return (
        <View style={{ flex: 1 }}>
            <TopModel childRef ={childRef}/>

             <View style={{ backgroundColor: 'black', flexDirection: 'row', height: height * 0.062, justifyContent: 'space-between', alignItems: 'center' }}>

           <View style={{flexDirection:'row',marginStart:15,alignItems:"center"}}>
<TouchableOpacity
onPress={()=> navigation.openDrawer()}> 

           <Image  style={{width:width*0.094,height:height*0.044,marginEnd:20}} source={require('../assets/human.png')}/>
           </TouchableOpacity>

            <Image
                style={{ height: height * 0.05, width: width * 0.10}}
                source={require('../assets/B2.png')} />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingStart: 2,paddingTop:10 }}>CONQUEROR</Text>
            </View>
            
            
        <TouchableOpacity onPress={() =>childRef.current.focusInput()}>
            <View style={{borderWidth:1,borderColor:'white',flexDirection:'row',borderRadius:8,backgroundColor:'transparent',marginEnd:9}}>
            <MIcon name = 'currency-rupee' size={18} color='white' style={{paddingTop:4}}/>
            <Text style={{color: 'white',fontSize:17,fontWeight:'bold',paddingEnd:3}}>99</Text>
            <Icon name = 'wallet-outline' size={25} color = {'white'} style={{paddingEnd:5}}/>
            </View>
            </TouchableOpacity>
        </View>
    
           
            <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
            <Text style={{fontWeight:'bold',}}>Upcoming Matches</Text>
            </View>
           
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:7,borderTopWidth:1}}>
                
                 <FlatList
                 showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={itm =>itm}
                    renderItem={(itm)=><Matches />}
                    />           
            </View>
           
        </View>
    );
}

  
export default Home;