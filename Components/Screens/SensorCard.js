import { View, Text, Image, TextInput } from 'react-native';
import React,{useState} from 'react';
 
const SensorCard=({
    Depth="10cm",
    moisture="0",
    ec="0",
    temperature="0",

})=> {
    const [depth, setDepth]=useState();

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
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>Soil-01</Text>  
                </View>
                
               
                <TextInput
                    style={{paddingLeft:10, height:30, width:'40%', borderColor:'green', borderRadius:5, borderWidth:3, backgroundColor:'#192734', color:'#fff', fontSize:15, alignItems:'center', justifyContent:'center'}}
                    placeholder={Depth}
                    placeholderTextColor="#fff"
                    onChangeText={(text) => setDepth(text)}
                    // value={id}
                />
            

            </View>
                <View style={{alignContent:'center'}}>
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:10, alignItems:'center'}}>
                    <Image source={require('../assets/water-drop-icon.png')} style={{height:30, width:20, marginRight:20}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:14}}>Moisture</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'#87CEEB', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>{moisture}</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>%</Text>
                </View>

                <View style={{flexDirection:'row', alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/kind.png')} style={{height:30, width:30, marginRight:50}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:29}}>EC</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'green', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>{ec}</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>US</Text>
                </View>

                <View style={{flexDirection:'row', alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/thermometer.png')} style={{height:30, width:20,}}/>
                    <Text style={{color:'#fff', fontSize:20, marginRight:5}}>Temperature</Text>
                    <View style={{ height:40, width:90, borderWidth:3, borderColor:'red', backgroundColor:'#fff', borderRadius:5, marginRight:20}}>
                        <Text style={{fontSize:30, alignSelf:'center', fontWeight:'bold'}}>{temperature}</Text>
                    </View>
                    <Text style={{color:'#fff', fontSize:30}}>C</Text>
                </View>
                </View>
        </View> 

  );
};

export default SensorCard;