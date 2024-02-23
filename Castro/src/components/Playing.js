import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Pressable,
    StatusBar,
    Image,
    ScrollView
} from 'react-native';
import Video from 'react-native-video'; /// alreadyimported this
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // and this
import Ficon from 'react-native-vector-icons/Foundation'
import A5icon from 'react-native-vector-icons/FontAwesome5'
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';
import { useState, useRef, useEffect } from 'react';
const { width, height } = Dimensions.get('window');
import {  useRoute } from '@react-navigation/native'

const Playing = ({navigation}) => {

    const video = useRef(null);
    const [currentTime, setcurrentTime] = useState(0)
    const [duration, setduration] = useState(0.1);
    const [paused, setPaused] = useState(false);
    const [loading, setloading] = useState(false);
    const [play, setPlay] = useState(false);
    const [mute, setMute] = useState(false);
    const [lock, setlock] = useState(false);
    const [prate, setprate] = useState(1);
    const [ShowPopover, setShowPopover] = useState(false);
    const [Episodflg,setEpisodflg] = useState(false);
    const [episodes,setepisods] = useState([1,2,3,4,5,6,7,8,9,10,11]);



    
  const {params: item} = useRoute();

  //console.log(item.Sessions?.length)


    //get time in format

    getTime = t => {
        const digit = n => n < 10 ? `0${n}` : `${n}`;
        // const t = Math.round(time);
        const sec = digit(Math.floor(t % 60));
        const min = digit(Math.floor((t / 60) % 60));
        const hr = digit(Math.floor((t / 3600) % 60));
        return hr + ':' + min + ':' + sec; // this will convert sec to timer string
        // 33 -> 00:00:33
        // this is done here
        // ok now the theme is good to look
    }

    load = ({ duration }) => {
        setloading(true);
        setduration(duration)
    }// now here the duration is update on load video


    progress = ({ currentTime }) => {
        setloading(false)
        setcurrentTime(currentTime);
    } // here the current time is upated

    backward = () => {
        video.current.seek(parseInt(currentTime) - 10);
    }


    forward = () => {
        video.current.seek(parseInt(currentTime) + 10); // here the video is seek to 5 sec forward


    }

    onslide = slide => {
        video.current.seek(parseInt(slide * duration)); // here the upation is maked for video seeking
        setloading(true);

    }

    videoError = () => {
        Alert.alert(' Network issue Oho try again');
    }

    onBuffer = () => {
        
        setloading(true);

    }
    const onEnd =()=>{
        setEpisodflg(true);
    }




    useEffect(() => {
        changeScreenOrientation();
         return () => {
           changeScreenToPotrait();
         };
    }, []);


    const changeScreenOrientation = () => {
        Orientation.lockToLandscape();
    }

    
      const changeScreenToPotrait =()=> {
        Orientation.lockToPortrait();
     }
  

    const playingrate = (item) => {
        setprate(item);
        setShowPopover(false);
    }

    const hideunhid = () => {
        setPlay(!play);
        setShowPopover(false);
        setEpisodflg(false);
    }

    const hideall = () => {
        setPlay(false);
        setShowPopover(false);
        setEpisodflg(false);
    }

 
    useEffect(() => {
       setTimeout(() => setPlay(false), 5000);
       }, []);


//http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'



    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <Pressable
                style={{ width: '100%', height: '100%' }}
                onPress={hideunhid}>

                <Video
                    fullscreen={true}
                    paused={paused}
                    source={{
                        uri: item.Video_url,
                        type: 'video/mp4'
                      }}
                    ref={video}
                    rate={prate}
                    onLoad={load}
                    onBuffer={onBuffer}                // Callback when remote video is buffering
                    onError={videoError}
                    onProgress={progress}
                    onEnd ={onEnd}
                    muted={mute}
                    volume ={100}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    hideShutterView={true}
                    repeat ={false}
                />
            

                {play && (
                    <Pressable
                        onPress={hideall}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            backgroundColor: 'rgba(0,0,0,.5)',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>




                        {loading ?
                            <View style={{ position: 'absolute' }}>
                                <ActivityIndicator size={60} color={'red'} />
                            </View> : null}

                        <View style={{ paddingHorizontal: width * 0.1, flexDirection: 'row', width: width, justifyContent: 'space-between', alignItems: 'center' }}>

                            <TouchableOpacity style={{ elevation: 10, shadowColor: 'white' }}
                                onPress={backward}>
                                <Icon name='rewind-10' size={40} color='white' />
                            </TouchableOpacity>


                            <A5icon name={paused ? 'pause' : 'play-circle'} size={40} color='white' onPress={() => {
                                setPaused(!paused);
                            }} />


                            <TouchableOpacity style={{ elevation: 10, shadowColor: 'white' }}
                                onPress={forward}>
                                <Icon name='fast-forward-10' size={40} color='white' />
                            </TouchableOpacity>
                        </View>


                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                position: 'absolute',
                                bottom: height * 0.080,
                                paddingLeft: 20,
                                paddingRight: 20,
                                alignItems: 'center'
                            }}>
                            <Text style={{ color: 'white' }}>
                                {getTime(currentTime)}
                            </Text>



                            <Slider
                                // we want to add some param here
                                style={{ width: '80%', height:height*0.090 }}
                                maximumTrackTintColor='white'
                                minimumTrackTintColor='red'
                                thumbTintColor='blue' // now the slider and the time will work
                                value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                                onValueChange={onslide}
                            />
                            <Text style={{ color: 'white' }}>
                                {getTime(duration)}
                            </Text>
                        </View>


                        {ShowPopover ?
                            <View style={{ backgroundColor: 'green', width: width * 0.1, height: height * 0.5, position: 'absolute', borderRadius: 10, backgroundColor: '#c4aead', justifyContent: 'center', alignItems: 'center' }}>
                                <Pressable onPress={() => playingrate(0.2)}>
                                    <Text style={{ color: 'black', paddingBottom: 5, fontSize: 17, fontWeight: 'bold' }}>0.2</Text>
                                </Pressable>

                                <Pressable onPress={() => playingrate(0.5)}>
                                    <Text style={{ color: 'black', paddingBottom: 5, fontSize: 17, fontWeight: 'bold' }}>0.5</Text>
                                </Pressable>

                                <Pressable onPress={() => playingrate(1)}>
                                    <Text style={{ color: 'black', paddingBottom: 0, fontSize: 17, fontWeight: 'bold' }}>1</Text>
                                </Pressable>

                                <Pressable onPress={() => playingrate(1.2)}>
                                    <Text style={{ color: 'black', paddingBottom: 5, fontSize: 17, fontWeight: 'bold' }}>1.2</Text>
                                </Pressable>

                                <Pressable onPress={() => playingrate(1.5)}>
                                    <Text style={{ color: 'black', paddingBottom: 5, fontSize: 17, fontWeight: 'bold' }}>1.5</Text>
                                </Pressable>

                                <Pressable onPress={() => playingrate(2.0)}>
                                    <Text style={{ color: 'black', paddingTop: 0, fontSize: 17, fontWeight: 'bold' }}>2.0</Text>
                                </Pressable>
                            </View> : null}




                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            bottom: 10,
                            paddingHorizontal: width * 0.1,
                            alignItems: 'center'
                        }}>

                            <Pressable style={{ flexDirection: 'row' }} onPress={() => setShowPopover(!ShowPopover)}>
                                <Icon name='speedometer' size={20} color='white' />
                                <Text style={{ paddingStart: 5, color: 'white' }}>Speed</Text>
                                <Text style={{ color: 'white' }}>({prate}x)</Text>
                            </Pressable>



                            <A5icon name={mute ? 'volume-mute' : 'volume-up'} size={20} color='white' onPress={() => setMute(!mute)} />

                            { item.Sessions?.length>0?

                            <TouchableOpacity onPress={()=>setEpisodflg(!Episodflg)} style={{ flexDirection: 'row'}}>
                                <Ficon name='page-multiple' size={22} color='white' />
                                <Text style={{ color: 'white', paddingStart: 5 }}>Episodes</Text>
                            </TouchableOpacity>:null}


                            <View style={{ flexDirection: 'row', backgroundColor: 'grey', borderRadius: 5, opacity: 0.6 }}>
                                <Icon name='skip-next' size={22} color='white' />
                                <Text style={{ color: 'white' }}>Next Eps.</Text>
                            </View>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                position: 'absolute',
                                top: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                alignItems: 'center'
                            }}>
                            <A5icon name='arrow-left' size={20} color='white' onPress={()=>navigation.goBack()}/>
                            <Text style={{ color: 'white' }}>info about the movies...</Text>
                            <A5icon name={lock ? 'lock' : 'lock-open'} size={20} color='white' onPress={() => setlock(!lock)} />
                        </View>

                    </Pressable>

                )}
                     
            </Pressable>



        {Episodflg? 
            <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            bottom: height*0.80,
                            paddingHorizontal: width * 0.045,
                            alignItems: 'center'
                        }}>
                            <ScrollView 
                            horizontal = {true}
                            showsHorizontalScrollIndicator={false}>
                            {
                                episodes.map((item,index)=>{
                
                                    return(
                                        <Pressable onPress={()=>navigation.navigate('Playing')} key={index} style={{flex:1,width:width*0.20,height:height*0.4,marginStart:10,borderRadius:20,justifyContent:'flex-start',alignItems:'center',backgroundColor:'grey'}}>
                                           <Image source={require('../assests/poster.jpg')} style={{height:height*0.32,width:width*0.20,borderRadius:12}}/>

                                            <A5icon name ='play-circle' size={30} color='white' style={{position:'absolute',marginTop:height*0.120}}/>
                                           <View style={{flexDirection:'row'}}>
                                           <Text style={{paddingTop:4,color:'blue',fontSize:17}}>S1:E2</Text>
                                           <Text style={{paddingTop:4,color:'blue',fontSize:17,paddingStart:10}}>1h:30m</Text>
                                           </View>
                                           
                                        </Pressable>
                                    )
                                })
                            }
                            </ScrollView>
                        </View>:null}

                    
                        
        </View>
    );
};

export default Playing;