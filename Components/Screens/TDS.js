import { View, Text, Image } from 'react-native';
import React,{useState} from 'react';
 
const TDS=({
    conductivity="0",
    tds="0",
    temperature="0",

})=> {
    

  return (
    <View style={{height:250, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2}}>
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

                <View style={{alignContent:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                        <Image source={require('../assets/water-drop-icon.png')} style={{height:31, width:20}}/>
                        <View>
                            <Text style={{color:'#fff', fontSize:18}}>Conductivity</Text>
                        </View>
                        <View style={{ height:40, width:90, borderWidth:3, borderColor:'#87CEEB', backgroundColor:'#fff', borderRadius:5, marginRight:20, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold'}}>{conductivity}</Text>

                        </View>
                        <Text style={{color:'#fff', fontSize:30}}>%</Text>
                    </View>



                <View style={{flexDirection:'row',width:'100%',marginTop:20, alignItems:'center', justifyContent:'space-around'}}>
                    <View>
                    <Image source={require('../assets/kind.png')} style={{height:30, width:30}}/>
                    </View>
                    <View>
                    <Text style={{color:'#fff', fontSize:18, marginRight:55}}>EC</Text>
                    </View>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'green', backgroundColor:'#fff', borderRadius:5, marginRight:20, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:20, alignSelf:'center', fontWeight:'bold'}}>{tds}</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>US</Text>
                </View>




                <View style={{flexDirection:'row', width:'85%',alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'space-around'}}>
                    <Image source={require('../assets/thermometer.png')} style={{height:30, width:20,}}/>
                    <Text style={{color:'#fff', fontSize:18}}>Temperature</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'red', backgroundColor:'#fff', borderRadius:5, marginRight:20, alignContent:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:20, alignSelf:'center', fontWeight:'bold'}}>{temperature}</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>C</Text>
                </View>
                </View>
        </View> 

  );
};

export default TDS;