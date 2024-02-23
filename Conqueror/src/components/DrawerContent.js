import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    DrawerContentScrollView,
    DrawerItem,

  } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
export default function DrawerContent(props){


         return(
            <View style ={styles.container}>
            <DrawerContentScrollView {...props}>

            <TouchableOpacity style ={{backgroundColor:'transparent',borderBottomWidth:0.5,borderBottomColor:'grey'}}>
           <View style = {{flexDirection:'row', alignItems:'center',
                               paddingLeft:20,paddingVertical:10}}>

                        <Image source = {require('../assets/human.png')}
                        style={{height:height*0.070,width:width*0.15}}/>        
               

               <View style ={{marginLeft:10}}>
                   <Text style ={{fontWeight:'bold',color:'red',fontSize:18 }} >John Mark</Text>
                   <Text style ={{color:'red',fontSize:14}} > TeamName223</Text>
               </View>
               <Icon name = 'arrow-forward-ios' size = {24} style={{paddingStart:60}}/>
           </View>
          
       </TouchableOpacity>
       
      
       <TouchableOpacity style={{width:width*.63,elevation:10,height:height*0.050,flexDirection:'row',borderRadius:10,justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff0f5',marginHorizontal:10,marginTop:10}}>
        <View style={{flexDirection:'row',alignItems:"center",marginStart:10}}>
            <Icon name = 'account-balance-wallet' size = {30}/>
            <Text style={{paddingStart:5,color:'black'}}>My Balance</Text>
        </View>
        <Text style={{paddingEnd:10,fontSize:16,fontWeight:'bold'}}> ₹1330</Text>
       </TouchableOpacity>
    


<TouchableOpacity style={{borderBottomEndRadius:10,borderBottomStartRadius:10,width:width*.53,elevation:10,height:height*0.040,justifyContent:'center',alignItems:'center',backgroundColor:'#f0fff0',marginHorizontal:30}}>
        <Text style={{fontStyle:'italic',fontWeight:'bold'}} >ADD CASH</Text>
        </TouchableOpacity>


     

           <DrawerItem 
               label = "Refer & Earn" onPress={()=>console.log('share')}
               icon = {({color,size})=>(
                   <Icon 
                       name = "send-to-mobile"
                       color ={color}
                       size ={size}
                   />
               )}
           />
           
           <DrawerItem 
               label = "My Info & Settings" onPress={()=>console.log('share')}
               icon = {({color,size})=>(
                   <Icon 
                       name = "settings-applications"
                       color ={color}
                       size ={size}
                   />
               )}
           />
           <View style={{borderWidth:10,borderRadius:15,borderColor:'#f0fff0'}}>

           </View>



           <DrawerItem 
               label = "How to Play"
               icon = {({color,size})=>(
                   <Icon 
                       name = "videogame-asset"
                       color ={color}
                       size ={size}
                   />
               )}
           />



       <DrawerItem 
               label = "Help & Support"
               icon = {({color,size})=>(
                   <Icon 
                       name = "contact-phone"
                       color ={color}
                       size ={size}
                   />
               )}
           />



   <DrawerItem 
               label = "More"
               icon = {({color,size})=>(
                   <Icon 
                 
                       name = "more"
                       color ={color}
                       size ={size}
                   />
               )}
           />





  <View style ={{borderTopWidth:1, borderTopColor:'grey'}}>
       <Text style ={styles.preferences}>Preferences</Text>

       <View style ={styles.switchText}>
           <Text style ={styles.darkthemeText}>Dark Theme</Text>
           <View style ={{ paddingRight:10}}>
                   <Switch 
                       trackColor = {{false: "#767577",true : "#81b0ff"}}
                       thumbColor = "#f4f3f4"
                   />
           </View>
       </View>

  </View>         




           </DrawerContentScrollView>  

           
           <DrawerItem 
            onPress ={()=>console.log("logout")} 
               label = "Sign Out"
               icon = {({color,size})=>(
                   <Icon 
                       name = "logout"
                       color ={color}
                       size ={size}
                   />
               )}
           />
         
        </View>
    )
}


         


     const styles = StyleSheet.create({
        container:{
            flex:1
        },

    

        preferences:{
            fontSize: 16,
            color:'grey',
             paddingTop:10,
             paddingLeft:20,
        },

        switchText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10
        },
        darkthemeText:{
            fontSize: 16,
            color:'grey',
             paddingTop:10,
             paddingLeft:0,
             fontWeight:"bold"
        }
        
    })