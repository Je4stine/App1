import { View, ScrollView, Text} from 'react-native';
import React from 'react';
import GraphCard from './GraphCard';


const Graphs = () => {
  return (
    <View style={{flex:1, backgroundColor:"#192734"}}>
        <View style={{marginTop:30}}>
            <ScrollView>
                <GraphCard sensorname='Moisture Sensor Output'/>
                <View style={{height:200}}></View>
            </ScrollView>
        </View>
    <View style={{position:'absolute', bottom:5, height:50, width:'95%', backgroundColor:'green', alignSelf:'center', borderRadius:10,elevation:2, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#fff', fontSize:24, fontWeight:'900'}}>Download Data</Text>
    </View>
    </View>
  )
}

export default Graphs;