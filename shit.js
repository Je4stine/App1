// const handleSignUp =()=>{
//   auth
//   .createUserWithEmailAndPassword(email, password)
//   .then(userCredentials=>{
//     const user = userCredentials.user;
//     console.log(user);
//     navigation.navigate('Config');
//     setLoading(true);
//   })
//   .catch (error=>alert(error.message))
// }




if(email && password == ''){
    alert('Please enter email address and password to continue')
  }else{

  setLoading(true)
  Keyboard.dismiss();
  ToastAndroid.show("Please wait...", ToastAndroid.LONG);
  auth
  .signInWithEmailAndPassword (email, password)
  .then(userCredentials=>{
    const user = userCredentials.user;
    console.log(user);
    AsyncStorage.setItem("UserInfo", JSON.stringify(user));
    AsyncStorage.setItem("email", email.toString());
    setLoading(false);

    auth.onAuthStateChanged(user=>{
      if (user){
        navigation.navigate('Qr');
      }
    })
    setUseremail(email);

  })
  .catch (err=>alert(err));
    setLoading(false);
}
}



const getItems =async()=>{
  qrRef
  .onSnapshot(
    querySnapshot=>{
      const rqData =[]
      querySnapshot.forEach((doc)=>{
        const { qrcode, useremail}=doc.data()
        rqData.push({
          qrcode,
          useremail,
        })
      })
      setRqData(rqData);
      console.log(JSON.stringify(rqData));
    }
  )}


  const saveDevice =()=>{


    addDoc(collection(db, "devices"),{
     qrcode,
     useremail
    }).then(()=>{
     console.log("Store")
    }).catch((error)=>{
     console.log(error)
    })
   }



    // useEffect(()=>{
  //   const listener = (data)=>{
  //     if(data.payload.event == 'signIn' || data.payload.event == 'signOut'){
  //       checkUser();
  //     }
  //   }
  //   Hub.listen('auth', listener);
  //   return ()=> Hub.remove('auth', listener);
  // })

  if (loading == true){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator/>
      </View>
    )
  }
  // {
  //   user? (AuthStackScreen()):(DrawerScreens())
  // }
  if (user == undefined){
   return AuthStackScreen();
  }else{
   return DrawerScreens();
  }




      
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