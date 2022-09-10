import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ToastAndroid, ActivityIndicator, Keyboard, StyleSheet,Alert } from 'react-native';
import React,{useState,useEffect, useContext} from 'react';
import { auth } from '../../Config';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import { Auth } from 'aws-amplify';



const Verify = ({navigation}) => {
    const [loading, setLoading]= useState(false);
    const [formState, setFormState]=useState({});

    const showToast = () => {
      ToastAndroid.show("Wrong password or user not registered !", ToastAndroid.LONG);
      setLoading(false);
    };


    const onConfirmPressed = async () => {
        try {
          await Auth.confirmSignUp(formState.username, formState.code);
          navigation.navigate('Qr');
        } catch (e) {
          Alert.alert('Oops', e.message);
        }
      };

      const onResendPress = async () => {
        try {
          await Auth.resendSignUp(formState.username);
          Alert.alert('Success', 'Code was resent to your email');
        } catch (e) {
          Alert.alert('Oops', e.message);
        }
      };

  
    const handleSubmit =()=>{
     onConfirmPressed();
     
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
            

      <TouchableOpacity onPress={handleSubmit}>
       
      <View style={{height:50, width:200, borderRadius:8, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'600', fontSize:18}}> Submit</Text>
      </View>
      </TouchableOpacity>

      <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
        <Text style={{fontSize:17}}>Didn't receive a code? </Text>
        <TouchableOpacity onPress={onResendPress}>
        <Text style={{color:'#4C9A2A', fontSize:17}}>{" "}Resend</Text>
        </TouchableOpacity>
      </View>

      
      </ImageBackground>
    </View>
  )
};

export default Verify;

const styles = StyleSheet.create ({
  spinnerTextStyle: {
    color: '#FFF'
  }
});