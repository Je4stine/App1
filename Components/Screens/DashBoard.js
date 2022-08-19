import { Text, View, Image, TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';
import Devices from './Devices';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';




const DashBoard=({navigation})=> {
  const [deviceData, setDeviceData]=useState([]);
 
  useEffect (()=>{
    fetch ('https://tawi-edge-device-realtime-data.s3.amazonaws.com/tawi-device/tawi_edge_device/94b555c72160')
      .then((response)=>response.json())
      .then((response)=>{
        // console.log(response);
        setDeviceData(response);
        AsyncStorage.setItem("user", JSON.stringify(response));
      });
  },[]);
//  fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         receideData.push(data) 
//       })
//       .then(()=>{
//         loadData()
//       });
//     });



    return (
      <View style={{flex:1, backgroundColor:"#192734"}}>
        <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'space-between',alignItems:'center', padding:10, flexDirection:'row', marginBottom:20}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/logo.png')} style={{height:50,width:45, marginRight:20}}/>
          <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>TawioT</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Ionicons name="menu" size={33} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <Devices DeviceId={deviceData.SerialNumber}/>
        
        
        
        <LinearGradient  colors={['#42A341', '#074C00', '#074C00']} style={{height:50, width:'100%', position:'absolute',bottom:2,backgroundColor:'green', borderRadius:10, justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontSize:25, fontWeight:'900',color:'#fff'}}>
              Link a New Node
            </Text>
          </LinearGradient>
      </View>
    )
};

export default DashBoard;


{/* <LinearGradient
colors={['#42A341', '#074C00', '#074C00']}
style={{height:40,width:'90%', borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:10, alignSelf:'center'}}>            
<Ionicons name="eye-sharp" size={24} color="blue" />
<Text style={{fontSize:20, color:'#fff', alignSelf:'center', marginLeft:10}}>View Data</Text>
</LinearGradient> */}