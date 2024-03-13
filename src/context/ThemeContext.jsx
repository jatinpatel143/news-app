import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const ThemeContext = createContext();


export const ThemeProvider = ({children}) =>{

    const initialState = {
        theme : true,
    };

    const [state,dispatch] = useReducer(ThemeReducer,initialState);

    return (

        <ThemeContext.Provider value={{   // koi function nhi banana he mujhe to mene  direct de diya
            ...state,
            dispatch,
        }}
        >
            {children}
        </ThemeContext.Provider>

    )
} 


export default ThemeContext;