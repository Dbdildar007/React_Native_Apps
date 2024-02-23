import react from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import Collection from '../components/Collection'
import MoreLike from '../components/MoreLikes'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Trailerpage from '../components/Trailer'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

import {  useRoute } from '@react-navigation/native'

import { useState } from 'react'


const Details = ({navigation}) => {
 
    const {params: item} = useRoute();

   
    const [index, setindex] = useState(0);
    const [likeflg,setlikeflg] = useState(false);

    let c = 0
    let m = 0

    if (index == 0) {
        c = 3
        m = 0
    } else {
        c = 0
        m = 3
    }




    
    const handleClickpage = item => {
        navigation.navigate('Playing',item);
         //console.log('Details',item);
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: '#000507' }}>
           
            <View style={{ flexDirection: 'row', marginTop: height * 0.02, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                <Icon name='arrow-left' size={25} color='white' onPress={()=>navigation.goBack()} />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='search' size={25} color='blue' style={{ paddingEnd: 20 }} onPress={()=>navigation.navigate('Search')} />

                    <Pressable onPress={()=>console.log('profile screen')}>
                    <Image source={require('../assests/watching.png')} style={{ borderRadius: 100, height: height * 0.045, width: width * 0.11 }} />
                    </Pressable>
                </View>
            </View>


        <View style={{ width: width, height: height * 0.282,marginTop:5}}>
            
        <Trailerpage item={item}/>


        </View>

            <ScrollView
          
                showsVerticalScrollIndicator={false}>

        
                <Text style={{ paddingStart: 15, fontSize: 30, fontWeight: "bold", color: 'white', fontStyle: 'italic' }}>{item.Name}</Text>
                <Text style={{ paddingStart: 15, paddingTop: 2, color: "blue", paddingBottom: 15 }}>{item.Year} {item.Language} {item.Length}</Text>


                <TouchableOpacity onPress={() => handleClickpage(item)} style={{ justifyContent: 'center', elevation: 10, borderRadius: 10, shadowColor: 'white', marginHorizontal: 10, alignItems: 'center', backgroundColor: 'white', flexDirection: 'row' }}>
                    <Icon name='play' size={20} color='black' style={{ paddingTop: 10, paddingBottom: 10 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", paddingStart: 10 }}>Play</Text>
                </TouchableOpacity>

                <Text style={{ paddingTop: 10, paddingStart: 15,color:'grey'}}>{item.Description.length>300?item.Description.slice(0,300)+'...': item.Description}</Text>
 
              

                <View style={{ justifyContent: 'space-between', marginHorizontal: 30, marginTop: 10, alignItems: 'center', flexDirection: 'row' }}>
                    <View>
                       <TouchableOpacity onPress={()=>setlikeflg(true)}> 
                        <Icon name='heart' size={30} color ={likeflg?'red':'grey'}/>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', paddingTop: 5,paddingStart:12 }}>{item.Likes}</Text>
                    </View>

                    <View>
                        <Icon name='eye' size={30} color='grey' />
                        <Text style={{ paddingTop: 5, color: 'white',paddingStart:12}}>{item.Views}</Text>
                    </View>

                    <View>
                        <Icon name='star' size={30} color='yellow' />
                        <Text style={{ color: 'white', paddingTop:5,paddingStart:8}}>{item.Rating}%</Text>
                    </View>
                </View>

                <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'grey' }}>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10, justifyContent: 'flex-start', alignItems: 'center', }}>

                    <Pressable onPress={() => setindex(0)} style={{ borderTopWidth: c, borderColor: '#FA0636' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Collection</Text>
                    </Pressable>

                    <Pressable onPress={() => setindex(1)} style={{ marginStart: 30, borderTopWidth: m, borderColor: 'red' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>More Like This</Text>
                    </Pressable>
                </View>
                {index == 0 ? <Collection item ={item}/> : <MoreLike />}

            </ScrollView>
        </View>
    )

        }
export default Details;