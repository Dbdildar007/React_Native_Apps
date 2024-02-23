import react from 'react'
import { View, Dimensions, Text, FlatList } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react'


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { width, height } = Dimensions.get('screen');

const MoviesShimmer = () => {
 
    return (
        <View style={{marginTop:height*0.040}}>

            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:width*0.020,marginVertical:height*0.005}}>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:width*0.020,marginVertical:height*0.005}}>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:width*0.020,marginVertical:height*0.005}}>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:width*0.020,marginVertical:height*0.005}}>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:width*0.020,marginVertical:height*0.005}}>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            <ShimmerPlaceholder shimmerColors={['#61616D', '#61616D', '#8B8B9B']} style={{height:height*0.15,width:width*0.30,borderRadius:14}}/>
            </View>
           
        </View>
    )
}
export default MoviesShimmer;




