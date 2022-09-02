import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ActivityIndicator, Keyboard, Alert, StyleSheet } from 'react-native';
import React,{useState, useContext} from 'react';
import { auth } from '../../Config';
import { Auth } from 'aws-amplify';
import { AppContext } from '../../AppContext';
import Spinner from 'react-native-loading-spinner-overlay';

const SignUp = ({navigation}) => {
  const [loading, setLoading]=useState(false);
  const [formState, setFormState]=useState({});
  const {useremail, setUseremail}=useContext(AppContext);




async function signUp() {
  const { username, password, email } = formState;
  setLoading(true);
  Keyboard.dismiss()
  try {
      const user = await Auth.signUp({
          username,
          password,
          attributes: {
              email,          // optional
              // phone_number,   // optional - E.164 number convention
              // other custom attributes 
          }
      });
      setLoading(false);
      navigation.navigate('Qr');

  } catch (e) {
      Alert.alert('Oops', e.message)
      setLoading(false)
  }
};

const handleSignUp =()=>{
  if(formState.username && formState.password == ''){
    alert('Please enter email and password before you continue')
  }else{
    signUp();
  }
 
};



  return (
    <View style={{flex:1}}>
          <Spinner
          visible={loading}
          textContent={'Please wait...'}
          textStyle={styles.spinnerTextStyle}
        />
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={{ flex: 1,justifyContent: "center", alignItems:'center'}}>
        <Image source={require('../assets/logo.png')}/>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginBottom:40, marginTop:20, fontSize:30, alignSelf:'center'}}> Hello! Create an account </Text>
      

      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:17}}>Email</Text>
      <TextInput
            style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1, backgroundColor:'#fff'}}
            placeholder="Email"
            onChangeText={(text) => setFormState({...formState, username: text})}
            value={formState.username}
            />
      
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:17}}>Password</Text>
      <TextInput
                 style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1, backgroundColor:'#fff'}}
                 placeholder="Password"
                 onChangeText={(text) => setFormState({...formState, password: text})}
                 value={formState.password}
                 secureTextEntry
            />

        <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20,fontSize:17}}>Confirm Password</Text>
            <TextInput
                        style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:'#fff'}}
                        placeholder="Confirm Password"
                        onChangeText={(text) => setFormState({...formState, confirmpwd: text})}
                        value={formState.confirmpwd}
                        secureTextEntry
                    />
      <TouchableOpacity onPress={handleSignUp}>      
      <View style={{height:50, width:200, borderRadius:8, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center'}}>
        
        {loading?(<ActivityIndicator/>):(  <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Sign Up</Text>)}
      
      </View>
      </TouchableOpacity>
      <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
        <Text style={{fontSize:17}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{color:'#4C9A2A', fontSize:17}}>Sign in</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create ({
  spinnerTextStyle: {
    color: '#FFF'
  }
});