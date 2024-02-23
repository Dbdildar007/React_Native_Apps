import React from 'react'
import { useState,useRef} from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import TopModel from '../components/TopModel'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ContestData from '../components/ContestData'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Contest = () => {
    let childRef = useRef(null);

    const [data,setdata] = useState([1,2,3,4]);
    return (
        <View style={{  flex: 1,backgroundColor:'white'}}>
            <TopModel childRef={childRef}/>
            <View style={{ backgroundColor: 'black', height: height * 0.063, justifyContent: 'flex-start', width: width }}>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        style={{ paddingStart: 17, paddingEnd: 15, paddingTop: 5 }} name='arrow-left' size={20} color={'white'} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold' }}>Dua</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, paddingStart: 5 }}>VS</Text>
                    <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', paddingStart: 7 }}>Duo</Text>
                </View>

<TouchableOpacity onPress={()=>childRef.current.focusInput()}>
                <View style={{ marginStart: width * 0.54, marginTop: 10 }}>
                    <Icon name='wallet' color='white' size={20} />
                    
                </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginStart: width * 0.149 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>CountDown left</Text>
            </View>

        </View>


                <View style={{marginTop:10,height:height*0.040,borderBottomColor:'grey',borderBottomWidth:1}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginStart:15,marginEnd:20}}>
                    <Text style={{paddingTop:10}}>Sort By:</Text>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>SPORTS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>PRIZE POOL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>HEAD TO HEAD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>WINNER TAKES ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>MEGA CONTEST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>HOT CONTEST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingStart:15,paddingTop:10}}>PRACTICE</Text>
                    </TouchableOpacity>
                    
                     </ScrollView>
                     </View>
                     <View style={{ backgroundColor: 'white', flex: 1,justifyContentL:'center',alignItems:'center',marginTop:13}}>


                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) =>item}
                    renderItem={(item)=><ContestData/>}
                    />
            </View>
        </View>
    )
}

export default Contest;





