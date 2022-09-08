import React, { useState, useEffect,useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert, ToastAndroid } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import {db, firebase} from '../../Config';
import {collection,add,serverTimestamp, addDoc, Timestamp, query, QuerySnapshot, setDoc,doc, where} from 'firebase/firestore';
import { cos } from 'react-native-reanimated';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';



const QrSanner = ({navigation}) =>  {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned]=useState(false);
  const {useremail, setUseremail}=useContext(AppContext);
  const [alldata, setAlldata]=useState([]);
  const [formState, setFormState]=useState({});
  const [code, setCode]=useState('');
  const [modalVisible, setModalVisble]=useState(false);
  const {qrcode, setQrcode}=useContext(AppContext);

 





  async function fetchAllData(){
    try{
      const qrdata = await API.graphql(graphqlOperation(queries.listAppData));
      setAlldata(qrdata.data.listAppData.items)
    }catch(err){
      console.log(err)
    }
  }



  async function createData (){
    const qrcode = await AsyncStorage.getItem("serialnumber");
    console.log(code);
    const user = await Auth.currentAuthenticatedUser();
    
    try{
      await API.graphql(
        graphqlOperation(mutations.createAppData,{
          input:{qrcode,createdBy:user.attributes.email}
        })
      )
      navigation.navigate('DashBoard');
        
    }catch(err){
      console.log(err)
      setModalVisble(true)
    }
  }
  


  
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    alert('Please scan your device Qrcode')

  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  const handleModalQuit =()=>{
    setModalVisble(false);
    navigation.navigate('DashBoard')
  }


  const handleBarcdeScanned = async({type, data})=>{
    setScanned(true);
    
    // Alert.alert('Success', ` Device ${data} is now available on your account`);
    
    const showToast = () => {
      ToastAndroid.show('The Device is now available on your account', ToastAndroid.LONG);
    };
    showToast();

    await AsyncStorage.setItem("serialnumber", data.toString());
   
    setCode(data)  
    console.log(alldata);
    createData();
  };



  return(
  <View style={styles.container}>
    <Text style={{marginTop:20}}>code;{code}</Text>
    <Modal
    animationType='slide'
    transparent={true}
    visible={modalVisible}
    >
      <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:22}}>
      <View style={{margin:20, backgroundColor:'#fff', padding:50, alignItems:'center', elevation:5, borderRadius:2}}>
        <Text style={{ fontSize:18}}> The device has already been scanned</Text>
          <TouchableOpacity onPress={handleModalQuit}>
          <View style={{backgroundColor:'green', height:50, width:100, borderRadius:5, elevation:5, alignItems:'center', justifyContent:'center', marginTop:30}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Rescan</Text>
          </View>
          </TouchableOpacity>
    
      </View>
      </View>
    </Modal>
    <View style={{height:40, marginTop:40}}>

    </View>
      <Camera
        onBarCodeScanned={ scanned ? handleBarcdeScanned : handleBarcdeScanned
        
        }
        barCodeScannerSettings={{
          barCodeTypes: ['qr'],
        }}
        style={{ width:'100%', height:'80%'}}
      />
      <View>
      </View>
    </View>
  );
};

export default QrSanner;


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
})