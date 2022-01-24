import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList, Modal } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function ScreenC(){
  return(
    <View style={styles.container}><Text style = {styles.text}>Helloo</Text></View>  
  )
}
function ScreenD(){
  return(
    <View style={styles.container}><Text style = {styles.text}>Hi</Text></View>  
  )
}

function App() {

  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator
    screenOptions={
    ({route}) => ({
      tabBarIcon:({focused,size,color}) => {
        let iconName;
        if(route.name==="Home"){
          iconName = 'home';
          size =  18;
          color= focused ? '#0fff':'#000';
        }else if(route.name === 'Market'){
          iconName = 'poll';
          size =  18;
          color= focused ? '#0fff':'#000';
        }else if(route.name === 'Trade'){
          iconName = 'shopping-cart';
          size =  18;
          color= focused ? '#0fff':'#000';
        }else if(route.name === 'Wallet'){
          iconName = 'wallet';
          size =  18;
          color= focused ? '#0fff':'#000';
        }
        return(
          <FontAwesome5
            name={iconName}
            size={size}
            color={color}
          />
        )  
      }
    })
  }
  // tabBarOptions={{
  //   activeTintColor: '#0fff'
  // }}
    >
      <Tab.Screen options={{header: () => null}} name="Home" component={ScreenC} />
      <Tab.Screen options={{header: () => null}} name="Market" component={ScreenD} />
      <Tab.Screen options={{header: () => null}} name="Trade" component={ScreenC} />
      <Tab.Screen options={{header: () => null}} name="Wallet" component={ScreenD} />
    </Tab.Navigator></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Navigator:{
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView:{
    flex: 1,
    width: "100%",
  },
  item:{
    flex: 1,
    backgroundColor: '#0fff',
    height: "10%",
    width: "94%",
    margin: 6,
    borderRadius:10,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 38,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  }
})
export default App;