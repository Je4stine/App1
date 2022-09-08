import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Devices=({
    DeviceId ="Loading...",
}) =>{
    const navigation = useNavigation(); 
    const [id, setID]=useState(DeviceId);
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Sensor',{ snNumber: DeviceId, })}>
    <View style={{width:'90%', height:90, borderColor:'#fff', borderWidth:3, borderRadius:12, alignSelf:'center', padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#2A4156', marginBottom:10}}>
        <View style={{height:10, width:10, borderRadius:5, backgroundColor:'green'}}>
        </View>
        <View style={{height:10, width:10, borderRadius:5, backgroundColor:'white'}}>
        </View>
        <View style={{height:10, width:10, borderRadius:5, backgroundColor:'white'}}>
        </View>
        <View style={{height:40, width:'40%', backgroundColor:'#192734', borderRadius:5,justifyContent:'center',alignItems:'flex-end', padding:10}}>
            <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>Node ID: </Text>
        </View>
          <Text style={{padding:10, height:40, width:'40%', borderColor:'green', borderRadius:5, borderWidth:3, backgroundColor:'#192734', color:'#fff', fontSize:15}}>
            {DeviceId}
          </Text>
    </View>
    </TouchableOpacity>
  )
};

export default Devices;