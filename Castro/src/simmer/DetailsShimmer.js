import react from 'react'
import { View, Dimensions, Text } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react'


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { width, height } = Dimensions.get('screen');

const DetailsShimmer = () => {
    const [data, setdata] = useState([1, 2, 3, 5]);
    return (
        <View>

            <ShimmerPlaceholder style={{ width: width, height: height * 0.3 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            <ShimmerPlaceholder style={{ marginTop: 15, marginStart: 15, height: height * 0.040, width: width * 0.7, borderRadius: 8 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']}
            />
            <ShimmerPlaceholder style={{ marginTop: 10, marginStart: 15, borderRadius: 6 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            <ShimmerPlaceholder style={{ marginTop: 10, marginStart: 15, borderRadius: 6, height: height * 0.050, borderRadius: 12, width: width * 0.90 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

            <ShimmerPlaceholder style={{ marginTop: 10, marginStart: 15, borderRadius: 6, height: height * 0.15, width: width * 0.9, borderRadius: 10 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15}}>

            <ShimmerPlaceholder style={{ marginTop: 10, borderRadius:60,height:height*0.060,width:width*0.130 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                       <ShimmerPlaceholder style={{ marginTop: 10, borderRadius:60,height:height*0.060,width:width*0.130 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
                       <ShimmerPlaceholder style={{ marginTop: 10, borderRadius:60,height:height*0.060,width:width*0.130 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />    
</View>

<ShimmerPlaceholder style={{ marginTop: 10, borderRadius:60,width:width*0.95,height:height*0.010,marginHorizontal:10 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

<View style={{flexDirection:"row",justifyContent:'flex-start'}}>
<ShimmerPlaceholder style={{ marginTop: 10, marginStart: 15, borderRadius:10,height:height*0.0350,width:width*0.40 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

<ShimmerPlaceholder style={{ marginTop: 10, marginStart: 15, borderRadius:10,height:height*0.0350,width:width*0.40 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />
</View>

<View style={{flexDirection:'row'}}>

<ShimmerPlaceholder style={{ marginTop: 10, marginStart: 15, borderRadius:13,height:height*0.150,width:width*0.30 }}
                shimmerColors={['#61616D', '#61616D', '#8B8B9B']} />

<View>


<ShimmerPlaceholder style={{height:height*0.040,marginTop:30,borderRadius:10,width:width*0.57,marginStart:15}}
shimmerColors={['#61616D', '#61616D', '#8B8B9B']}/>

<ShimmerPlaceholder style={{marginTop:15,marginStart:20,borderRadius:12,width:width*0.55}}
shimmerColors={['#61616D', '#61616D', '#8B8B9B']}/>

</View>
        </View>
        </View>
    )
}
export default DetailsShimmer;




