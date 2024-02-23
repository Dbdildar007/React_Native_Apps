import { useState, useRef, useEffect } from "react";
import React from "react";
import { View, Text, FlatList, Image, Dimensions, Pressable, TouchableOpacity, StatusBar } from "react-native";
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Eicon from 'react-native-vector-icons/Entypo'
import { fetchBollywoodMovies } from '../api/Movie_Api';
import MoviesShimmer from "../simmer/MoviesShimmer";
const { width, height } = Dimensions.get('screen')

const BollyWood = ({ navigation }) => {

    const [movies, setmovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBollywoodMovies();
        //getUpcomingMovies();
    }, []);

    const getBollywoodMovies = async () => {
        const ress = await fetchBollywoodMovies();
        // console.log('got trending'+ JSON.stringify(ress.data.result));// data.results.length)
        //console.log(ress.result);
        if (ress && ress.result) setmovies(ress.result);
        setLoading(false)
    }

    const handleClick = item => {
        navigation.navigate('Details', item);
        //console.log('Details',item.Name);
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>

            <View style={{ elevation: 10, shadowColor: 'white', height: height * 0.054, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, backgroundColor: 'black', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Icon name='arrow-left' size={30} color='white' style={{ paddingStart: 15 }} onPress={() => navigation.goBack()} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>BollyWood Movies</Text>
                <Icon name='search' size={30} color='white' style={{ paddingEnd: 15 }} onPress={() => navigation.navigate('Search')} />
            </View>

            {
                loading ? (
                    <MoviesShimmer />
                ) : (
                    <FlatList
                        data={movies}
                        ListHeaderComponent={<View style={{ marginTop: 15 }}></View>}
                        ListFooterComponent={<View style={{ marginBottom: 20 }}></View>}
                        numColumns={3}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={(item) => <Content item={item} handleClick={handleClick} />}
                    />
                )}

        </View>
    )
}
export default BollyWood;


const Content = ({ item, handleClick }) => {
   
    return (
        <TouchableOpacity onPress={() => handleClick(item.item)} style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 7 }}>
            <Image source={{
                uri: item.item.poster_url,
            }} style={{ width: width * 0.3, height: height * 0.2, borderRadius: 15, resizeMode: 'stretch', backgroundColor: 'black' }} />

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontStyle: 'italic' }}>{item.item.Name.length > 8 ? item.item.Name.slice(0, 8) + '..' : item.item.Name}</Text>

                <Text style={{ paddingStart: 4, color: 'white' }}>({item.item.Language})</Text>
            </View>
            <Text style={{ color: "white", fontWeight: 'bold' }}>{item.item.Year}</Text>

            <Icon name='play' size={30} color='white' style={{ position: 'absolute', marginTop: height * 0.075 }} />
        </TouchableOpacity>
    )
}