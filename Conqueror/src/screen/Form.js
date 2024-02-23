import React from 'react';
import { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import {
  launchImageLibrary
} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Dropdown } from 'react-native-element-dropdown';



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Form = ({ navigation }) => {
  const [flg, setflg] = useState(false);
  const [errorflg, seterrorflg] = useState(false);
  const [number, setnumber] = useState();
  const [val, setval] = useState(0);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [filePath, setFilePath] = useState('');

  console.log('file first' + filePath);


  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {


      if (response.didCancel) {
        alert("you didn't pick any photo");
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Camera Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      setFilePath(response.assets[0]);


    });
  };


  const data = [
    { label: 'select', value: null },
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },

    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
    { label: 'Jharkhand', value: 'Jharkhand' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },

    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
    { label: 'Mizoram', value: 'Mizoram' },
    { label: 'Nagaland', value: 'Nagaland' },
    { label: 'Odisha', value: 'Odisha' },
    { label: 'Punjab', value: 'Punjab' },

    { label: 'Rajasthan', value: 'Rajasthan' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Tripura', value: 'Tripura' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { label: 'Uttarakhand', value: 'Uttarakhand' },
    { label: 'West Bengal', value: 'West Bengal' }
  ];

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <View style={{ marginBottom: 10, zIndex: 999 }}>
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Choose State
          </Text>
        </View>


      );
    }
    return null;
  };


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

        <View style={{ height: height * 0.25, borderBottomRightRadius: width * 0.45, borderBottomStartRadius: 0, backgroundColor: '#E35746', elevation: 10, shadowColor: 'black', width: width }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.245, borderBottomRightRadius: 200, borderBottomStartRadius: 0, backgroundColor: 'red', width: width }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.11, width: width * 0.235, elevation: 10, borderRadius: 100, backgroundColor: 'grey' }}>
              <TouchableOpacity onPress={() => chooseFile('photo')}>


                {filePath.uri?
                  <Image
                  source={{
                    uri: filePath.uri,
                  }}
                  style={{ height:height*0.105, width:width*0.223 ,borderRadius:40}}
                />:

                <Icon name='person' size={75} color='white' />}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.070 }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "#AFB9E5", height: height * 0.055, width: width * 0.7, marginHorizontal: width * 0.15, borderRadius: 12, elevation: 10, shadowColor: 'black' }}>
            <TextInput
              style={{ width: width * 0.65, fontSize: 16, fontWeight: 'bold' }}
              placeholder='Enter your Team name'
              autoCapitalize='characters'
            />
          </View>


          <View style={{ height: height * 0.055, width: width * 0.7, marginTop: height*0.060 }}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              dropdownPosition='bottom'
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }} />

          </View>

        </View>


        <View style={{
                    justifyContent: "flex-end", marginBottom: 30,
                    marginHorizontal: 15,flex:1
                }}>
                    <AppButton onPress={()=>console.log('go forwarrd')} title="Verify" size="sm" backgroundColor="#007bff" />
                </View>
       
      
      </View>
    </TouchableWithoutFeedback>

  );
};



TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
<TouchableOpacity onPress={onPress}>
<LinearGradient
colors={["red", "red", 'white']}
style={styles.appButtonContainer}
>
<Text style={styles.appButtonText}>{title}</Text>
</LinearGradient>
</TouchableOpacity>
);



const styles = StyleSheet.create({

  dropdown: {
    height: height * 0.050,
    borderColor: 'gray',
    backgroundColor: '#CBD0E8',
    borderRadius: 20,
    paddingHorizontal: 8,
  },
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
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#E3E5EE',
    left: 22,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 8,
    fontSize: 14,

  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    paddingStart: 10
  },
  iconStyle: {
    width: 20,
    height: 40,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    marginTop: 10
  },
});






export default Form;