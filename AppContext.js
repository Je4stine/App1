import React, {useState, createContext} from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  
  const [interval, setInterval]=useState(0);
  const [ph, setPh]=useState(0);
  const [moisture, setMoisture]=useState(0);
  const [info, setInfo]= useState('')
  const [finalState, setFinalState] = useState([]);
 
  return (
    <AppContext.Provider value={{finalState, setFinalState, interval, setInterval,ph,setPh, moisture, setMoisture, info,setInfo}}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};