import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Button
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";


const OtpScreen = () => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

    const [flg, setflg] = useState(false);
    const height = Dimensions.get('screen').height
    const width = Dimensions.get('screen').width


    const [timeLeft, setTimeLeft] = useState(60);

    const startTimer = () => {
        timer = setTimeout(() => {
            if (timeLeft <= 0) {
                clearTimeout(timer);
                return false;
            }
            setTimeLeft(timeLeft - 1);
        }, 1000)
    }

    useEffect(() => {

        startTimer();
        return () => clearTimeout(timer);
    },);

    const start = () => {
        setTimeLeft(60);
        clearTimeout(timer);
        startTimer();
    }



    const HnadleFunc = () => {
        if ((otp[1] + otp[2] + otp[3] + otp[4]).length == 4) {
            console.log('api call for the vefirication and next page')
            setflg(false)
        } else {
            setflg(true)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#FFFFF7' }}>
                <Text style={{
                    fontSize: 17,
                    marginTop: height * 0.1,
                    marginHorizontal: 10
                }}>
                    Enter the OTP number just sent you at 9199013014 number
                </Text>

                <View style={styles.otpContainer}>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 1: text });
                                text && secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={secondInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 2: text });
                                text ? thirdInput.current.focus() : firstInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 3: text });
                                text ? fourthInput.current.focus() : secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                !text && thirdInput.current.focus();
                            }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {flg ? <Text style={{ color: 'red' }}>Please enter otp carefully</Text> : null}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ marginHorizontal: 15 }}>If you are having some network issue or not getting otp then you can reset  {timeLeft == 0 ? null : <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>{timeLeft} Second</Text>}</Text>
                    {timeLeft == 0 ? <TouchableOpacity onPress={start}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Reset OTP?</Text>
                    </TouchableOpacity> : null}
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-end", marginBottom: 30,
                    marginHorizontal: 15
                }}>
                    <AppButton onPress={HnadleFunc} title="Verify" size="sm" backgroundColor="#007bff" />
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#004d40", "#009688", 'red']}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    appButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,

        lineHeight: 20 * 1.4,

        textAlign: 'center',
    },
    title: {
        fontSize: 20,

        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },

    phoneNumberText: {
        fontSize: 18,

        lineHeight: 18 * 1.4,

    },
    otpContainer: {
        marginHorizontal: 10,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    otpBox: {
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: '#ebebe0'

    },
    otpText: {
        fontSize: 25,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    signinButton: {
        borderRadius: 8,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,

    },
});

export default OtpScreen;