import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllSeries from './AllSeries';
import Indian from './Indian';
import TvDrama from './TvDrama';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      initialLayout={AllSeries}
       screenOptions={{
        tabBarLabelStyle: { fontSize:17,fontWeight:'bold',fontStyle:'italic'},
        tabBarInactiveTintColor:'grey',
        tabBarActiveTintColor:'red',
        tabBarContentContainerStyle:{backgroundColor:'black'}
      }}>
        <Tab.Screen name="Series" component={AllSeries} />
        <Tab.Screen name="Indian" component={Indian} />
        <Tab.Screen name="TV-Drama" component={TvDrama} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
