import { useState,useEffect} from "react";
import React from "react";
import { View, Text, FlatList, Image,Dimensions,Pressable,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import MoviesShimmer from "../simmer/MoviesShimmer";
const {width,height} = Dimensions.get('screen')
import {fetchHollyWoodMovies } from '../api/Movie_Api';


const HollyWood = ({navigation}) => {
   
    const [movies, setmovies] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getHollywoodMovies();
        //getUpcomingMovies();
      },[]);
    
      const getHollywoodMovies = async ()=>{
        const ress = await fetchHollyWoodMovies();
       // console.log('got trending'+ JSON.stringify(ress.data.result));// data.results.length)
     //console.log(ress.result.length);
       if(ress && ress.result) setmovies(ress.result);
        setLoading(false)
      }

      const handleClick = item=>{
        navigation.navigate('Details',item);
       // console.log('Details',item.Name);
    }

    return (
        <View style={{ flex: 1,justifyContent:'center',backgroundColor:'black'}}>
            
            <View style={{elevation:10,shadowColor:'white',height:height*0.054,borderBottomRightRadius:15,borderBottomLeftRadius:15,backgroundColor:'black',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <Icon name='arrow-left' size={30} color='white' style={{paddingStart:15}} onPress={()=>navigation.goBack()}/>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>HollyWood Movies</Text>
                <Icon name = 'search' size ={30} color='white' style={{paddingEnd:15}} onPress={()=>navigation.navigate('Search')}/>
            </View>

            {
        loading? (
          <MoviesShimmer />
        ):(  
            <FlatList
                data={movies}
                ListHeaderComponent={<View style={{marginTop:15}}></View>}    
                ListFooterComponent={<View style={{marginBottom:20}}></View>}  
                numColumns={3}
                //keyExtractor={movies => movies.index}
                keyExtractor={(item, index) => String(index)}
                renderItem={(item) => <Content item={item} handleClick={handleClick}/>}
            />
        )}
        </View>
    )
}
export default HollyWood;


const Content = ({item,handleClick}) => {
 //console.log(item)
   //(navigation.navigate('Details',item)
    return (
        <TouchableOpacity onPress={()=> handleClick(item.item)} style={{ flex: 1,justifyContent:'space-between',alignItems:'center',marginHorizontal:15,marginVertical:7}}>
            <Image source={{uri:item.item.poster_url}} style={{width:width*0.3,height:height*0.2,borderRadius:15}}/>
            <Icon name ='play' size={30} color='white' style={{position:'absolute',marginTop:height*0.075}}/>
        </TouchableOpacity>
    )
}

//https://drive.google.com/uc?export=view&id=1J4jYy9mIpBoFIdUcM1Bda2E1FllpjKzQ



