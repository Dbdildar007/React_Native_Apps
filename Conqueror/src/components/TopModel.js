import React from 'react';
import { useRef } from 'react'
import Modal from 'react-native-modalbox';
import {
    Text,
    Button,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const TopModel = (props) => {

    const refdata = useRef(null);

    const focusInput = () => {
        refdata.current.open();
    }
    props.childRef.current = {
        focusInput: focusInput,
    };
    
    return (
        
            <Modal ref={refdata} position={"top"} entry={"top"} style={{
                height: height * 0.29,
                backgroundColor: "white", justifyContent: 'center'
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ paddingTop: 10 }} >Total Balance</Text>
                    <Text style={{ fontSize: 20, paddingTop: 8, fontWeight: 'bold', color: 'black' }}>₹1200</Text>

                    <View style={{ marginTop: 10 }}>
                        <AppButton onPress={() => console.log('add')} title='Add Cash' />
                    </View>

                    <View style={{ borderTopWidth: 0.5, flexDirection: 'row', borderBottomWidth: 0.5, borderColor: 'grey', backgroundColor: 'white', width: width, height: height * 0.050, marginTop: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ paddingStart: 15 }}>Amount Added:</Text>
                        <Text style={{ paddingStart: 15, color: 'black', fontWeight: 'bold' }}>₹500</Text>
                    </View>

                    <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: 'grey', backgroundColor: 'white', width: width, height: height * 0.050, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ paddingStart: 15 }}>Cash bonus:</Text>
                        <Text style={{ paddingStart: 15, color: 'black', fontWeight: 'bold' }}>₹50</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity onPress={() => refdata.current.close()}>
                        <Icon name='keyboard-arrow-up' size={25} />
                    </TouchableOpacity>

                </View>
            </Modal>
    );

}


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#10B91F", "#008000", 'white']}
            style={{
                elevation: 10,
                borderRadius: 12,
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


export default TopModel;