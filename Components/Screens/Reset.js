import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const Reset = () => {
    const [username, setUsername] = useState('');
    const [newPassword, newOldPassword] = useState('');

  return (
    <View style={{flex:1, backgroundColor:"#192734"}} >
       <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'space-between',alignItems:'center', padding:10, flexDirection:'row', marginBottom:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={require('../assets/logo.png')} style={{height:50,width:45, marginRight:20}}/>
              <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>Reset Password</Text>
            </View>
        </View>

        <View style={{height:80, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2, padding:10, alignItems:'center'}}>
        <TextInput
              style={{padding:9, height:40, width:'80%', borderColor:'#fff', borderWidth:0.5, borderRadius:4, marginTop:5, color:'#fff'}}
              placeholder='Old password'
              onChange={(text) => setUsername(text)}
          />
            <TextInput
              style={{padding:9, height:40, width:'80%', borderColor:'#fff', borderWidth:0.5, borderRadius:4, marginTop:5, color:'#fff'}}
              placeholder='New password'
              onChange={(text) => newOldPassword(text)}
          />


        </View>
    </View>
  )
}

export default Reset