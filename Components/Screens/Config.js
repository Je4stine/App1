import { View, Text, TouchableOpacity,Alert } from 'react-native';
import React, {useState, useContext} from 'react';
import { Entypo } from '@expo/vector-icons';
import {AppContext} from '../../AppContext';
import { LinearGradient } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Config = ({navigation}) => {
  const {qrcode, setQrcode}=useContext(AppContext)

    const serialnumber = AsyncStorage.getItem('serialnumber');
    // const passer = JSON.parse(serialnumber);
    
 
    const handleNav =()=>{
      if (serialnumber==null){
        alert('Please scan a device before you continue')
      } else{
        navigation.navigate('DashBoard');
        console.log(serialnumber._W)
        setQrcode(serialnumber._W)
      }
    };
 
 
  return (
    <View style={{flex:1, marginTop:50}}>
      <Text style={{alignSelf:'center', fontWeight:'700', marginTop:40, fontSize:20, marginBottom:30}}>Tawi Device Configuration</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Qr')}>
        <View style={{height:50, width:200, borderRadius:4, backgroundColor:'#4C9A2A',marginTop:20,marginBottom:40, alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
          <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Scan QR code </Text>
        </View>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={handleNav}>
      <View style={{height:50, width:200, borderRadius:4, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Configure</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Config;