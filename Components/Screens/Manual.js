import { View, Text, StyleSheet,ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Gauges from './Gauges';
const { width } = Dimensions.get('window');
import Phmeter from './PHmeter';
import TDA from './TDA';

export default function Manual({reading=12}) {
  return (
    <View style={{alignItems:'center', marginTop:30}}>
       
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} >
      <Text style={{fontSize:24, marginBottom:20, alignSelf:'center'}}>Device ID</Text>

        <View style={{flex:1, marginLeft:60,flexWrap:'wrap'}}>
        <View>
          <Gauges reading={60}/>
        </View>

        <View>
          <Text style={{alignSelf:'center', marginTop:40, fontSize:24, marginBottom:40}}>Ph Meter</Text>
          <Phmeter/>
          <View style={{marginTop:40, borderColor:'black', borderWidth:1, borderRadius:5, height:40, width:80, alignItems:'center', justifyContent:'center', marginBottom:80, alignSelf:'center'}}>
                <Text style={{fontSize:25}}>7</Text>
          </View>
        </View>

        <View>
        <Text style={{alignSelf:'center', fontSize:24}}>TDS</Text>

          <TDA/>
          <View style={{marginTop:10, borderColor:'black', borderWidth:1, borderRadius:5, height:40, width:80, alignItems:'center', justifyContent:'center', marginBottom:80, alignSelf:'center'}}>
                <Text style={{fontSize:25}}>40</Text>
          </View>
        </View>
        
        </View>
        
      </ScrollView>
      

    
    </View>
  )
}