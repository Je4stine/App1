import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, Platform, Linking} from 'react-native'
import React,{useState, useEffect, useContext} from 'react';
import SensorCard from './SensorCard';
import Phsensor from './Phsensor';
import TDS from './TDS';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {db} from '../../Config';
import {collection,add,serverTimestamp, addDoc, Timestamp} from 'firebase/firestore';
import {AppContext} from '../../AppContext';


import { useTheme } from '@react-navigation/native';

import Animated,{ Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const data = [
  { label: '5 sec', value: '5' },
  { label: '10 sec', value: '10' },
  { label: '15 sec', value: '15' },
  { label: '20 sec', value: '20' },
  { label: '30 sec', value: '30' },
  { label: '40 sec', value: '40' },
  { label: '50 sec', value: '50' },
  { label: '60 sec', value: '60' },
];



const Sensors =({route}) =>{
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [sensorData, setSensorData]=useState([]);
  const [serialNo, setSerialNo]=useState('');

  const {qrcode, setQrcode}=useContext(AppContext);
  const {snNumber}= route.params;

  // const getLabel =async()=>{
  //   const serialnumber = await AsyncStorage.getItem('serialnumber');
  //   setSerialNo(serialnumber)
  //   console.log(serialnumber);
  // };

  const baseUrl = 'https://tawi-edge-device-realtime-data.s3.amazonaws.com/tawi-device/tawi_edge_device/';
  
 
  const getData =async()=>{
    fetch (baseUrl+snNumber,{
    headers :{
      'Cache-Control':'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires':'0'
    }
  })
     
      .then((response)=>response.json())
      .then((response)=>{
        // console.log(response);
        setSensorData(response);
        // console.log(response)
        // console.log(serialnumber)
      });
      
  };

 

  useEffect(()=>{

      getData();
      // getLabel();
      const interval = setInterval(() => {
        
        getData()
      }, 1000000);

      return ()=>clearInterval(interval)
  },[]);



  const handleLocation=()=>{
    const lat = sensorData.GpsData.latitude;
    const lrng = sensorData.GpsData.longitude;
    const scheme = Platform.select({ios: 'maps: 0,0?q=', android: 'geo: 0,0?q='})
    const latLng = `${lat}, ${lrng}`;
    const lable = {snNumber};
    const url =  Platform.select({
      ios:`${scheme}${lable}@${latLng}`,
      android:`${scheme}${latLng}(${lable})`
    });

    Linking.openURL(url);
  }
  
  

  const renderLabel = () => {
  
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Set Interval
        </Text>
      );
    }
    return null;
  };

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

    const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
        console.log("scrolling up");
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 100;
        console.log("scrolling down");
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

 
  return (
    <View style={{flex:1, backgroundColor:"#192734"}}>
      <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'center', padding:10}}>
        <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>Node ID:{" "}{snNumber}</Text>
      </View>
      <Animated.ScrollView 
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      // style={}
        >


          { sensorData.Moisture == null ? (
            <View style={{marginTop:30, marginBottom:30}}>
              <ActivityIndicator size="small" color="#42A341" />
            </View>
          
          ):
              (<SensorCard moisture={sensorData.Moisture.moisture} ec={sensorData.Moisture.conductivity} temperature={sensorData.Moisture.temperature}/>)
          }

          { sensorData.PhTramsmitter == null? (
           <View style={{marginTop:30, marginBottom:30}}>
           {/* <ActivityIndicator size="small" color="#42A341" /> */}
         </View>
         ):
             ( <Phsensor phValue={sensorData.PhTramsmitter.phValue}/>)
          }
          
          {
            sensorData.TdsSensor == null ? (
              <View style={{marginTop:30, marginBottom:30}}>
              {/* <ActivityIndicator size="small" color="#42A341" /> */}
            </View>
            
            ):
            (<TDS conductivity={sensorData.TdsSensor.conductivity } tds={sensorData.TdsSensor.tds} temperature={sensorData.TdsSensor.temperature}/>)
          }

        <View style={{height:200}}></View>
      </Animated.ScrollView>


    <Animated.View style={[styles.containerView,actionBarStyle]}>
    <LinearGradient
            colors={['#42A341', '#074C00', '#074C00']}
            style={{height:40, width:'90%',borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginBottom:10, flex:1, alignSelf:'center'}}>
                         <Text style={{color:'#fff', fontSize:18}} >
            Set Interval
          </Text>
            
            {/* {renderLabel()} */}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Set time' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Octicons name="triangle-down" size={24} color="#fff" />
            )}
        />
        </LinearGradient>

        <TouchableOpacity onPress={()=>navigation.navigate('Graphs')}>
        <LinearGradient
            colors={['#42A341', '#074C00', '#074C00']}
            style={{height:40,width:'90%', borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:10, alignSelf:'center'}}>            
            <Ionicons name="eye-sharp" size={24} color="blue" />
            <Text style={{fontSize:20, color:'#fff', alignSelf:'center', marginLeft:10}}>View Data</Text>
        </LinearGradient>

        </TouchableOpacity>
        <TouchableOpacity onPress={handleLocation}>
        <LinearGradient
            colors={['#42A341', '#074C00', '#074C00']}
            style={{height:40,width:'90%', borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'center', alignSelf:'center', marginBottom:10}}>           
            <MaterialIcons name="location-pin" size={24} color="red" />
            <Text style={{fontSize:20, color:'#fff', alignSelf:'center'}}> Node Location</Text>
        </LinearGradient>
        </TouchableOpacity>
       
    </Animated.View>
  </View>
  );
};

export default Sensors;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 30,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      width:'40%'
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
      
    },
    placeholderStyle: {
      fontSize: 16,
      color:'#fff'
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'#fff'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    containerView:{
      alignSelf:'center', 
      position:'absolute', 
      bottom:0, 
      flex:1
    }
    
  });




 
  
 