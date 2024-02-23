import React, { useState} from 'react';
import {  Modal, StyleSheet, Text, Pressable, View, Dimensions, TextInput } from 'react-native';


import LottieView from "lottie-react-native";





const Joined = () => {


 
    const height = Dimensions.get('screen').height
    const width = Dimensions.get('screen').width
    const [modalVisible, setModalVisible] = useState(false);

  
    
    return (

        <View style={styles.centeredView}>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>

                <Pressable onPress={() =>setModalVisible(false)} style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 15,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 10,
                        height: height * 0.30,
                        width: width * 0.75, justifyContent: 'center'

                    }}> 
                    <LottieView style={{height:height*0.55}} source={require('../assets/animation_lm7po5e9.json')} autoPlay loop />

                    
                    </View>
                </Pressable>
                
            </Modal>

            <Pressable
                style={{
                    borderRadius: 10,
                    padding: 10,
                    elevation: 2,
                    backgroundColor: 'grey',
                }}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>

        </View>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default Joined;