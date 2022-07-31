import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Devices from './Devices';
import { Ionicons } from '@expo/vector-icons';

const DashBoard=({navigation})=> {
    return (
      <View style={{flex:1, backgroundColor:"#192734"}}>
        <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'space-between',alignItems:'center', padding:10, flexDirection:'row', marginBottom:20}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/logo.png')} style={{height:50,width:45, marginRight:20}}/>
          <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>TawioT</Text>
          </View>
          <Ionicons name="menu" size={33} color="#fff" />
        </View>
        
        <Devices />
        <Devices DeviceId='Pivot01c'/>
        <Devices DeviceId='Pivot01d'/>
        <Devices DeviceId='Pivot01e'/>
        
        <View style={{height:50, width:'100%', position:'absolute',bottom:2,backgroundColor:'green', borderRadius:10, justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontSize:25, fontWeight:'900',color:'#fff'}}>
              Link a New Node
            </Text>
          </View>
      </View>
    )
};

export default DashBoard;