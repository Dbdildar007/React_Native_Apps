import { useState } from 'react'
import React from 'react'
import { View, Text, Dimensions,Alert, Share,Image, Clipboard,StyleSheet,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Oction from 'react-native-vector-icons/Octicons'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Refer = () => {

    
    const [Code, setCode] = useState('Dilar994DB');
    const copyToClipboard = () => {
        Clipboard.setString(Code);
    };


    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              `React Native | A framework for ${Code}building native apps using React`,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };


    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: height * 0.070, flexDirection: 'row', alignItems: 'center', backgroundColor: 'black' }}>
                <TouchableOpacity onPress={()=>console.log('goBack()')}>
                 <Icon name='arrow-left' color='white' size={32} style={{ marginStart: 15 }}/>
                 </TouchableOpacity>
                <Text style={{ color: 'white', paddingStart: 15, fontWeight: 'bold', fontSize: 20 }}>Refe & Earn</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>

                <Image style={{ height: height * 0.14, width: width * 0.2 }} source={require('../assets/arrows.png')} />
                <Image style={{ height: height * 0.14, width: width * 0.3 }} source={require('../assets/register.png')} />
                <Image style={{ height: height * 0.13, width: width * 0.3 }} source={require('../assets/bonus.png')} />

            </View>
            <View style={{ marginTop: 20, marginHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 17 }}>Each successful refer will earn you total ₹50 Cash</Text>
                <Text style={{ fontSize: 17 }}> Bonus & your referred friend will earn ₹50 Cash</Text>
                <Text style={{ fontSize: 17 }}>Bonus.</Text>
            </View>

            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Your Referal Code.</Text>

                <View style={{
                    marginTop: 8, borderWidth: 2,
                    borderStyle: 'dashed',
                    borderColor: 'blue',
                    borderTopColor: 'white',
                    backgroundColor: '#BCC6BC',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10

                }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#0F31A8', marginHorizontal: 15 }}>{Code}</Text>

                    <TouchableOpacity onPress={() => copyToClipboard()}>
                        <Oction name='copy' size={25} color='black' style={{ paddingEnd: 10 }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ paddingTop: 20, textDecorationLine: 'underline', color: 'blue' }}>How deos it work?</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <Image style={{ height: height * 0.040, width: width * 0.14 }} source={require('../assets/arrows.png')} />
                <Text>Invite your Friend to register on this App.</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image style={{ height: height * 0.040, width: width * 0.090,marginStart:13}} source={require('../assets/register.png')} />
                <Text style={{paddingEnd:width*0.2,paddingStart:10}}>Once your referred Friend will finish their registration on this application you will get referal bonus & your referred Friend will also get signup cash bonus.</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:20 }}>
                <Image style={{ height: height * 0.040, width: width * 0.1,marginStart:10}} source={require('../assets/reward.png')} />
                <Text style={{paddingEnd:width*0.2,paddingStart:10}}>The benefits associated with referral bonus are only applicable on this application.</Text>
            </View>

            <View style={{
                    flex: 1,
                    justifyContent: "flex-end", marginBottom: 30,
                    marginHorizontal: 15
                }}>
                    <AppButton onPress={onShare} title="share" size="sm" backgroundColor="#007bff" />
                </View>



        </View>
    )
}



TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["blue", "blue", 'white']}
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
    },})
export default Refer;