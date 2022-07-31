import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import SignUp from '../Components/Screens/SignUp';
import Login from '../Components/Screens/Login';
import Config from '../Components/Screens/Config';
import DashBoard from '../Components/Screens/DashBoard';
import QrScanner from '../Components/Screens/QrScanner';
import Devices from '../Components/Screens/Devices';
import Sensors from '../Components/Screens/Sensors';
import Graphs from '../Components/Screens/Graphs';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
        <Stack.Screen name="Config" component={Config} options={{headerShown:false}}/>
        <Stack.Screen name="Qr" component={QrScanner} options={{headerShown:false}}/>
        <Stack.Screen name="Sensor" component={Sensors} options={{headerShown:false}}/>
        <Stack.Screen name="Device" component={Devices} options={{headerShown:false}}/>
        <Stack.Screen name='Graphs' component={Graphs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;