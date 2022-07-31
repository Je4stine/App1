import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    LineChart,
  } from "react-native-chart-kit";

const GraphCard = () => {
  return (
    <View style={{alignItems:'center'}}>
            <View>
            <Text style={{fontSize:20, fontWeight:'900', color:'#fff'}}>Sensor Output</Text>
            <LineChart
            data={{
            labels: ["12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"],
            datasets: [
                {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
                }
            ]
            }}
            width={Dimensions.get("window").width-10} // from react-native
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