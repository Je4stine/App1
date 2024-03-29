import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Screens/Login';
import SignUp from './Components/Screens/SignUp';
import Config from './Components/Screens/Config';
import DashBoard from './Components/Screens/DashBoard';
import RootNavigation from './Navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './AppContext';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)


export default function App() {
  return (
    <View style={styles.container}>
      <AppProvider>
        
         <RootNavigation/>
        
       </AppProvider>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
