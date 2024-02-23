import React from 'react';
import { ImageBackground, Dimensions, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Foundation'
const heigh = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
import Transactions from '../components/Transactions';

const Wallet = () => {

    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);


    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFF0' }}>
            <ImageBackground style={{ height: heigh * 0.20, width: width * 0.96, marginHorizontal: width * 0.021, marginVertical: heigh * 0.015 }} source={require('../assets/bc_image.jpg')}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: heigh * 0.030 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Available Balance</Text>

                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>


                        <Text style={{ color: 'white', fontSize: 25 }}>RS.</Text>
                        <Text style={{ color: 'white', paddingStart: 8, fontSize: 25 }}>293</Text>
                    </View>
                </View>


            </ImageBackground>


            <View style={{ position: 'absolute', marginTop: heigh * 0.17 }}>

                <TouchableOpacity style={{ elevation: 10, alignItems: 'center', justifyContent: "center", backgroundColor: 'white', width: width * 0.3, marginStart: width * 0.132, height: heigh * 0.070, marginTop: heigh * 0.020, borderRadius: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Add Money</Text>
                </TouchableOpacity>
                <View style={{ height: heigh * 0.036, width: width * 0.080, borderRadius: 20, alignItems: 'center', marginStart: width * 0.40, position: 'absolute', backgroundColor: "white" }}>
                    <Icon name='plus' color='green' size={30} />
                </View>
            </View>


            <View style={{ position: 'absolute', marginTop: heigh * 0.17 }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', elevation: 10, backgroundColor: 'white', width: width * 0.3, marginStart: width * 0.59, height: heigh * 0.070, marginTop: heigh * 0.020, borderRadius: 10, borderTopRightRadius: 15 }}>

                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Withdraw Money</Text>
                </TouchableOpacity>
                <View style={{ height: heigh * 0.036, width: width * 0.080, borderRadius: 20, alignItems: 'center', marginStart: width * 0.860, position: 'absolute', backgroundColor: "white" }}>
                    <Icon name='arrow-up' color='red' size={30} />
                </View>
            </View>


            <View style={{ marginStart: 20, marginEnd: 20, marginTop: heigh * 0.06, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: heigh * 0.070, width: width * 0.25, borderRadius: 10, elevation: 10 }}>
                    <Text>Winnings</Text>
                    <Text>290</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: heigh * 0.070, width: width * 0.25, borderRadius: 10, elevation: 10 }}>
                    <Text>Deposit</Text>
                    <Text>29</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: heigh * 0.070, width: width * 0.25, borderRadius: 10, elevation: 10 }}>
                    <Text>Bonus</Text>
                    <Text>90</Text>
                </View>
            </View>

            <Text style={{ paddingTop: 30, paddingStart: 20, fontSize: 20 }}>Transactions Hinstory</Text>

            <FlatList
                style={{ marginTop: 25 }}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item}
                ListFooterComponent={() => <View style={{ backgroundColor: 'transparent', height: 40, borderTopWidth: 0.5 }}></View>}
                renderItem={() => <Transactions />}

            />





        </View>
    );
}


export default Wallet;