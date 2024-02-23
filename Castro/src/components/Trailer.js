import React from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  Alert,
  Pressable,
  Text

} from 'react-native';
import Video from 'react-native-video'; /// alreadyimported this
import A5icon from 'react-native-vector-icons/FontAwesome5'

import Slider from '@react-native-community/slider';
import { useState, useRef, useEffect } from 'react';
const { width, height } = Dimensions.get('window');
import {  useRoute } from '@react-navigation/native'

const Trailer = () => {
  const video = useRef(null);
  const [currentTime, setcurrentTime] = useState(0)
  const [duration, setduration] = useState(0.1);
  const [paused, setPaused] = useState(false);
  const [loading, setloading] = useState(false);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);


  const {params: item} = useRoute();

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

  onLoadStart = ()=>{
    setloading(true);
  }

  
     useEffect(() => {
        setTimeout(() => setPlay(false), 5000);
        }, []);
 

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={{ width: width, height: height * 0.282 }}
        onPress={() => setPlay(!play)}>

        <Video
          fullscreen={true}
          paused={paused}
          source={{
            uri: item.Trailer_url,
            type: 'video/mp4'
          }}
          ref={video}
          onLoadStart={onLoadStart}
          onLoad={load}
          onBuffer={onBuffer}                // Callback when remote video is buffering
          onError={videoError}
          onProgress={progress}
          muted={mute}
          volume={100}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
          hideShutterView={true}
          repeat={true}
        />

        {loading ?
          <View style={{ position: 'absolute',marginStart:width*0.43,marginTop:height*0.1}}>
            <ActivityIndicator size={60} color={'red'} />
          </View> : null}

        {play && (
          <Pressable
            onPress={() => setPlay(false)}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}>

            
            <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: height * 0.080 }}>
              <A5icon name={paused ? 'pause' : 'play-circle'} size={40} color='white' onPress={() => setPaused(!paused)} />
            </View>


            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: height * 0.060,

                alignItems: 'center'
              }}>
                  <Text style={{color:'black',paddingStart:5,fontWeight:'bold'}}>Preview</Text>
              <Slider
                // we want to add some param here
                style={{ width: '80%', height: height * 0.090 }}
                maximumTrackTintColor='white'
                minimumTrackTintColor='red'
                thumbTintColor='white' // now the slider and the time will work
                value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                onValueChange={onslide}
              />
              <A5icon style={{ paddingEnd: 15, paddingBottom: 10 }} name={mute ? 'volume-mute' : 'volume-up'} size={18} color='white' onPress={() => setMute(!mute)} />

            </View>

          </Pressable>

        )}

      </Pressable>
    </View>
  );
};

export default Trailer;