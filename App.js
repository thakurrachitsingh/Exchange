
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Pressable, Button } from "react-native";
import { FlatList, Modal } from "react-native-web";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './screen/ScreenA';
import ScreenB from './screen/ScreenB';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";


const Stack = createStackNavigator();

function App() {
  const [Name, setName] = useState('');
  const [Submitted, setSubmitted] = useState(false)
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{header: () => null}}
        name='ScreenA'
        component={ScreenA}
        />
        <Stack.Screen
        options={{header: () => null}}
        name='ScreenB'
        component={ScreenB}
        />
        <Stack.Screen
        name='App'
        component={App}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button:{
    
  },
  input:{
    backgroundColor: '#ffff',
    width: 230,
    margin: 30,
    padding: 8,
  },
  symbol: {
    height: 150,
    width: '100%',
    margin: 80,
  },
  container: {
    flex: 1,
    backgroundColor: "#15151C",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  item: {
    flex: 1,
    backgroundColor: "#0fff",
    height: "10%",
    width: "94%",
    margin: 6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 38,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
