import { useState,useRef,useEffect} from "react";
import React from "react";
import { View, Text, FlatList, Image,Dimensions,Pressable,TouchableOpacity, StatusBar } from "react-native";
import MoviesShimmer from "../simmer/MoviesShimmer";
import Icon from 'react-native-vector-icons/FontAwesome5'

import {  useRoute } from '@react-navigation/native'
import { fetchCategoriesMovies} from '../api/Movie_Api';

const {width,height} = Dimensions.get('screen')

const CategoriesMovies = ({navigation}) => {
    
    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]);

    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);
    const {params: title} = useRoute();
  
     let key  = title.split(' ')[0];

  
   useEffect(()=>{
    setLoading(true);
    getCategoriesMovies(key);

  },[title]);

  const getCategoriesMovies = async key=>{
    const ress = await fetchCategoriesMovies(key);
    //console.log(data.result.length);
    

   // console.log(ress.result);
   if(ress && ress.result) setMovie(ress.result);
     setLoading(false)
  }


  const handleClick = item=>{
    navigation.navigate('Details',item);
    //console.log('Details',item.Name);
}

    return (
        <View style={{ flex: 1,justifyContent:'center',backgroundColor:'black'}}>
            
            <View style={{elevation:10,shadowColor:'white',height:height*0.054,borderBottomRightRadius:15,borderBottomLeftRadius:15,backgroundColor:'black',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <Icon name='arrow-left' size={30} color='white' style={{paddingStart:15}} onPress={()=>navigation.goBack()}/>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{title}</Text>
                <Icon name = 'search' size ={30} color='white' style={{paddingEnd:15}} onPress={()=>navigation.navigate('Search')}/>
            </View>

            {
        loading? (
          <MoviesShimmer />
        ):(  

            <FlatList
                data={movie}
                ListHeaderComponent={<View style={{marginTop:15}}></View>}    
                ListFooterComponent={<View style={{marginBottom:20}}></View>}  
                numColumns={3}
                keyExtractor={(item, index) => String(index)}
                renderItem={(item) => <Content item={item} handleClick ={handleClick}/>}
            />
        )}
        </View>
    )
}
export default CategoriesMovies;


const Content = ({ item,handleClick}) => {
  
    return (
        <TouchableOpacity onPress={()=>handleClick(item.item)} style={{ flex: 1,justifyContent:'space-between',alignItems:'center',marginHorizontal:15,marginVertical:7}}>
            <Image source={{uri:item.item.poster_url}} style={{width:width*0.3,height:height*0.2,borderRadius:15}}/>
            <Icon name ='play' size={30} color='white' style={{position:'absolute',marginTop:height*0.075}}/>
        </TouchableOpacity>
    )
}