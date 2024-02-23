import React from "react";
import {useRef} from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as Progress from 'react-native-progress';
import Micon from 'react-native-vector-icons/FontAwesome5'
import Details from "./Details";
import TopModel from "../components/TopModel";
import LinearGradient from "react-native-linear-gradient";
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const ContestDetail = () => {
    let childRef = useRef(null);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TopModel childRef ={childRef}/>
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


            <View style={{ backgroundColor: 'transparent' }}>
                <Text style={{ paddingStart: 10, paddingTop: 10 }}>Prize POOL</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, paddingStart: 20, paddingTop: 5 }}>₹1000</Text>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                    <Progress.Bar progress={0.5} color='black' width={width * 0.95} />
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 5, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'red' }}>5</Text>
                        <Text style={{ paddingStart: 3, color: 'red' }}>sports left</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text >10</Text>
                        <Text style={{ paddingStart: 3 }}>sports</Text>
                    </View>
                </View>


                <View style={{ justifyContent: 'space-between', marginHorizontal: 15, marginTop: 10 }}>

                    <AppButton onPress={() => console.log('join')} title=" join ₹350" size="sm" backgroundColor="#007bff" />
                </View>

                <View style={{ alignItems: 'center', backgroundColor: '#E0E8E1', justifyContent: 'space-between', flexDirection: 'row', marginTop: 11, height: height * 0.040 }}>
                    <View style={{ flexDirection: 'row', marginStart: 8, marginTop: 10 }}>
                        <Image style={{ height: height * 0.025, width: width * 0.050 }} source={require('../assets/first.png')} />
                        <Text style={{ paddingStart: 5, fontWeight: 'bold' }}>₹1000</Text>

                        <View style={{ marginStart: width * 0.060, flexDirection: 'row', alignItems: 'center' }}>
                            <Micon name='trophy' size={15} />
                            <Text style={{ paddingStart: 3 }}>50%</Text>
                        </View>
                    </View>
                    <Text style={{ marginEnd: 13 }}>Squad</Text>
                </View>

            </View>
            <Details />
        </View>
    )
}




TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#10B91F", "#008000", 'white']}
            style={{
                elevation: 10,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12
            }}
        >
            <Text style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase"
            }}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);
export default ContestDetail;