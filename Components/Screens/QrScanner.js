import React, { useState, useEffect,useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';
import {db, firebase} from '../../Config';
import {collection,add,serverTimestamp, addDoc, Timestamp, query, QuerySnapshot, setDoc,doc, where} from 'firebase/firestore';
import { cos } from 'react-native-reanimated';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';



const QrSanner = ({navigation}) =>  {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned]=useState(false);
  const {useremail, setUseremail}=useContext(AppContext);
  const [data, setData]=useState([]);
  const [formState, setFormState]=useState({});
  const [code, setCode]=useState('');



  async function fetchAllData(){
    try{
      const {data} = await API.graphql(graphqlOperation(queries.listAppData));
      setData(data.listAppData.items.qrcode)
      console.log(data.qrcode);
    }catch(err){
      console.log(err)
    }
  }



  async function createData (){
    // const { qrcode } =formState;
    const qrcode = await AsyncStorage.getItem('serialnumber');
    try{
     
      await API.graphql(
        graphqlOperation(mutations.createAppData,{
          input:{qrcode,createdBy:useremail}
        })
      )

    }catch(err){
      console.log(err)
    }
  }
  



  const handleQrAdd = async()=>{
    fetchAllData();
    const qrcode = await AsyncStorage.getItem('serialnumber');
      if (data.includes(qrcode)) {
          alert('The device has already been scanned');
      }else{
        // createData();
        console.log('same')
      }
  }


  
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    alert('Please scan your device')

  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  



  const handleBarcdeScanned = async({type, data})=>{
    setScanned(true);
    
    alert(`Qrcode with type ${data} has been scanned`);

    setCode(data);
    AsyncStorage.setItem("serialnumber", data.toString());

   
    // setFormState({...formState, qrcode: serialnumber});
    
    console.log(code);
    handleQrAdd();
    
    navigation.navigate('DashBoard');
  };


  return(
  <View style={styles.container}>
    <View style={{height:40, marginTop:40}}>

    </View>
      <Camera
        onBarCodeScanned={ scanned ? undefined : handleBarcdeScanned
        
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