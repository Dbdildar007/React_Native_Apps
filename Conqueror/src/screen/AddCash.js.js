import React from "react";
import {useState} from 'react'
import { Text, View,TouchableOpacity,KeyboardAvoidingView,Dimensions, Image, TextInput,TouchableWithoutFeedback,Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Eicon from 'react-native-vector-icons/Entypo'
import LinearGradient from "react-native-linear-gradient";
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width;
const AddCash = () => {

    const [Amount,setAmount] = useState('5');
   console.log(Amount?.length)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: 'grey' }}>

            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: 'black', height: height * 0.050 }}>
                <Icon style={{ paddingStart: 15 }} name='arrow-left' color='white' size={17} />
                <Text style={{ color: 'white', fontWeight: 'bold', paddingStart: 20 }}>Add Cash</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: height * 0.045, backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', paddingStart: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: height * 0.030, width: width * 0.075 }} source={require('../assets/money.png')} />
                    <Text style={{ paddingStart: 10, fontStyle: 'italic', fontWeight: 'bold' }}>Current Balance:</Text>
                </View>
                <Text style={{ paddingEnd: 15, fontWeight: 'bold', color: 'black', fontSize: 16 }}>₹123</Text>
            </View>

            <View style={{ flexDirection: 'row', height: height * 0.099, alignItems: 'flex-end', justifyContent: 'space-between', backgroundColor: '#DFFCDF' }}>

                <View style={{ alignItems: 'baseline', width: width * 0.40, marginStart: 15, borderColor: 'green', borderWidth: 1, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: 'white', height: height * 0.080 }}>
                    <Text style={{ paddingStart: 10 }}>Amount to add</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ paddingStart: 7, color: 'black', fontSize: 20, fontWeight: 'bold' }}>₹</Text>
                       
                        <TextInput
                        blurOnSubmit={true}
                        inputMode = 'numeric'
                        keyboardType ='numeric'
                        maxLength = {6}
                        onChangeText ={(text)=>setAmount(text)}
                        value = {Amount}
                            style={{ backgroundColor:'white',fontSize:18,fontWeight:'bold',color:'black', width: width * 0.30 }}
                        />
                       {(Amount?.length>0)? <TouchableOpacity onPress={()=>setAmount()}>
                        <Eicon name = 'circle-with-cross' size={19} />
                        </TouchableOpacity>:null}
                       
                    </View>

                </View>


            <TouchableOpacity onPress={()=>setAmount('100')}>
                <View style={{ alignItems: 'center',justifyContent:'center', width: width * 0.20, marginStart: 15, borderColor: 'green', borderWidth: 1, borderTopRightRadius: 10, borderRadius:13, backgroundColor: 'white', height: height * 0.080 }}>
                <Text style={{fontStyle:'italic',fontWeight:'bold',fontSize:20,color:'green'}}>₹100</Text>
                </View>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={()=>setAmount('200')}>
                <View style={{ alignItems: 'center',justifyContent:'center', width: width * 0.20,marginEnd:15, marginStart: 15, borderColor: 'green', borderWidth: 1, borderTopRightRadius: 10, borderRadius:13, backgroundColor: 'white', height: height * 0.080 }}>
                <Text style={{fontStyle:'italic',fontWeight:'bold',fontSize:20,color:'green'}}>₹200</Text>
                </View>
                </TouchableOpacity>
              
               
            </View>

            <KeyboardAvoidingView behavior={10} style={{ flex: 1, backgroundColor: 'white', width: width, justifyContent: 'flex-end'}}>
               
            <View style={{
                    flex: 1,
                    justifyContent: "flex-end", marginBottom: 30,
                    marginHorizontal: 15
                }}>
                    <AppButton onPress={()=>console.log('adding')} title= 'Add' title2 ={Amount} size="sm" backgroundColor="#007bff" />
                </View>
                    </KeyboardAvoidingView>
        </View>
        </TouchableWithoutFeedback>
    )
}


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title,title2 }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["green", "green", 'white']}
            style={{  elevation: 8,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12}}
        >
            <Text style={{ fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"}}>{title} ₹{title2}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

export default AddCash;