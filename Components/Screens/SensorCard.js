import { View, Text, Image, TextInput } from 'react-native';
import React,{useState} from 'react';
 
const SensorCard=({
    Depth="10cm",
    moisture="0",
    ec="0",
    temperature="0",
    datetime="0"

})=> {
    const [depth, setDepth]=useState();

  return (
    <View style={{height:310, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2}}>
            <View style={{width:'90%', height:55, borderColor:'#fff', borderWidth:3, borderRadius:12, alignSelf:'center', padding:10, flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor:'#2A4156', marginBottom:10, marginTop:10}}>
               
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'green', marginRight:5}}>
                </View>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'#fff', marginRight:5}}>
                </View>
                <View style={{height:10, width:10, borderRadius:5, backgroundColor:'#fff', marginRight:5}}>
                </View>
                </View>

                <View>
                    <Text style={{fontSize:18, color:'#fff', fontWeight:'bold', alignSelf:'center'}}>Soil-01</Text>  
                </View>
            
                <View style={{paddingLeft:10, height:30, width:'40%', borderColor:'green', borderRadius: 5, borderWidth:3, backgroundColor:'#192734', alignItems:'center', justifyContent:'center'}}><Text style={{color:'#fff', fontSize:15,}}>{Depth}</Text></View>
     
            </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{justifyContent:'space-around'}}>
                         <Image source={require('../assets/water-drop-icon.png')} style={{height:31, width:20}}/>
                         <Image source={require('../assets/kind.png')} style={{height:30, width:30}}/>
                         <Image source={require('../assets/thermometer.png')} style={{height:30, width:20,}}/>
                    </View>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{color:'#fff', fontSize:18}}>Moisture</Text>
                        <Text style={{color:'#fff', fontSize:18, marginRight:45}}>EC</Text>
                        <Text style={{color:'#fff', fontSize:18}}>Temperature</Text>
                    </View>
                    <View style={{justifyContent:'space-around'}}>
                        <View style={{ height:40, width:90, borderWidth:3, borderColor:'#87CEEB', backgroundColor:'#fff', borderRadius:5,alignItems:'center', justifyContent:'center', marginBottom:5}}>
                            <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold'}}>{moisture}</Text>
                        </View>

                        <View style={{ height:40, width:90, borderWidth:3, borderColor:'green', backgroundColor:'#fff', borderRadius:5, alignItems:'center', justifyContent:'center', marginBottom:5}}>
                            <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold'}}>{ec}</Text>
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

export default SensorCard;