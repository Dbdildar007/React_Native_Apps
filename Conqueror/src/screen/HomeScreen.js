

import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './Home';
import History from './History'
import Wallet from './Wallet';
import MyPlace from './MyPlace';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
     
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad'}}
            style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="history" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="wallet" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="My Place"
                component={MyPlace}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default HomeScreen;



