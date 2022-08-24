import { View, Text } from 'react-native';
import React,{useState, useEffect} from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


import SignUp from '../Components/Screens/SignUp';
import Login from '../Components/Screens/Login';
import Config from '../Components/Screens/Config';
import DashBoard from '../Components/Screens/DashBoard';
import QrScanner from '../Components/Screens/QrScanner';
import Devices from '../Components/Screens/Devices';
import Sensors from '../Components/Screens/Sensors';
import Graphs from '../Components/Screens/Graphs';

import Account from '../Components/Screens/Account';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();



function StackNavigation() {
  return (
      <Stack.Navigator >
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
         <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
         <Stack.Screen name="Config" component={Config} options={{headerShown:false}}/>
        <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
        <Stack.Screen name="Qr" component={QrScanner} options={{headerShown:false}}/>
        <Stack.Screen name="Sensor" component={Sensors} options={{headerShown:false}}/>
        <Stack.Screen name="Device" component={Devices} options={{headerShown:false}}/>
        <Stack.Screen name='Graphs' component={Graphs} options={{headerShown:false}}/>
       
      </Stack.Navigator>
  );
}


function RootNavigation(){
  return(
    
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name='Home' component={StackNavigation}/>
      <Drawer.Screen name='Acount' component={Account}/>
    </Drawer.Navigator>
  );
};

export default RootNavigation;

// function AuthStackScreen (){
//   <AuthStack.Navigator>
//         <AuthStack.Screen name='Login' component={Login} options={{headerShown:false}}/>
//         <AuthStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
//         <AuthStack.Screen name="Config" component={Config} options={{headerShown:false}}/>
//         <AuthStack.Screen name = 'Home'component={RootNavigation} options={{headerShown:false}}/>
//   </AuthStack.Navigator>
// }


// export default function MainNavigator(){
//   const [isFirstLaunch, setisFirstLaunch] = useState(null);
//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value=>{
//       if(value==null){
//         AsyncStorage.setItem('alreadyLaunched', 'true');
//         setisFirstLaunch(true);
//       } else{
//         setisFirstLaunch(false)
//       }
//     });
//   } , []);


  
//   if(isFirstLaunch==null){
//     return null;
//   } else if(isFirstLaunch==true){
//     return( 
//     AuthStackScreen()
//     )
//   }else{
//     return ( 
//     RootNavigation())}
// }
