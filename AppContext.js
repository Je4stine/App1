import React, {useState, createContext} from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  
  const [useremail, setUseremail]=useState('');
  const [user, setUser]=useState([]);
  const [signedIn, setSignedIn]=useState(false);

  return (
    <AppContext.Provider value={{useremail, setUseremail, signedIn, setSignedIn, user, setUser}}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};