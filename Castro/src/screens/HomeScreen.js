import React, { useRef, useState, useEffect } from "react";
import { Text, View, Dimensions, Image, ScrollView, TouchableOpacity, Pressable, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Eicon from 'react-native-vector-icons/Entypo'
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient'
import MovieLinst from "../components/MovieList";
import Modal from 'react-native-modalbox';
import HomeShimmer from '../simmer/HomeShimmer'
import { fetchLast10gMovies, fetchTrendingMovies, fetchLatestMovies, fetchPopularMovies, fetchActionMovies, fetchMarvelMovies, fetchDCMovies, fetchThrillerMovies, fetchHorrorMovies } from '../api/Movie_Api';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const HomeScreen = ({ navigation }) => {

    const [trending, setTrending] = useState([]);
    const [Latest, setLatest] = useState([]);
    const [Popularromance, setPopularromance] = useState([]);
    const [Action, setAction] = useState([]);

    const [Marvel, setMarvel] = useState([]);
    const [DC, setDC] = useState([]);
    const [Thriller, setThriller] = useState([]);
    const [Horror, setHorror] = useState([]);




    const [cdata, setcdata] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLast10Movies();
        getTrendingMovies();
        getLatestgMovies();
        getPopularMovies();
        getActionMovies();
        getMarvelMovies();
        getDCMovies();
        getThrillerMovies();
        getHorrorMovies();
    }, []);

    const getLast10Movies = async () => {
        const ress = await fetchLast10gMovies();
        // console.log('got trending'+ JSON.stringify(ress.data.result));// data.results.length)
        //console.log(ress.result.length);
        if (ress && ress.result) setcdata(ress.result);
        setLoading(false)
    }

    // trending movies api call
    const getTrendingMovies = async () => {
        const ress = await fetchTrendingMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setTrending(ress.result);
        setLoading(false)
    }

    //latest movies
    const getLatestgMovies = async () => {
        const ress = await fetchLatestMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setLatest(ress.result);
        setLoading(false)
    }

    //popular in romance movies
    const getPopularMovies = async () => {
        const ress = await fetchPopularMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setPopularromance(ress.result);
        setLoading(false)
    }
    // Action movies
    const getActionMovies = async () => {
        const ress = await fetchActionMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setAction(ress.result);
        setLoading(false)
    }
    // Marvel movies
    const getMarvelMovies = async () => {
        const ress = await fetchMarvelMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setMarvel(ress.result);
        setLoading(false)
    }

    //DC movies
    const getDCMovies = async () => {
        const ress = await fetchDCMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setDC(ress.result);
        setLoading(false)
    }

    //Thriller movies
    const getThrillerMovies = async () => {
        const ress = await fetchThrillerMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setThriller(ress.result);
        setLoading(false)
    }

    //Horror movies
    const getHorrorMovies = async () => {
        const ress = await fetchHorrorMovies();
        //console.log('got upcoming', ress.result)
        if (ress && ress.result) setHorror(ress.result);
        setLoading(false)
    }





    const handleClickpage = item => {
        navigation.navigate('Details', item);
        // console.log('Details',item);
    }

    const [data, setdata] = useState([]);



    const refdata = useRef(null);

    const handleClick = item => {
        refdata.current.open();
        setdata(item);

    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            {
                loading ? (
                    <HomeShimmer />
                ) : (


                    <ScrollView

                        showsVerticalScrollIndicator={false}>

                        <Index navigation={navigation} cdata={cdata} handleClickpage={handleClickpage} />



                        {/* Trending Movies Carousel */}

                        {trending?.length > 0 && <MovieLinst data={trending} title={'Trending Movies.'} handleClick={handleClick} />}

                        {/* Laterst Release Movies Carousel */}

                        {Latest?.length > 0 && <MovieLinst data={Latest} title={'Latest Releases.'} handleClick={handleClick} />}

                        {/* Popular in Romance Release Movies Carousel */}

                        {Popularromance?.length > 0 && <MovieLinst data={Popularromance} title={'Popular in Romance.'} handleClick={handleClick} />}

                        {/* Action  Movies Carousel */}

                        {Action?.length > 0 && <MovieLinst data={Action} title={'Action Movies.'} handleClick={handleClick} />}

                        {/* Marvels  Movies Carousel */}

                        {Marvel?.length > 0 && <MovieLinst data={Marvel} title={'Marvel Movies.'} handleClick={handleClick} />}

                        {/* DC  Movies Carousel */}

                        {DC?.length > 0 && <MovieLinst data={DC} title={'DC Movies.'} handleClick={handleClick} />}

                        {/* Thriller  Movies Carousel */}

                        {Thriller?.length > 0 && <MovieLinst data={Thriller} title={'Thriller Movies.'} handleClick={handleClick} />}


                        {/* Horror  Movies Carousel */}


                        {Horror?.length > 0 && <MovieLinst data={Horror} title={'Horror Movies.'} handleClick={handleClick} />}
                        <View style={{ backgroundColor: 'transparent', height: height * 0.060 }}>

                        </View>



                    </ScrollView>
                )}
            <View style={{ position: 'absolute', width: width, marginTop: height * 0.010 }}>
                <Header navigation={navigation} />
            </View>



            <View style={{ height: height * 0.035, position: 'absolute', marginTop: height * 0.88, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "grey", marginHorizontal: width * 0.20, borderRadius: 15, elevation: 10, opacity: 0.5 }}>
                <TouchableOpacity onPress={() => navigation.navigate('BollyWood')} ><Text style={{ color: 'white', fontWeight: 'bold', paddingStart: 15 }}>Bollywood |</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HollyWood')}>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingStart: 5 }}>Hollywood | </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Seriess')}>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingEnd: 15 }}>Series</Text>
                </TouchableOpacity>
            </View>

            <Modal style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15, height: height * 0.28, width: width, backgroundColor: '#172A52', elevation: 10 }} position={"bottom"} ref={refdata}>
                <Pressable onPress={() => navigation.navigate('Details', data)}>
                    <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingEnd: 2, paddingStart: 12 }}>
                        <Image source={{ uri: data.poster_url }} style={{ height: height * 0.2, width: width * 0.30, borderRadius: 15 }} />

                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ width: width * 0.5, marginStart: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', color: 'white' }}>{data.Name?.length > 15 ? data.Name.slice(0, 15) + '...' : data.Name}</Text>
                                <Text style={{ color: '#145AEE' }}>{data.Year} {data.Language} {data?.Length} </Text>
                                <Text style={{ paddingTop: 3, color: 'white' }}>{data.Description?.length > 150 ? data.Description.slice(0, 150) + '...' : data.Description}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ height: height * 0.033, width: width, marginStart: 25, }} onPress={() => refdata.current.close()}>
                            <Eicon name='circle-with-cross' size={30} color='white' style={{ paddingStart: width * 0.0, paddingEnd: 5 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end', alignItems: "center", flexDirection: 'row', backgroundColor: 'transparent', marginEnd: width * 0.1 }}>
                        <TouchableOpacity onPress={() => console.log('play')} style={{ flexDirection: 'row', backgroundColor: 'white', marginEnd: width * 0.2, width: width * 0.22, height: height * 0.048, justifyContent: "center", alignItems: 'center', elevation: 10, shadowColor: 'white', borderRadius: 10 }}>
                            <Icon name='play' size={25} color='#145AEE' />
                            <Text style={{ color: '#145AEE', fontWeight: "bold", fontSize: 20, paddingStart: 5 }}>Play</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Details', data)} style={{ marginTop: 5 }}>
                            <Icon name='info-circle' size={25} color='white' />
                            <Text style={{ color: 'white' }} >Info</Text>
                        </TouchableOpacity>

                    </View>

                </Pressable>

            </Modal>


        </View>
    )
}
export default HomeScreen;



const Header = ({ navigation }) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 12 }}>
            <Image source={require('../assests/B2.png')} style={{ borderRadius: 100, height: height * 0.050, width: width * 0.114 }} />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='search' size={25} color='blue' style={{ paddingEnd: 20 }} onPress={() => navigation.navigate('Search')} />
                <Image source={require('../assests/watching.png')} style={{ borderRadius: 100, height: height * 0.050, width: width * 0.114 }} />

            </View>
        </View>
    )
}



function Index({ handleClickpage, cdata }) {


    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={height * 0.5}
                autoPlay={true}
                data={cdata}
                scrollAnimationDuration={2000}
                renderItem={({ index, item }) => (

                    <Pressable onPress={() => handleClickpage(item)}
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',

                        }}
                    >

                        <Image source={{ uri: item.poster_url }} style={{ width: width, height: height * 0.50, resizeMode: 'stretch' }} />


                        <LinearGradient
                            colors={['rgba(2, 23, 1, 0)', 'rgba(0,0, 0, 1)']}
                            style={{ position: 'absolute', height: height * 0.092, top: height * 0.41, bottom: 0, width: width }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0.6 }}>
                        </LinearGradient>

                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20, position: 'absolute', paddingTop: height * 0.46, marginHorizontal: 15 }}>{item.Year} {item.Language} {item.type}</Text>

                    </Pressable>

                )}
            />


        </View>
    );
}


// Bottomsheet

