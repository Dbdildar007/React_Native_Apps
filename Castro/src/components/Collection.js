import react from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width;

const Collection = () => {
  const navigation = useNavigation();

  const { params: item } = useRoute();
  //console.log(item.Sessions.length);

  const [data, setdata] = useState([1, 2, 3, 4, 5, 6]);


  const [value, setValue] = useState();
  const [isFocus, setIsFocus] = useState(false);


  /*  const data1 = [
      { label: 'Session1', value: 'Session1' },
      { label: 'Session2', value: 'Session2' },
      { label: 'Session3', value: 'Session3' },
      { label: 'Session4', value: 'Session4' },
      { label: 'Session5', value: 'Session5' }
    ];
  */

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList

      
      ListHeaderComponent={(
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        containerStyle={{ backgroundColor: 'grey', borderRadius: 14, marginTop: 15, elevation: 10 }}
        data={item.Sessions}
        maxHeight={height * 0.3}
        labelField="label"
        valueField="value"
        placeholder={value}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />)}
      ListFooterComponent={<View style={{ height: height * 0.030 }}></View>}
      data={data}
      nestedScrollEnabled={true}
      scrollEnabled={false}
      keyExtractor={key => key}
      renderItem={(item) => <CollectionData item={item} navigation={navigation} />} />
    </View>
  )
}
export default Collection;


const CollectionData = ({ item, navigation }) => {

  return (
    <View style={{ flex: 1 }}>

      <Pressable onPress={() => navigation.navigate('Playing')} style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'flex-start' }}>

        <Image source={require('../assests/poster.jpg')} style={{ height: height * 0.11, width: width * 0.3, borderRadius: 10 }} />

        <View style={{ position: 'absolute', marginTop: height * 0.043, marginStart: width * 0.13 }}>
          <Icon name='play' color='white' size={20} />
        </View>

        <View style={{ marginTop: 20, marginStart: 15, marginEnd: 25 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>Breaking news: Ek Rahasya</Text>
          <Text style={{ color: 'blue', paddingTop: 4 }}>S1 E2 : 25 Aug 2023 : 30m</Text>
        </View>
      </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({

  dropdown: {
    height: height * 0.045,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    backgroundColor: 'grey',
    width: width * 0.4,
    marginStart: 15,
    elevation: 10
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'blue', fontWeight: 'bold'
  },
  iconStyle: {
    width: 30,
    height: 20,
    tintColor: 'black'
  }
});






