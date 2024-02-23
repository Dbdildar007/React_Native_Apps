import React from "react";
import { View, Text, Dimensions, Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Ficon from 'react-native-vector-icons/Fontisto'
import Fficon from 'react-native-vector-icons/Foundation'
import Material from 'react-native-vector-icons/MaterialIcons'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const MyPlace = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{backgroundColor:'red',height:height * 0.3,elevation:10,borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: height * 0.12, width: width * 0.26 }} source={require('../assets/human.png')} />
                    <Text style={{ fontSize: 18, paddingTop: 5, fontWeight: 'bold', color: 'white' }}>Username</Text>
                    <Text>1234567890</Text>
                </View>

                <View style={{ flexDirection:'row', marginTop:10,justifyContent:'space-between',alignItems:'center',marginStart:15,marginEnd:15}}>
                   
                    <View style={{height:height*0.078,width:width*0.3,justifyContent:'flex-start',alignItems:'center',backgroundColor:'white',borderRadius:10,elevation:10}}>
                    <Text style={{color:'black',paddingTop:5}}>Total kill</Text>
                    <Text style={{color:'black',fontWeight:'bold',paddingTop:9}}>30</Text>
                    </View>

                    <View style={{height:height*0.078,width:width*0.3,justifyContent:'flex-start',alignItems:'center',backgroundColor:'white',borderRadius:10,elevation:10}}>
                    <Text style={{color:'black',paddingTop:5}}>Contest join</Text>
                    <Text style={{color:'black',fontWeight:'bold',paddingTop:9}}>10</Text>
                    </View>

                    <View style={{height:height*0.078,width:width*0.3,justifyContent:'flex-start',alignItems:'center',backgroundColor:'white',borderRadius:10,elevation:10}}>
                    <Text style={{color:'black',paddingTop:5}}>Win %</Text>
                    <Text style={{color:'black',fontWeight:'bold',paddingTop:9}}>60%</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20}}>
            </View>

            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Icon name = 'note' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Rules & Regulations to Join Match</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Ficon name = 'share-a' color='red' size ={23} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Refer & Earn money</Text>
            </TouchableOpacity>
        

            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Ficon name = 'person' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Edit profile</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Material name = 'question-mark' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>How To Play</Text>
            </TouchableOpacity>
        

            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Fficon name = 'play-video' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Match result videos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Icon name = 'question' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>About us</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Material name = 'support-agent' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Contact & Support</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Material name = 'privacy-tip' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Privacy & Policy</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{height:height*0.050,flexDirection:'row',backgroundColor:'#F8F8FF',marginHorizontal:15,marginTop:10,borderRadius:10,justifyContent:'flex-start',alignItems:'center',elevation:10}}>
            <Material name = 'feedback' color='red' size ={25} style={{paddingStart:12}}/>
            <Text style={{paddingStart:10,fontWeight:'bold',fontStyle:'italic'}}>Feedback</Text>
            </TouchableOpacity>
        
        </View>
    )
}
export default MyPlace;