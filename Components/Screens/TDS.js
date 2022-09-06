import { View, Text, Image } from 'react-native';
import React,{useState} from 'react';
 
const TDS=({
    conductivity="0",
    tds="0",
    temperature="0",
    datetime="0"

})=> {
    

  return (
    <View style={{height:280, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2}}>
            <View style={{width:'90%', height:45, borderColor:'#fff', borderWidth:3, borderRadius:12, alignSelf:'center', padding:10, flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor:'#2A4156', marginBottom:10, marginTop:10}}>
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'green', marginRight:5}}>
                </View>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'#fff', marginRight:5}}>
                </View>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'#fff', marginRight:5}}>
                </View>
                </View>
                <View>
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>TDS sensor</Text>  
                </View>
       
            </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{justifyContent:'space-around'}}>
                         <Image source={require('../assets/water-drop-icon.png')} style={{height:31, width:20}}/>
                         <Image source={require('../assets/kind.png')} style={{height:30, width:30}}/>
                         <Image source={require('../assets/thermometer.png')} style={{height:30, width:20,}}/>
                    </View>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{color:'#fff', fontSize:18}}>Conductivity</Text>
                        <Text style={{color:'#fff', fontSize:18, marginRight:45}}>EC</Text>
                        <Text style={{color:'#fff', fontSize:18}}>Temperature</Text>
                    </View>
                    <View style={{justifyContent:'space-around'}}>
                        <View style={{ height:40, width:90, borderWidth:3, borderColor:'#87CEEB', backgroundColor:'#fff', borderRadius:5,alignItems:'center', justifyContent:'center', marginBottom:5}}>
                            <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold'}}>{conductivity}</Text>
                        </View>

                        <View style={{ height:40, width:90, borderWidth:3, borderColor:'green', backgroundColor:'#fff', borderRadius:5, alignItems:'center', justifyContent:'center', marginBottom:5}}>
                            <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold'}}>{tds}</Text>
                        </View>

                        <View style={{ height:40, width:90, borderWidth:3, borderColor:'red', backgroundColor:'#fff', borderRadius:5, marginRight:20, alignContent:'center', justifyContent:'center', marginBottom:5}}>
                            <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold'}}>{temperature}</Text>
                         </View>

                    </View>
                    <View style={{justifyContent:'space-around'}}>
                         <Text style={{color:'#fff', fontSize:30}}>%</Text>
                         <Text style={{color:'#fff', fontSize:30}}>US</Text>
                         <Text style={{color:'#fff', fontSize:30}}>C</Text>

                    </View>

                </View>

                <View style={{height:35, width:'50%', borderWidth:2, borderColor:'#fff', borderRadius:5, alignSelf:'flex-end', marginTop:20, marginRight:20, padding:5 }}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>{datetime}</Text>    
                </View>

        </View> 

  );
};

export default TDS;