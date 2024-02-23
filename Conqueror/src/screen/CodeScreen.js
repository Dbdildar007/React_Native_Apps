
import React from "react";
import { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Keyboard, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Eicon from 'react-native-vector-icons/Entypo'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width

const CodeScreen = ({ navigation }) => {
    const [flg, setflg] = useState(false);
    const [errorflg, seterrorflg] = useState(false);
    const [number, setnumber] = useState();
    const [val, setval] = useState(0);
    const [val2, setval2] = useState(0);
    const [Icode,setIcode] = useState();
    const code = '+91'

    const Hanlefunc = () => {
        if (Icode.length == 6) {
            setval2(0)
            if(number.length == 10){
                console.log('api call and next screen will defin here.')
            }else{
                seterrorflg(true)
                setval(1)
                console.log('numbr issue')
            }
        }else{
            setval2(1)
            console.log('code wla')
        }
        }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Header navigation={navigation} />

                <View style={{ backgroundColor: '#FFFFF7', flex: 1, width: width, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.050, marginTop: 18, borderRadius: 10, borderWidth: val2, borderColor: 'red' }}>
                      
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.047, marginTop: 7, fontSize: 18,marginStart:7 }}
                            blurOnSubmit={true}
                            value={Icode}
                            maxLength={6}
                            onChangeText={(vL) => setIcode(vL)}
                            placeholder='Enter Invite Code.'
                           autoCapitalize='characters'
                        />
                         {Icode?.length > 0?<TouchableOpacity onPress={()=>setIcode()}><Eicon name='squared-cross' size={20}/></TouchableOpacity>:null} 
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.047, marginTop: 18, borderRadius: 10, borderWidth: val, borderColor: 'red' }}>
                        {flg ? <Text style={{ paddingTop: 9, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{code}</Text> : null}
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.050, marginTop: 10, fontSize: 18 }}
                            onFocus={() => setflg(true)}
                            blurOnSubmit={true}
                            value={number}
                            maxLength={10}
                            onChangeText={(vL) => setnumber(vL)}
                            placeholder={flg ? null:'Enter Mobile Number'}
                            keyboardType="numeric"
                        />
                    </View>
                    {errorflg ? <Text style={{ color: 'red' }}>Please enter a valid number for OTP</Text> : <Text style={{ paddingTop: 5 }}>You will receive an OTP at this number for the verification.</Text>}

                    <KeyboardAvoidingView behavior={10} style={{ flex: 1, backgroundColor: '#FFFFF7', width: width, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <View style={{borderWidth:1,marginBottom:5,borderColor:'#ebebe0'}}></View>
                        <TouchableOpacity
                            onPress={Hanlefunc}
                            style={{ backgroundColor: '#d70915', elevation: 10, width: width * 0.90, height: height * 0.043, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginStart: width * 0.050, marginEnd: width * 0.050 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 23, fontStyle: 'italic' }}>Continue</Text>
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center',alignItems:'center', marginStart: 10, marginEnd: 8, marginTop: 10 }}>
                        
                                <Text style={{}}>Already an user?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ fontWeight: 'bold', paddingEnd: 7, color: 'black' }}>Log in</Text>
                                </TouchableOpacity>
                            
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>

        </TouchableWithoutFeedback>

    )
}

const Header = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', height: height * 0.060, justifyContent: 'flex-start', width: width }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    style={{ paddingStart: 17, paddingEnd: 15 }} name='arrow-left' size={20} color={'white'} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Register and Play</Text>
        </View>
    )
}
export default CodeScreen;