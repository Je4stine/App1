import { View, ActivityIndicator } from 'react-native';
import React,{useState, useEffect, useContext} from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Auth, Hub} from 'aws-amplify';
import Spinner from 'react-native-loading-spinner-overlay';
import { AppContext } from '../AppContext';



import SignUp from '../Components/Screens/SignUp';
import Login from '../Components/Screens/Login';
import Config from '../Components/Screens/Config';
import DashBoard from '../Components/Screens/DashBoard';
import QrScanner from '../Components/Screens/QrScanner';
import Devices from '../Components/Screens/Devices';
import Sensors from '../Components/Screens/Sensors';
import Graphs from '../Components/Screens/Graphs';
import Reset from '../Components/Screens/Reset';
import SignOut from '../Components/Screens/SignOut';

import Account from '../Components/Screens/Account';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();

function AuthStackScreen (){
  return(
  <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <AuthStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <AuthStack.Screen name="Qr" component={QrScanner} options={{headerShown:false}}/>
        <AuthStack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
        <AuthStack.Screen name = 'Home'component={RootNavigation} options={{headerShown:false}}/>
  </AuthStack.Navigator>
  );
}



function StackNavigation() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
        <Stack.Screen name="Qr" component={QrScanner} options={{headerShown:false}}/>
        <Stack.Screen name="Sensor" component={Sensors} options={{headerShown:false}}/>
        <Stack.Screen name="Device" component={Devices} options={{headerShown:false}}/>
        <Stack.Screen name='Graphs' component={Graphs} options={{headerShown:false}}/>
        <Stack.Screen name ='Reset' component={Reset} options={{headerShown:false}} />
      </Stack.Navigator>
  );
};

function DrawerScreens (){
  return(
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name='Home' component={StackNavigation}/>
      <Drawer.Screen name='Acount' component={Account}/>
      <Drawer.Screen name='SignOut' component={SignOut}/>
    </Drawer.Navigator>
  )
}


function RootNavigation(){
  const [cuser, setCuser]=useState(undefined);
  const [loading, setLoading]=useState(false);
  const {user, setUser, signedIn, setSignedIn}=useContext(AppContext);

 const checkUser =async()=>{
  try{
  const authUser = await Auth.currentAuthenticatedUser();
  setCuser(authUser);
  setLoading(false);
  } catch(err){
    console.log(err)
  }
  }


  useEffect(()=>{
    checkUser();
  },[]);

  return(
    <NavigationContainer>
      {signedIn?( 
        <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name='Home' component={StackNavigation}/>
        <Drawer.Screen name='Acount' component={Account}/>
        <Drawer.Screen name='SignOut' component={SignOut}/>
        </Drawer.Navigator>
      ):(
        <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <AuthStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <AuthStack.Screen name="Qr" component={QrScanner} options={{headerShown:false}}/>
        <AuthStack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
        <AuthStack.Screen name = 'Home'component={RootNavigation} options={{headerShown:false}}/>
        </AuthStack.Navigator>
      ) }
    </NavigationContainer>
  )
 
};




export default RootNavigation;
