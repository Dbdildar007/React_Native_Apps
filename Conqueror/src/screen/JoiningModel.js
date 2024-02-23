

import React, { useState } from 'react';
import {  Modal, StyleSheet, Text, Pressable, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';


const JoiningModel = () => {

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

                <Pressable onPress={() =>setModalVisible(false)} style={{   flex: 1,
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
                        height: height * 0.45,
                        width: width * 0.85, justifyContent: 'flex-start', padding: 10

                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Details.</Text>
                        <Text style={{ paddingTop: 5, textDecorationLine: 'underline', color: 'blue' }}>Plzz Read the match rules & regulation</Text>
                        <Text style={{ paddingTop: 0, textDecorationLine: 'underline', color: 'blue' }}>before joining the contest.</Text>

                        <Text style={{ paddingTop: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>Enter pubg username</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.85, marginStart: 25, marginEnd: 25 }}>
                            <TextInput
                                placeholder='PLAYER1'
                                style={{ backgroundColor: '#E9DCC9', marginStart: 20, width: width * 0.35, height: height * 0.045, borderRadius: 15, marginTop: 10, paddingStart: 10, fontStyle: 'italic', fontSize: 15 }}
                            />

                            <TextInput
                                placeholder='PLAYER1'
                                style={{ backgroundColor: '#E9DCC9', marginEnd: 20, width: width * 0.35, height: height * 0.045, borderRadius: 15, marginTop: 10, paddingStart: 10, fontStyle: 'italic', fontSize: 15 }}
                            />

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.85, marginStart: 25, marginEnd: 25 }}>
                            <TextInput
                                placeholder='PLAYER1'
                                style={{ backgroundColor: '#E9DCC9', marginStart: 20, width: width * 0.35, height: height * 0.045, borderRadius: 15, marginTop: 10, paddingStart: 10, fontStyle: 'italic', fontSize: 15 }}
                            />

                            <TextInput
                                placeholder='PLAYER1'
                                style={{ backgroundColor: '#E9DCC9', marginEnd: 20, width: width * 0.35, height: height * 0.045, borderRadius: 15, marginTop: 10, paddingStart: 10, fontStyle: 'italic', fontSize: 15 }}
                            />

                        </View>
                        <Text style={{ fontWeight: 'bold', color: "red", paddingTop: 10 }}>Note: Make sure pubg username should be </Text>
                        <Text style={{ fontWeight: 'bold', color: "red" }}>correct </Text>


                        <View style={{ marginTop: height * 0.04, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable
                                style={{ backgroundColor: 'blue', width: width * 0.3, height: height * 0.0450, justifyContent: 'center', borderRadius: 15, elevation: 10, shadowColor: 'black', shadowOffset: 0.4 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>CANCEL</Text>
                            </Pressable>

                            <Pressable
                                style={{ backgroundColor: 'blue', width: width * 0.3, height: height * 0.0450, justifyContent: 'center', borderRadius: 15, elevation: 10, marginStart: 15 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>JOIN</Text>
                            </Pressable>
                        </View>
                        <Text style={{ paddingTop: 6, fontWeight: 'bold' }}>You will get room id & password 15 minuts</Text>
                        <Text style={{ fontWeight: 'bold' }}>before the matching by notification.</Text>
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

export default JoiningModel;