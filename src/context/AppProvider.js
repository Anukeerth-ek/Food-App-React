import React, { useReducer, createContext } from "react";

const DispatchContext = React.createContext();
const StateContext = React.createContext();

function AppProvider({children}) {

    

     const initialState = {
        cartItems: []
     };
     
     const reducer = (state, action) => {
        switch(action.type) {
            case 'add_to_cart': 
            return {...state, cartItems: [...state.cartItems, action.payload]}
            default: {
                return state
            }
        }
     };
     const [state, dispatch] = useReducer(reducer, initialState);
     
     return (
     
          <div>
               <DispatchContext.Provider value={dispatch}>
                    <StateContext.Provider value={state}>
                         
                        {children}
                    </StateContext.Provider>
               </DispatchContext.Provider>
          </div>
     );
}

export { AppProvider, DispatchContext, StateContext };
