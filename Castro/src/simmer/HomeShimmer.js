import react from 'react'
import { View, Dimensions, Text } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react'


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { width, height } = Dimensions.get('screen');

const Shimmer = () => {
    const [data, setdata] = useState([1, 2, 3, 5]);
    return (
        <View>

            <ShimmerPlaceholder style={{ width: width, height: height * 0.4 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7, marginHorizontal: 12 }}>

                <ShimmerPlaceholder style={{ height: height * 0.030, borderRadius: 12 }} shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                <ShimmerPlaceholder style={{ width: 40, height: 20, borderRadius: 12 }} shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            </View>

            <View style={{ flexDirection: 'row', marginVertical: 8, marginHorizontal: 5 }}>

                {data.map((item, index) => {
                    return (

                        <View key={index}>
                            <ShimmerPlaceholder style={{ height: height * 0.12, width: width * 0.40, borderRadius: 15, marginHorizontal: 5 }}
                                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                        </View>
                    )
                })}

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7, marginHorizontal: 12 }}>

                <ShimmerPlaceholder style={{ height: height * 0.030, borderRadius: 12 }} shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                <ShimmerPlaceholder style={{ width: 40, height: 20, borderRadius: 12 }} shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            </View>

            <View style={{ flexDirection: 'row', marginVertical: 8, marginHorizontal: 5 }}>

                {data.map((item, index) => {
                    return (

                        <View key={index}>
                            <ShimmerPlaceholder style={{ height: height * 0.12, width: width * 0.40, borderRadius: 15, marginHorizontal: 5 }}
                                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                        </View>
                    )
                })}

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7, marginHorizontal: 12 }}>

                <ShimmerPlaceholder style={{ height: height * 0.030, borderRadius: 12 }} shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                <ShimmerPlaceholder style={{ width: 40, height: 20, borderRadius: 12 }} shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            </View>

            <View style={{ flexDirection: 'row', marginVertical: 8, marginHorizontal: 5 }}>

                {data.map((item, index) => {
                    return (

                        <View key={index}>
                            <ShimmerPlaceholder style={{ height: height * 0.12, width: width * 0.40, borderRadius: 15, marginHorizontal: 5 }}
                                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                        </View>
                    )
                })}

            </View>



        </View>
    )
}
export default Shimmer;




