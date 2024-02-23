import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Winnings from './Winnings';
import LeaderBoard from './LeaderBoard';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const Tab = createMaterialTopTabNavigator();

export default function Details() {
    return (

        <Tab.Navigator
            initialRouteName='Winnings'
            screenOptions={{
                tabBarContentContainerStyle: { height: height * 0.045 },
                tabBarLabelStyle: { paddingBottom: 4, fontSize: 12, fontWeight: 'bold', fontStyle: 'italic', color: 'black' },
                tabBarIndicatorStyle: { backgroundColor: 'black', width: width * 0.24, marginHorizontal: 55, borderRadius: 20, height: 3 }

            }}>
            <Tab.Screen name="Winnings" component={Winnings} />
            <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
        </Tab.Navigator>

    );
}
