import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React,{useEffect, useState, useContext} from 'react';
import Devices from './Devices';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import {Auth} from 'aws-amplify';




const DashBoard=({navigation})=> {
  const {qrcode, setQrcode}=useContext(AppContext);
  const [receivedData, setReceivedData]=useState([]);
  const [deviceData, setDeviceData]=useState([]);
  const [appData, setAppData]=useState([]);

 
 
  

  useEffect (()=>{

    async function fetchAllData(){
      const user = await Auth.currentAuthenticatedUser();
     
     
      try{
        const qrdata = await API.graphql(graphqlOperation(queries.listAppData,{
          filter:{
            createdBy: {contains:user.attributes.email}
          }
        }));
        setReceivedData(qrdata.data.listAppData.items);
        console.log(user.attributes.email);
    
       
      }catch(err){
        console.log(err);
      }
    };


    fetchAllData();

    const interval = setInterval(() => {
          
      fetchAllData();
    }, 10000);

    return ()=>clearInterval(interval)
 
 
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

        <FlatList
          data={receivedData}
          renderItem={({item})=><Devices DeviceId={item.qrcode}/>}
          keyExtractor={(item)=>item.qrcode}
        />

    
     
        <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('Qr')}}>
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



