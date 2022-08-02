import { View, Text, Image, TextInput } from 'react-native';
import React,{useState} from 'react';

export default function SensorCard({Depth="10cm",}) {
    const [depth, setDepth]=useState()

  return (
    <View style={{height:250, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2}}>
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
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>Soil-01</Text>  
                </View>
                
               
                <TextInput
                    style={{padding:10, height:30, width:'40%', borderColor:'green', borderRadius:5, borderWidth:3, backgroundColor:'#192734', color:'#fff', fontSize:15, alignItems:'center', justifyContent:'center'}}
                    placeholder={Depth}
                    placeholderTextColor="#fff"
                    onChangeText={(text) => setDepth(text)}
                    // value={id}
                />
            

            </View>
                <View style={{alignContent:'center'}}>
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:10, alignItems:'center'}}>
                    <Image source={require('../assets/water-drop-icon.png')} style={{height:30, width:20, marginRight:20}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:10}}>Moisture</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'#87CEEB', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>60</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>US</Text>
                </View>

                <View style={{flexDirection:'row', alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/kind.png')} style={{height:30, width:30, marginRight:50}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:10}}>EC</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'green', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>1.3</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>%</Text>
                </View>

                <View style={{flexDirection:'row', alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/thermometer.png')} style={{height:30, width:20,}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:5}}>Temperature</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'red', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>60</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>C</Text>
                </View>
                </View>
        </View> 

  );
};