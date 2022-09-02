import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';

const SignOut = () => {

    const signOut =()=>{
        Auth.signOut();
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