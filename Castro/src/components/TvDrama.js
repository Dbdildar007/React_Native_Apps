import React from "react";
import { View, FlatList, Dimensions, Image, TouchableOpacity, Text } from "react-native";
import { useState, useEffect } from "react";
import { fetchTvDramaMovies } from '../api/Movie_Api';
import MoviesShimmer from "../simmer/MoviesShimmer";

const { width, height } = Dimensions.get('screen');

const TvDrama = ({ navigation }) => {

    const [TvDrama, setTvDrama] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getTvDramaMovies();
        //getUpcomingMovies();
    }, []);

    const getTvDramaMovies = async () => {
        const ress = await fetchTvDramaMovies();
        // console.log('got trending'+ JSON.stringify(ress.data.result));// data.results.length)
        // console.log(ress.result.length);
        if (ress && ress.result) setTvDrama(ress.result);
        setLoading(false)
    }

    const handleClick = item => {
        navigation.navigate('Details', item);
        //console.log('Details',item.Name);
    }




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>


            {
                loading ? (
                    <MoviesShimmer />
                ) : (
                    <FlatList
                        data={TvDrama}
                        ListFooterComponent={<View style={{ height: height * 0.050 }}></View>}
                        ListHeaderComponent={<View style={{ height: height * 0.010 }}></View>}
                        keyExtractor={(item, index) => String(index)}
                        numColumns={3}
                        renderItem={(item) => <Content item={item} handleClick={handleClick} />}
                    />
                )}
        </View>
    )
}
export default TvDrama;


const Content = ({ item, handleClick }) => {

    return (
        <TouchableOpacity onPress={() => handleClick(item.item)} style={{ marginHorizontal: 6, marginVertical: 6 }}>
            <Image source={{ uri: item.item.poster_url }} style={{ height: height * 0.2, width: width * 0.30, borderRadius: 15 }} />

            <View style={{ backgroundColor: 'green', position: 'absolute', marginStart: width * 0.21, justifyContent: 'center', alignItems: 'center', height: height * 0.0450, width: width * 0.10, borderRadius: 30 }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>{item.item.Rating}</Text>
            </View>
        </TouchableOpacity>
    )
}