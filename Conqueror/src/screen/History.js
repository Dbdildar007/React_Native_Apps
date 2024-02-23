
import React from 'react'
import {useState,useRef} from 'react'
import { View, Text, Dimensions,FlatList,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import HistoryCompo from '../components/HistoryCompo'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const Home = ({navigation})=> {
    const [data,setdata] = useState([1,2,3,4]);
    
    return (
        <View style={{ flex: 1,backgroundColor:'#E9DCC9' }}>
           
            <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>Contest History</Text>
            </View>
            
            <View style={{flexDirection:'row',marginStart:20,marginTop:10,alignItems:'baseline'}}>
                <Text style={{fontWeight:'bold',fontSize:22,color:'black'}}>₹2434</Text>

                <View style={{marginStart:13,justifyContent:"center",alignItems:'center'}}>
               
               <TouchableOpacity>
             <Icon name = 'add-circle' size ={23} color='#22CD22'/>
             </TouchableOpacity>
                <Text style>Deposit</Text>
                </View>
            </View>

            <View style={{backgroundColor:'white',marginTop:5,height:height*0.040,width:width*0.96,marginStart:width*0.02,borderRadius:6,elevation:10,justifyContent:'space-between',alignItems:"center",flexDirection:'row'}}>
            <Text style={{paddingStart:10}}>Bets Count.</Text>
             <Text style={{paddingEnd:10}}>9 bets (117 ₹)</Text>
            </View>
           
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:7,borderTopWidth:0}}>
                
                 <FlatList
                 showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={itm =>itm}
                    renderItem={(itm)=><HistoryCompo/>}
                    />           
            </View>
           
        </View>
    );
}

  
export default Home;