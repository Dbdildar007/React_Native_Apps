import { View, Text, Image,StyleSheet, TouchableWithoutFeedback, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useRoute } from '@react-navigation/native'

var { width, height } = Dimensions.get('window');

export default function MovieLinst({ data,title,handleClick}) {
    const navigation = useNavigation();
   
    
    return(
        <View style={{flex:1}}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,marginHorizontal:15}}>
            <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>{title}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('CategoriesMovies',title)}>
            <Icon name = 'keyboard-double-arrow-right' size ={20} color='white'/>
            </TouchableOpacity>
            </View>

            <FlatList
            style={{marginTop:10,marginHorizontal:15}}
            data={data}
            keyExtractor={(item, index) => String(index)}
            horizontal={true}
            renderItem={(item)=>
                <TouchableWithoutFeedback onPress={()=>handleClick(item.item)}>
                <Image 
                    source={{uri:item.item.poster_url}}style={{height:height*0.15,width:width*0.3,marginStart:5,marginEnd:5,borderRadius:12,resizeMode:'stretch'}}
                />
            </TouchableWithoutFeedback>
            }
            />
        </View>
    )

}



