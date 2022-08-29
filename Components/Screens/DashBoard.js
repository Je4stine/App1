import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React,{useEffect, useState, useContext} from 'react';
import Devices from './Devices';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';



const DashBoard=({navigation})=> {
  const {qrcode, setQrcode}=useContext(AppContext);
  const [data, setData]=useState([]);
  
  // console.log(qrcode)
  
  async function fetchAllData(){
    try{
      const {data} = await API.graphql(graphqlOperation(queries.listAppData));
      setData(data.listAppData.items)
      
    }catch(err){
      console.log(err)
    }
  }

  const [deviceData, setDeviceData]=useState([]);
  const baseUrl= 'https://tawi-edge-device-realtime-data.s3.amazonaws.com/tawi-device/tawi_edge_device/'
  


  const serialnumber = AsyncStorage.getItem('serialnumber');
 
  useEffect (()=>{
  
  fetchAllData();
  console.log(data.qrcode)

   

    fetch (baseUrl+data, {
    headers :{
      'Cache-Control':'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires':'0'
    }
  })
     
      .then((response)=>response.json())
      .then((response)=>{
        // console.log(response);
        setDeviceData(response);
        console.log(response);
        console.log(data.item.qrcode);
      
      });
  },[]);





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

      



        
        
        <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('Config')}}>
        <LinearGradient  colors={['#42A341', '#074C00', '#074C00']} style={{height:50, width:'98%', position:'absolute',bottom:5,backgroundColor:'green', borderRadius:10, justifyContent:'center', alignSelf:"center"}}>
            <Text style={{alignSelf:'center',fontSize:25, fontWeight:'900',color:'#fff'}}>
              Link a New Node
            </Text>
          </LinearGradient>
          </TouchableOpacity>
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
