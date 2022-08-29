import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ToastAndroid, ActivityIndicator, Keyboard, StyleSheet } from 'react-native';
import React,{useState,useEffect, useContext} from 'react';
import { auth } from '../../Config';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import { Auth } from 'aws-amplify';



const Login = ({navigation}) => {
    const [loading, setLoading]= useState(false);
    const [loggedIn, setLoggedIn]=useState(false);
    const {useremail, setUseremail}=useContext(AppContext);
    const [formState, setFormState]=useState({});

    const showToast = () => {
      ToastAndroid.show("Wrong password or user not registered !", ToastAndroid.LONG);
      setLoading(false);
    };


    async function signIn() {
      const { username, password } = formState;
      setLoading(true);
      Keyboard.dismiss();
      try {
          const user = await Auth.signIn(username, password);
          navigation.navigate('Qr');
          setUseremail(formState.username);
          setLoading(false)
      } 
      catch (error) {
          console.log('error signing in', error);
          alert(error);
          setLoading(false)
      }
  }

  
    const handleSignIn =()=>{
      if(formState.username && formState.password == ''){
        alert('Please enter email and password before you continue')
      }else {
      signIn()
      }
    }
      
     


  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={{ flex: 1,justifyContent: "center", alignItems:'center',}}>
        <Image source={require('../assets/logo.png')}/>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginBottom:40, marginTop:20, fontSize:30, alignSelf:'center'}}> Welcome Back </Text>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:18}}>Email</Text>
      <TextInput
            style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:"#fff"}}
            placeholder="Email"
            onChangeText={(text) => setFormState({...formState, username: text})}
            value={formState.username}
            />
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:18}}>Password</Text>
      <TextInput
                 style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1, backgroundColor:"#fff"}}
                 placeholder="Password"
                 onChangeText={(text) => setFormState({...formState, password: text})}
                 value={formState.password}
                 secureTextEntry
            />
      <TouchableOpacity onPress={handleSignIn}>
       
      <View style={{height:50, width:200, borderRadius:8, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'600', fontSize:18}}>Login</Text>
      </View>
      </TouchableOpacity>
      <View>{loading?(<ActivityIndicator/>):(<View></View>)}</View>
      <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
        <Text style={{fontSize:18}}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        <Text style={{color:'#4C9A2A', fontSize:18}}>Sign up</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create ({
  spinnerTextStyle: {
    color: '#FFF'
  }
});