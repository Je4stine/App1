import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState, useContext} from 'react';
import { Entypo } from '@expo/vector-icons';
import {AppContext} from '../../AppContext';



const Config = ({navigation}) => {
  const {interval, setInterval}=useContext(AppContext);
  const {ph, setPh}=useContext(AppContext);
  const {moisture, setMoisture}=useContext(AppContext);




  const incrementInterval = ()=>{
    setInterval (interval+1)
  };

  const decrementInterval = ()=>{
    setInterval (interval-1)
  };

  const incrementPh = ()=>{
    setPh (ph+1)
  };

  const decrementPh = ()=>{
    setPh (ph-1)
  };


  const incrementMoisture = ()=>{
    setMoisture (moisture+1)
  };

  const decrementMoisture = ()=>{
    setMoisture (moisture-1)
  };


 
 
  return (
    <View style={{flex:1, marginTop:50}}>
      <Text style={{alignSelf:'center', fontWeight:'700', marginTop:40, fontSize:20, marginBottom:30}}>Tawi Device Configuration</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Qr')}>
        <View style={{height:50, width:200, borderRadius:4, backgroundColor:'#4C9A2A',marginTop:20,marginBottom:40, alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
          <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Scan QR code </Text>
        </View>
      </TouchableOpacity>

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:40,marginRight:40, marginBottom:15}}>
        
        <Text style={{fontSize:20}}>Device interval</Text>
        
        <View style={{height:50, width:100, borderRadius:4, borderWidth:1, borderColor:'black', flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:20, marginLeft:10}}>{interval} sec</Text>
            <View style={{alignItems:'flex-end', justifyContent:'center', marginLeft:10}}>
            
            <TouchableOpacity onPress={decrementInterval}>
            <Entypo name="chevron-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementInterval}>
            <Entypo name="chevron-down" size={20} color="black" />
            </TouchableOpacity>
            </View>
        </View>
       
      </View>



      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:40,marginRight:40, marginBottom:15}}>
        <Text style={{fontSize:20}}>Ph sensor interval</Text>
        <View style={{height:50, width:100, borderRadius:4, borderWidth:1, borderColor:'black', flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:20, marginLeft:10}}>{ph} sec</Text>
            <View style={{alignItems:'flex-end', justifyContent:'center', marginLeft:10}}>
            
            <TouchableOpacity onPress={decrementPh}>
            <Entypo name="chevron-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementPh}>
            <Entypo name="chevron-down" size={20} color="black" />
            </TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginLeft:40,marginRight:40,  marginBottom:15}}>
        <Text style={{fontSize:20}}>Mositure sensor interval</Text>
        <View style={{height:50, width:100, borderRadius:4, borderWidth:1, borderColor:'black', flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:20, marginLeft:10}}>{moisture} sec</Text>
            <View style={{alignItems:'flex-end', justifyContent:'center', marginLeft:10}}>
            
            <TouchableOpacity onPress={decrementMoisture}>
            <Entypo name="chevron-up" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementMoisture}>
            <Entypo name="chevron-down" size={20} color="black" />
            </TouchableOpacity>
            </View>
        </View>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('DashBoard')}>
      <View style={{height:50, width:200, borderRadius:4, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Configure</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Config;