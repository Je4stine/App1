import React, {useState, createContext} from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  
  const [qrcode, setQrcode]=useState('');
  const [useremail, setUseremail]=useState('');

  return (
    <AppContext.Provider value={{qrcode, setQrcode, useremail, setUseremail}}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};