import React from "react";
import { View, FlatList, Dimensions, Image,TouchableOpacity,Text} from "react-native";
import { useState,useEffect } from "react";
import {fetchIndianSeriesMovies} from '../api/Movie_Api';
import MoviesShimmer from "../simmer/MoviesShimmer";
const { width, height } = Dimensions.get('screen');

const Indian = ({navigation}) => {
   
        const [indinaseries, setindianseries] = useState([]);
        const [loading,setLoading] = useState(true);
    
        useEffect(()=>{
            setLoading(true)
            getIndianSeriesMovies();
            //getUpcomingMovies();
          },[]);
        
          const getIndianSeriesMovies = async ()=>{
            const ress = await fetchIndianSeriesMovies();
           // console.log('got trending'+ JSON.stringify(ress.data.result));// data.results.length)
         //console.log(ress.result.length);
           if(ress && ress.result) setindianseries(ress.result);
           setLoading(false)
          }
    
          const handleClick = item=>{
            navigation.navigate('Details',item);
            //console.log('Details',item.Name);
        }
    

    return (
        <View style={{ flex: 1,backgroundColor:'black', justifyContent: 'center', alignItems: 'center'}}>

{
        loading? (
          <MoviesShimmer />
        ):(  
            <FlatList
                data={indinaseries}
                ListFooterComponent={<View style={{height:height*0.050}}></View>}
                ListHeaderComponent={<View style={{height:height*0.010}}></View>}
                keyExtractor={(item, index) => String(index)}
                numColumns={3}
                renderItem={(item) => <Content item={item} handleClick ={handleClick}/>}
            />
        )}
        </View>
    )
}
export default Indian;


const Content = ({ item,handleClick}) => {
console.log(item)

    return (
        <TouchableOpacity onPress={()=>handleClick(item.item)} style={{backgroundColor:'black',marginHorizontal:6,marginVertical:6}}>
           <Image source={{uri:item.item.poster_url}} style={{height:height*0.2,width:width*0.30,borderRadius:15}}/>

           <View style={{backgroundColor:'green',position:'absolute',marginStart:width*0.21,justifyContent:'center',alignItems:'center',height:height*0.0450,width:width*0.10,borderRadius:30}}>
            <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>{item.item.Rating}</Text>
           </View>
        </TouchableOpacity>
      
    )
}