import {createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from '../screens/Home'
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();
const screenOptionStyle ={
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;