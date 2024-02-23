import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import MyStack from "./src/components/stack";
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </View>
  )
}
export default App;