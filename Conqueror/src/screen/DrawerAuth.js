import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerAuth = ()=> {
  return (
   
      <Drawer.Navigator  
      drawerContent={(props) =><DrawerContent {...props}/>}
      >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown:false}}
        screenOptions={{
       
        }}
      />
      
    
    
    </Drawer.Navigator>
  );
}
export default DrawerAuth;
