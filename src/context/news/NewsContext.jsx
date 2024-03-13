import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({children}) =>{

    const initialState = {

        allNews : []      // ye data khali hone pr simple array hoga fir same esa hi dikhna chiye hamara reducer/context
    };

    const [state,dispatch] = useReducer(NewsReducer,initialState);

    return(
        <NewsContext.Provider value={{...state,dispatch}}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext;