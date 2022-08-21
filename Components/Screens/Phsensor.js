import { View, Text, Image, TextInput } from 'react-native';
import React,{useState} from 'react';
 
const Phsensor=({
    phValue="0",

})=> {
    

  return (
    <View style={{height:250, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2, justifyContent:'center'}}>
            <View style={{width:'90%', height:45, borderColor:'#fff', borderWidth:3, borderRadius:12, alignSelf:'center', padding:10, flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor:'#2A4156', marginBottom:10, marginTop:10}}>
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'red', marginRight:5}}>
                </View>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'yellow', marginRight:5}}>
                </View>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'green', marginRight:5}}>
                </View>
                </View>
                <View>
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>Ph transmitter</Text>  
                </View>
             
            </View>
                <View style={{alignContent:'center'}}>
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:10, alignItems:'center'}}>
                    <Image source={require('../assets/kind.png')} style={{height:30, width:20, marginRight:20}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:12}}>PH value</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'#87CEEB', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>{phValue}</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}></Text>
                </View>
                </View>
        </View> 

  );
};

export default Phsensor;