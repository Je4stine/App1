import { View, Text, Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import React,{useState, useContext, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';


const Alias =  ({navigation}) => {
  const [formState, setFormState]=useState({});
  const [receivedData, setReceivedData]=useState([]);
  const {serialNumber, setSerialNumber}=useContext(AppContext);


async function dataReset (){
  const qrcode = serialNumber;
  const alias = formState.newname;
  try{
    await API.graphql(
      graphqlOperation(mutations.updateAppData ,{
        input:{qrcode:qrcode, alias: alias}
      })
    )
    navigation.navigate('DashBoard');
      
  }catch(err){
    console.log(err)
  }
}

  const handleReset =()=>{
    dataReset();
    console.log();
    
  };

  const handleChange=(e, text)=>{
    e.persist();
    setNewName(text);
   
    
  }


  useEffect(()=>{
      // getData();
      console.log(serialNumber);
      // console.log(receivedData);
      // (text) => setNewName(text)
  },[])

  return (
    <View style={{flex:1, backgroundColor:"#192734"}}>
        <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'space-between',alignItems:'center', padding:10, flexDirection:'row', marginBottom:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={require('../assets/logo.png')} style={{height:50,width:45, marginRight:20}}/>
              <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>Enter new device Name</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
               <Ionicons name="menu" size={33} color="#fff" />
            </TouchableOpacity>
        </View>

       
        <View style={{height:200, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2, padding:10, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#fff', fontSize:15}}> Rename device</Text>
          <View style={{alignItems:'center'}}>

          <TextInput
              style={{padding:9, height:40, width:300, borderColor:'#fff', borderWidth:0.5, borderRadius:4, marginTop:10, color:'#fff'}}
              placeholder='New name'
              onChangeText={(text) => setFormState({...formState, newname: text})}
              value={formState.newname}
            />
          
          <View style={{height:40, width:100, backgroundColor:'green', borderRadius:5, justifyContent:'center', alignItems:'center', marginTop:20}}>
          <TouchableOpacity style={{width:'80%', }}  onPress={handleReset}>
            <Text style={{color:'#fff', fontSize:20, alignSelf:'center'}}>Submit</Text>
          </TouchableOpacity>
          </View>
       
          </View>
        </View>
    </View>
  )
}

export default Alias;
