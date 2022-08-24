import { View, Text, Dimensions } from 'react-native';
import React,{useEffect, useState} from 'react';
import {
    LineChart,
  } from "react-native-chart-kit";
  

const GraphCard = ({sensorname=''}) => {
  const [sensorData, setSensorData]=useState('');

  useEffect (()=>{
    fetch ('https://tawi-edge-device-realtime-data.s3.amazonaws.com/tawi-device/tawi_edge_device/94b555c72160',{
    headers :{
      'Cache-Control':'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires':'0'
    }
  })
     
      .then((response)=>response.json())
      .then((response)=>{
        // console.log(response);
        setSensorData(response.Moisture.moisture);
        console.log(response)
      
      });
  },[]);



  return (
    <View style={{alignItems:'center'}}>
            <View>
            <Text style={{fontSize:20, fontWeight:'900', color:'#fff'}}>{sensorname}</Text>
            <LineChart
            data={{
            labels: ["12", "1", "2", "3", "4", "5", "6","7","8","9","10","11",],
            datasets: [
                {
                data: [
                    100,
                    80,
                    95,
                    100,
                    100,
                    100,
                    65,
                    90,
                    50,
                    70,
                    40,
                    100,


                    
                ]
                }
            ]
            }}
            width={Dimensions.get("window").width-10} 
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
</View>
    </View>
  )
}

export default GraphCard;