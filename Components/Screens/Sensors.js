import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import React,{useState} from 'react';
import SensorCard from './SensorCard';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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



export default function Sensors({DeviceID='Node ID: Pivot01a'}) {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
 
  return (
    <View style={{flex:1, backgroundColor:"#192734"}}>
    <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'center', padding:10}}>
      <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>{DeviceID}</Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <SensorCard/>
        <SensorCard/>
        <SensorCard/>
        <SensorCard/>
        <View style={{height:200}}></View>
    </ScrollView>

    <View style={{alignSelf:'center', position:'absolute', bottom:2, flex:1}}>
        <View style={{height:40, width:350, borderColor:'green',  borderRadius:5,padding:10, marginBottom:5, backgroundColor:'green', alignSelf:'center',flexDirection:'row', justifyContent:'space-around', alignItems:'center', flex:1}}>
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
            
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Graphs')}>
        <View style={{height:40, width:350, borderColor:'green', borderWidth:2, borderRadius:4, marginBottom:5, backgroundColor:'green', alignSelf:'center', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <Ionicons name="eye-sharp" size={24} color="blue" />
            <Text style={{fontSize:20, color:'#fff', alignSelf:'center', marginLeft:10}}>View Data</Text>
        </View>
        </TouchableOpacity>
        <View style={{height:40, width:350, borderColor:'green', borderWidth:2, borderRadius:4, marginBottom:5, backgroundColor:'green', alignSelf:'center', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <MaterialIcons name="location-pin" size={24} color="red" />
            <Text style={{fontSize:20, color:'#fff', alignSelf:'center'}}> Node Location</Text>
        </View>
    </View>
  </View>
  );
};


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
  });