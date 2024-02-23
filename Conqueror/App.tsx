import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screen/Welcome'
import Register from './src/screen/Register';
import Login from './src/screen/Login';
import CodeScreen from './src/screen/CodeScreen';
import OtpScreen from './src/screen/OtpScreen';
import Contest from './src/screen/Contest';
import HomeScreen from './src/screen/HomeScreen';
import Details from './src/screen/Details';
import ContestDetail from './src/screen/ContestDetail';
import TopModal from './src/components/TopModel';
import Form from './src/screen/Form';
import Home from './src/screen/Home';
import AddCash from './src/screen/AddCash.js';
import DrawerAuth from './src/screen/DrawerAuth';
import History from './src/screen/History'
import Wallet from './src/screen/Wallet';
import MyPlace from './src/screen/MyPlace';
import Refer from './src/Branches/Refer';
import Withdraw from './src/screen/Withdraw';
import JoiningModel from './src/screen/JoiningModel';
import Joined from './src/screen/Joined';

import Demo from './Demo';
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = 'TopModal' options={{headerShown:false}} component={Demo}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}