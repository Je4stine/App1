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