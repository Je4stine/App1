import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { auth } from '../../Config';

const SignUp = ({navigation}) => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmpwd, setConfirmpwd]= useState('');

const handleSignUp =()=>{
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(userCredentials=>{
    const user = userCredentials.user;
    console.log(user);
    navigation.navigate('Config')
  })
  .catch (error=>alert(error.message))
}



  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={{ flex: 1,justifyContent: "center", alignItems:'center',}}>
        <Image source={require('../assets/logo.png')}/>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginBottom:40, marginTop:20, fontSize:30, alignSelf:'center'}}> Hello! Create an account </Text>
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:17}}>Email</Text>
      <TextInput
            style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1, backgroundColor:'#fff'}}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
      <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20, fontSize:17}}>Password</Text>
      <TextInput
                 style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1, backgroundColor:'#fff'}}
                 placeholder="Password"
                 onChangeText={(text) => setPassword(text)}
                 value={password}
                 secureTextEntry
            />

        <Text style={{color:'#4C9A2A', fontWeight:'bold', marginTop:10, padding:20,fontSize:17}}>Confirm Password</Text>
            <TextInput
                        style={{padding:10, height:50, width:'80%', borderColor:'black', borderRadius:5, borderWidth:1,backgroundColor:'#fff'}}
                        placeholder="Confirm Password"
                        onChangeText={(text) => setConfirmpwd(text)}
                        value={confirmpwd}
                        secureTextEntry
                    />
      <TouchableOpacity onPress={handleSignUp}>      
      <View style={{height:50, width:200, borderRadius:8, backgroundColor:'#4C9A2A',marginTop:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Sign Up</Text>
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