import React from "react";
import { useState } from 'react';
import { Text, View,KeyboardAvoidingView,Dimensions,Keyboard,TouchableWithoutFeedback, TouchableOpacity, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Withdraw = () => {
    const [paymntmode, setpaymntmode] = useState('Phone Pay');

    console.log(paymntmode)

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1,backgroundColor:'green'}}>
          
            <KeyboardAvoidingView
                    behavior={"position"}
                    style={{ flex: 1, backgroundColor: '#FFFFF7', justifyContent: 'flex-start' }}>

                <View style={{ backgroundColor: 'red', height: height * 0.25, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, elevation: 10, shadowColor: 'white' }}>

                    <View style={{ flexDirection: 'row', marginTop: height * 0.015, paddingStart: 12, alignItems: 'center' }}>
                        <Icon name='arrow-undo-sharp' size={30} color='white' />
                        <Text style={{ paddingStart: 10, fontSize: 18, fontWeight: 'bold', color: 'white' }}>Withdraw</Text>
                    </View>

                    <View style={{ marginTop: height * 0.030, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name='wallet' size={70} color='yellow' />
                        <Text style={{ paddingTop: 6, fontWeight: 'bold', fontSize: 20, color: 'white' }}>₹34322</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop:height*0.060, justifyContent: 'space-between', backgroundColor: '#E3E5EE', borderRadius: 12 }}>

                    <TouchableOpacity onPress={() => setpaymntmode('Phone Pay')} style={{ marginStart: 20, justifyContent: 'center', alignItems: "center", height: height * 0.060, width: width * 0.25, borderRadius: 12, backgroundColor: '#AE04F8', elevation: 10, shadowColor: 'white' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Phone Pay</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setpaymntmode('Paytm')} style={{ justifyContent: 'center', alignItems: "center", height: height * 0.060, width: width * 0.25, borderRadius: 12, backgroundColor: '#04C1F8', elevation: 10, shadowColor: 'white' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Paytm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setpaymntmode('Account Number')} style={{ marginEnd: 20, justifyContent: 'center', alignItems: "center", height: height * 0.060, width: width * 0.25, borderRadius: 12, backgroundColor: '#047EF8', elevation: 10, shadowColor: 'white' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Account Number</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Text style={{ paddingTop: 20, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'green' }}>Withdraw to {paymntmode}</Text>



                    <View style={{ borderRadius: 15, borderWidth: 1, backgroundColor: '#E2DFD2', marginTop: 20, width: width * 0.6, borderColor: 'grey', elevation: 10, shadowColor: 'black' }}>
                        <TextInput
                            style={{ backgroundColor: 'transparent', paddingStart: 10, fontSize: 16, fontWeight: 'bold' }}
                            placeholder={paymntmode == 'Account Number' ? "Consumer Name" : ` Name on ${paymntmode}`}
                            blurOnSubmit={true}
                        />
                    </View>



                    <View style={{ borderRadius: 15, borderWidth: 1, backgroundColor: '#E2DFD2', marginTop: 20, width: width * 0.6, borderColor: 'grey', elevation: 10, shadowColor: 'black' }}>

                        <TextInput
                            style={{ backgroundColor: 'transparent', paddingStart: 10, fontSize: 16, fontWeight: 'bold' }}
                            placeholder={paymntmode == 'Account Number' ? "Account Number" : `${paymntmode} UPI ID`}
                            keyboardType="number-pad"
                            blurOnSubmit={true}
                        />
                    </View>

                    {paymntmode == 'Account Number' ?
                        <View>


                            <View style={{ borderRadius: 15, borderWidth: 1, backgroundColor: '#E2DFD2', marginTop: 20, width: width * 0.6, borderColor: 'grey', elevation: 10, shadowColor: 'black' }}>

                                <TextInput
                                    style={{ backgroundColor: 'transparent', paddingStart: 10, fontSize: 16, fontWeight: 'bold' }}
                                    placeholder='IFSC CODE'
                                    blurOnSubmit={true}
                                />
                            </View>
                        </View> : null}


                    <View style={{
                        justifyContent: "flex-end", marginBottom: 0,
                        marginHorizontal: 15, marginTop: height * 0.090
                    }}>
                        <AppButton onPress={() => console.log('go forwarrd')} title="Withdraw" size="sm" backgroundColor="#007bff" />
                    </View>

                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15 }}>Make sure Your information should be correct.</Text>
                        <Text style={{ paddingStart: 15, fontWeight: 'bold', color: 'black' }}>Note: Withdraw will be process within 1 hour.</Text>
                        <Text style={{ paddingTop: 10, marginHorizontal: 20 }}>You can't Withdraw referral amount if you will try, you can</Text>
                        <Text> lose your referral and bonus amount.</Text>
                    </View>

                </View>
                </KeyboardAvoidingView>
           
        </TouchableWithoutFeedback>

    );
}

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["red", "red", 'white']}
            style={{
                elevation: 8,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12
            }}
        >
            <Text style={{
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase"
            }}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

export default Withdraw;