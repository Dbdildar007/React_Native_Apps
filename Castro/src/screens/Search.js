import React from "react";
import { View, Text, FlatList, StatusBar, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('screen');

const Search = ({navigation}) => {
    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [Inpute, setinpute] = useState();

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black', alignItems: 'center' }}>
          

            <View style={{ marginTop:6,height: height * 0.050, width: width, justifyContent: 'center',marginStart:18, alignItems: 'flex-start', backgroundColor: 'transparent' }}>
                <Icon name ='arrow-left' size ={30} color='white' onPress={()=>navigation.goBack()}/>
            </View>

            <View style={{ alignItems: 'center', marginTop: 7, backgroundColor: 'grey', justifyContent: 'space-between', height: height * 0.040, width: width * 0.8, borderRadius: 10, flexDirection: 'row', elevation: 10, shadowColor: 'white' }}>

                <TextInput
                    style={{ backgroundColor: 'transparent', borderRadius: 10, marginStart: 10, alignItems: 'flex-end', fontStyle: 'italic', fontWeight: 'bold', color: 'white', width: width * 0.7 }}
                    placeholder="Give the Inpute."
                    value={Inpute}
                    onChangeText={(value) => setinpute(value)}
                />

                {Inpute?.length > 0 ?
                    <Icon name='circle-with-cross' size={22} color='white' style={{ paddingEnd: 5 }} onPress={() => setinpute('')} />
                    : null}
            </View>

            <FlatList
                data={data}
                ListFooterComponent={<View style={{ height: height * 0.050 }}></View>}
                ListHeaderComponent={<View style={{ height: height * 0.0250 }}></View>}
                keyExtractor={key => key}
                numColumns={3}
                renderItem={(item) => <Content item={item} />}
            />
        </View>
    )
}
export default Search;


const Content = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => console.log(item)} style={{ marginHorizontal: 6, marginVertical: 6 }}>
            <Image source={require('../assests/poster.jpg')} style={{ height: height * 0.2, width: width * 0.30, borderRadius: 15 }} />

            <View style={{ backgroundColor: 'green', position: 'absolute', marginStart: width * 0.21, justifyContent: 'center', alignItems: 'center', height: height * 0.0450, width: width * 0.10, borderRadius: 30 }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>77%</Text>
            </View>
        </TouchableOpacity>
    )
}