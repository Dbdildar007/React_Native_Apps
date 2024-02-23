import React from 'react';
import { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Login = ({ navigation }) => {
    const [flg, setflg] = useState(false);
    const [errorflg, seterrorflg] = useState(false);
    const [number, setnumber] = useState();
    const [val, setval] = useState(0);
    const code = '+91'

    const Hanlefunc = () => {
        if (number.length == 10) {

            console.log('api call and next screen will defin here.')
        } else {
            seterrorflg(true)
            setval(1)
            console.log('nope')
        }

    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <Header navigation={navigation} />
                <KeyboardAvoidingView
                    behavior={1000}
                    style={{ flex: 1, backgroundColor: '#FFFFF7', justifyContent: 'flex-start' }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#ebebe0", width: width * 0.90, height: height * 0.055, marginTop: 30, borderRadius: 10, borderWidth: val, borderColor: 'red', marginStart: width * 0.06, marginEnd: width * 0.06 }}>
                        {flg ? <Text style={{ paddingTop: 9, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{code}</Text> : null}
                        <TextInput
                            style={{ fontWeight: 'bold', backgroundColor: 'transparent', width: width * 0.80, height: height * 0.050, marginTop: 10, fontSize: 18 }}
                            onFocus={() => setflg(true)}
                            blurOnSubmit={true}
                            value={number}
                            maxLength={10}
                            onChangeText={(vL) => setnumber(vL)}
                            placeholder={flg ? null :'Enter Mobile Number'}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                   {errorflg? <Text style={{color:'red'}}>Please Enter A valid number.</Text>:null}
                    </View>
                    

                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>------- <View style={{ backgroundColor: '#ebebe0', borderRadius: 20, marginTop: 5 }}><Text style={{ fontWeight: 'bold', fontSize: 15 }}>OR</Text></View> -------</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginStart: 30, marginEnd: 30 }}>

                        <View style={{ alignItems: 'flex-start' }}>
                            <Icon.Button
                                name="facebook"
                                backgroundColor="#2737e9"
                                onPress={() => console.log('fb')}
                            >Login with Facebook
                            </Icon.Button>
                        </View>
                        <Icon.Button
                            name="google"
                            backgroundColor="#0be22d"
                            onPress={() => console.log('google')}
                        >Login with Goolge
                        </Icon.Button>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={Hanlefunc}
                            style={{ backgroundColor: '#d70915', elevation: 10, width: width * 0.90, height: height * 0.043, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginStart: width * 0.050, marginEnd: width * 0.050 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 23, fontStyle: 'italic' }}>Next</Text>
                        </TouchableOpacity>
                        <View style={{ borderWidth: 0.5, borderBottomColor: '#ebebe0', marginTop: 20 }}></View>
                    </View>
                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Not a member?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>

    );
};


const Header = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', height: height * 0.060, justifyContent: 'flex-start', width: width }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    style={{ paddingStart: 17, paddingEnd: 15 }} name='arrow-left' size={20} color={'white'} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Login & Have Fun</Text>
        </View>
    )
}

export default Login;