import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/Search';
import BollyWood from '../screens/Bollywood';
import HollyWood from '../screens/Hollywood';
import Seriess from '../screens/SeriesScreen';
import Details from '../screens/Details';
import Playing from './Playing';
import CategoriesMovies from './CategoriesMovies';
import MoviesShimmer from '../simmer/MoviesShimmer';
import SereisShimmer from '../simmer/SereisShimmer';
const Stack = createStackNavigator();

const MyStacks=()=> {
  return (
    <Stack.Navigator
    initialRouteName='HomeScreen'>

      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Search" options={{headerShown:false}} component={Search} />
      <Stack.Screen name="BollyWood" options={{headerShown:false}} component={BollyWood} />
      <Stack.Screen name="HollyWood" options={{headerShown:false}} component={HollyWood} />
      <Stack.Screen name="Seriess" options={{headerShown:false}} component={Seriess}/>
      <Stack.Screen name="Details" options={{headerShown:false}} component={Details}/>
      <Stack.Screen name="Playing" options={{headerShown:false}} component={Playing}/>
      <Stack.Screen name="CategoriesMovies" options={{headerShown:false}} component={CategoriesMovies}/>
     
    </Stack.Navigator>
  
  );
}
export default MyStacks;


