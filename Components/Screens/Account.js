import { View, Text, Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import React,{useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../Config';

const Account = ({navigation}) => {
  const [email, setEmail]=useState('');

  

  return (
    <View style={{flex:1, backgroundColor:"#192734"}}>
        <View style={{backgroundColor:'#2A4156', height:80, width:'100%',marginTop:30, elevation:2, justifyContent:'space-between',alignItems:'center', padding:10, flexDirection:'row', marginBottom:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={require('../assets/logo.png')} style={{height:50,width:45, marginRight:20}}/>
              <Text style={{color:"#fff", fontSize:24, fontWeight:'900'}}>Account Information</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
               <Ionicons name="menu" size={33} color="#fff" />
            </TouchableOpacity>
        </View>

        <View style={{height:80, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2, padding:10, flexDirection:'row', alignItems:'center'}}>
        <Ionicons name="person" size={33} color="#fff" />
          <Text style={{color:'#fff', marginLeft:20, fontSize:20}}> johndoe@gmail.com</Text>
        </View>
        <View style={{height:80, width:'90%', backgroundColor:'#2A4156', alignSelf:'center', marginTop:10, borderRadius:10, elevation:2, padding:10}}>
          <Text style={{color:'#fff', fontSize:15}}> Reset Password</Text>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <TextInput
              style={{padding:9, height:40, width:'50%', borderColor:'#fff', borderWidth:0.5, borderRadius:4, marginTop:5, color:'#fff'}}
              placeholder='Enter Email address'
              onChange={(text) => setEmail(text)}
          />
          
          <View style={{height:40, width:'30%', backgroundColor:'green', borderRadius:5, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{width:'80%',}} >
            <Text style={{color:'#fff', fontSize:20, alignSelf:'center'}}>Submit</Text>
          </TouchableOpacity>
          </View>
       
          </View>
        </View>
    </View>
  )
}

export default Account;