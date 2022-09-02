import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ToastAndroid, ActivityIndicator, Keyboard, StyleSheet,Alert } from 'react-native';
import React,{useState,useEffect, useContext} from 'react';
import { auth } from '../../Config';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import { Auth } from 'aws-amplify';



const NewPassword = ({navigation}) => {
    const [loading, setLoading]= useState(false);
    const [formState, setFormState]=useState({});

    const showToast = () => {
      ToastAndroid.show("Wrong password or user not registered !", ToastAndroid.LONG);
      setLoading(false);
    };


    const onSubmitPressed = async ()=> {
        try {
          await Auth.forgotPasswordSubmit(formState.username, formState.code, formState.password);
          navigation.navigate('Login');
        } catch (e) {
          Alert.alert('Oops', e.message);
        }
      };

  
    const handleSubmit =()=>{
     onSubmitPressed();
     
    }
      

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={{ flex: 1,justifyContent: "center", alignItems:'center',}}>
        <Image source={require('../assets/logo.png')}/>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginBottom:40, marginTop:20, fontSize:32, alignSelf:'center'}}> Confirm sign up </Text>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:18}}>Email</Text>
      <TextInput
            style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff"}}
            placeholder="Email"
            onChangeText={(text) => setFormState({...formState, username: text})}
            value={formState.username}
            />
        <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:18}}>Code</Text>
            <TextInput
                    style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff"}}
                    placeholder="Code"
                    onChangeText={(text) => setFormState({...formState, code: text})}
                    value={formState.code}
                    />

        <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:18}}>Password</Text>
                    <TextInput
                    style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff"}}
                     placeholder="New Password"
                    onChangeText={(text) => setFormState({...formState, password: text})}
                    value={formState.password}
                    secureTextEntry
                    />
            

      <TouchableOpacity onPress={handleSubmit}>
       
      <View style={{height:50, width:200, borderRadius:8, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'600', fontSize:18}}> Submit</Text>
      </View>
      </TouchableOpacity>
     

      
      </ImageBackground>
    </View>
  )
};

export default NewPassword;

const styles = StyleSheet.create ({
  spinnerTextStyle: {
    color: '#FFF'
  }
});