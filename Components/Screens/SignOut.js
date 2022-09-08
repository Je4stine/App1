import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';

const SignOut = ({navigation}) => {

    const signOut =()=>{
        Auth.signOut();
        BackHandler.exitApp();
    }
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity onPress={signOut}>
      <Text  style={{fontSize:25, fontWeight:'bold', color:'red'}}>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignOut;