import React from "react";
import {useState} from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import Micon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const ContestData = () => {
    const navigation = useNavigation();
    const [vl,setvl] = useState(0);
    const HandleJoin=()=>{
        setvl(vl+0.1)
        console.log(vl+0.1)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 1, borderColor: 'grey', elevation: 10, shadowColor: 'black', justifyContent: 'flex-start', marginTop: 2, marginBottom: 12, width: width * 0.94, height: height * 0.20, borderRadius: 12 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
                    <Text style={{ fontSize: 18 }}>Prize Pool</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingEnd: 5 }}>Entry</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'green', textDecorationLine: 'line-through' }}>388</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 24 }}>₹1000</Text>
                    </View>
                    <AppButton onPress={HandleJoin} title="₹350" size="sm" backgroundColor="#007bff" />
                </View>

                <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                    <Progress.Bar progress={vl} color='black' width={width * 0.85} />
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

            </TouchableOpacity>

            <View style={{ backgroundColor: '#E0E8E1', justifyContent: 'space-between', flexDirection: 'row', marginTop: 11, borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                <View style={{ flexDirection: 'row', marginStart: 8 }}>
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
export default ContestData;