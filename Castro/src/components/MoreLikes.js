import react from 'react'
import { View, Text, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const MoreLike = () => {
    const navigation = useNavigation();
   
    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <View style={{
            flex: 1,

        }}>
            <FlatList
                data={data}
                nestedScrollEnabled={true}
                scrollEnabled={false}
                numColumns={2}
                keyExtractor={key => key}
                renderItem={(itm) =>

                    <View style={{ justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10, flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                            <Image source={require('../assests/poster.jpg')} style={{ height: height * 0.2, width: width * 0.43, borderRadius: 15 }} />
                            <Icon name='play' color='white' size={35} style={{ position: 'absolute', marginStart: width * 0.18, marginTop: height * 0.080 }} />
                        </TouchableOpacity>
                    </View>} />

            <Text style={{ fontSize: 30 }}>bottom</Text>
        </View>
    )
}
export default MoreLike;

