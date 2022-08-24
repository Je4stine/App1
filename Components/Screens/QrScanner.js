import React, { useState, useEffect,useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../AppContext';

const QrSanner = ({navigation}) =>  {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned]=useState(false);
  const {qrcode, setQrcode}=useContext(AppContext)
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarcdeScanned =({type, data})=>{
    setScanned(true);
    alert(`Qrcode with type ${data} has been scanned`);
    setQrcode(data);
    console.log(data)
    AsyncStorage.setItem("serialnumber", data.toString());
  };

  return(
  <View style={styles.container}>
      <Camera
        onBarCodeScanned={ scanned ? undefined : handleBarcdeScanned
        
        }
        barCodeScannerSettings={{
          barCodeTypes: ['qr'],
        }}
        style={{ flex: 1 }}
      />
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
});