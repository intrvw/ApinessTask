import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function Navigations(){
    return(
    <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="LoginScreen" >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}