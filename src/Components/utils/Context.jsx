import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducer/reducer";




export const ContextGlobal = createContext();




const lsfavs = JSON.parse(localStorage.getItem('favs'))

const initialState ={
  favs :lsfavs || [] ,

}





export const Context = ({ children }) => {
const [state,dispatch] = useReducer(reducer,initialState)

useEffect(()=>{
  sessionStorage.setItem('favs',JSON.stringify(state.favs))
},[state.favs])






  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context
export const useContextGlobal = () => useContext(ContextGlobal)
