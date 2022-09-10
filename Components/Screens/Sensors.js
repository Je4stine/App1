import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, Platform, Linking, Modal, TextInput, Image} from 'react-native'
import React,{useState, useEffect, useContext, useCallback} from 'react';
import SensorCard from './SensorCard';
import Phsensor from './Phsensor';
import TDS from './TDS';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {AppContext} from '../../AppContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';





import { useTheme } from '@react-navigation/native';

import Animated,{ Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';





const Sensors =({route}) =>{
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [sensorData, setSensorData]=useState([]);
  const [serialNo, setSerialNo]=useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisble]=useState(false);
  const [formState, setFormState]=useState({});
  const [title, setTitle] = useState('');
  const [deviceAlias, setDeviceAlias]=useState([]);
  

  const {qrcode, setQrcode, serialNumber, setSerialNumber}=useContext(AppContext);
  const {snNumber}= route.params;


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
        setSensorData(response);
      });
      
  };


  const getName = async()=>{

        try{
          const qrdata = await API.graphql(graphqlOperation(queries.listAppData,{
            filter:{
              qrcode: {contains:snNumber}
            }
          }));
          setDeviceAlias(qrdata.data.listAppData.items);
          console.log(deviceAlias)
          
        
        }catch(err){
          console.log(err);
        }
    };

  useFocusEffect(
   useCallback(()=>{
      getName();
      console.log("Data")
      console.log(deviceAlias)
  },[]));




  useEffect(()=>{
      
      getData();
      setSerialNumber(snNumber);
      const interval = setInterval(() => {
        
        getData();
      }, 5000);

      return ()=>clearInterval(interval);
  },[]);

  

  const handleModalQuit =()=>{
    setModalVisble(false)
  }

  const handleTimer =()=>{
    setModalVisble(true)
  }

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

 
  const renderName =()=>{
    return (
      deviceAlias.map((item, index)=>  <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}} key={index} > Node ID:{" "}{item.alias || snNumber}</Text>)
    )
  };

 
  return (
    <View style={{flex:1, backgroundColor:"#192734"}}>
      <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      >
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:22}}>
        <View style={{margin:20, backgroundColor:'#fff', padding:50, alignItems:'center', elevation:5, borderRadius:2}}>
          <Text style={{marginBottom:10, fontSize:20, fontWeight:'bold'}}>Set Timer</Text>
        <View style={{flexDirection:'row'}}>
          <View>
          <TextInput
            style={{padding:10, height:50, width:70, borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff",marginRight:10}}
            placeholder="Hours"
            keyboardType= "number-pad"
            onChangeText={(text) => setFormState({...formState, hours: text})}
            />
          </View>
          <View>
          <TextInput
            style={{padding:10, height:50, width:70, borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff", marginRight:10}}
            placeholder="Mins"
            keyboardType= "number-pad"
            onChangeText={(text) => setFormState({...formState, mins: text})}

            />
          </View>
          <View>
          <TextInput
            style={{padding:10, height:50, width:70, borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff"}}
            placeholder="Secs"
            keyboardType= "number-pad"
            onChangeText={(text) => setFormState({...formState, Secs: text})}
            />
          </View>
        </View>
          <TouchableOpacity onPress={handleModalQuit} >
          <View style={{backgroundColor:'green', height:50, width:100, borderRadius:5, elevation:5, alignItems:'center', justifyContent:'center', marginTop:30}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Set</Text>
          </View>
          </TouchableOpacity>
    
      </View>
      </View>
    </Modal>
      <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'space-between', padding:10, flexDirection:'row' }}>
       
        {/* <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>Node ID:{" "}{deviceAlias.qrcode || snNumber}</Text> */}
        {deviceAlias.alias== ""? (<Text style={{color:"#fff", fontSize:24, fontWeight:'900'}} > Node ID:{" "}{snNumber}</Text>) : (renderName())}
       
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Ionicons name="menu" size={33} color="#fff" />
          </TouchableOpacity>
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
              (<SensorCard moisture={sensorData.Moisture.moisture} ec={sensorData.Moisture.conductivity} temperature={sensorData.Moisture.temperature} datetime={sensorData.GpsData.date_time} status={sensorData.Moisture.status}/>)
          }

          { sensorData.PhTramsmitter == null? (
           <View style={{marginTop:30, marginBottom:30}}>
           {/* <ActivityIndicator size="small" color="#42A341" /> */}
         </View>
         ):
             ( <Phsensor phValue={sensorData.PhTramsmitter.phValue} datetime={sensorData.GpsData.date_time} status={sensorData.PhTramsmitter.status}/>)
          }
          
          {
            sensorData.TdsSensor == null ? (
              <View style={{marginTop:30, marginBottom:30}}>
              {/* <ActivityIndicator size="small" color="#42A341" /> */}
            </View>
            
            ):
            (<TDS conductivity={sensorData.TdsSensor.conductivity } tds={sensorData.TdsSensor.tds} temperature={sensorData.TdsSensor.temperature} datetime={sensorData.GpsData.date_time} status={sensorData.TdsSensor.status}/>)
          }

        <View style={{height:200}}></View>
      </Animated.ScrollView>


    <Animated.View style={[styles.containerView,actionBarStyle]}>
        <TouchableOpacity onPress={handleTimer}>
        <LinearGradient
            colors={['#42A341', '#074C00', '#074C00']}
            style={{height:40, width:'80%',borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginBottom:10, flex:1, alignSelf:'center'}}>
          <Text style={{color:'#fff', fontSize:18}} >
            Set Interval
          </Text>
        
        </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Graphs')}>
        <LinearGradient
            colors={['#42A341', '#074C00', '#074C00']}
            style={{height:40,width:'80%', borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:10, alignSelf:'center'}}>            
            <Ionicons name="eye-sharp" size={24} color="blue" />
            <Text style={{fontSize:20, color:'#fff', alignSelf:'center', marginLeft:10}}>View Data</Text>
        </LinearGradient>

        </TouchableOpacity>
        <TouchableOpacity onPress={handleLocation}>
        <LinearGradient
            colors={['#42A341', '#074C00', '#074C00']}
            style={{height:40,width:'80%', borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'center', alignSelf:'center', marginBottom:10}}>           
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




 
  
 