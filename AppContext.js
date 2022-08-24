import React, {useState, createContext} from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  
  const [qrcode, setQrcode]=useState('');

  return (
    <AppContext.Provider value={{qrcode, setQrcode}}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};