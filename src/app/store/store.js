import React, {createContext, useReducer, useEffect} from "react";
import Reducer from './reducer'

const initialState = {};
const localState = JSON.parse(sessionStorage.getItem("state"));

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, localState || initialState);
    
    useEffect(() => {
        sessionStorage.setItem("state", JSON.stringify(state));
    }, [state]);
    
    return (
      <GlobalState.Provider value={[state, dispatch]}>
          {children}
      </GlobalState.Provider>
    )
};


export const GlobalState = createContext(initialState);
export default Store


