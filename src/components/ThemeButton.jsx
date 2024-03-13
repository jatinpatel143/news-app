import React, { useContext } from 'react'
import { FaMoon,FaSun } from "react-icons/fa";
import ThemeContext from '../context/ThemeContext';

const ThemeButton = () => {

  const {theme,dispatch} = useContext(ThemeContext);

  const handleTheme = () =>{
    dispatch({

      type:"CHANGE_THEME",  // hmne ThemeReducer me condition dedi he ki purana wala dekh lo
                             // to payload ki jarurat nhi he
    });
  };

  return (
    
    <button id="theme-btn" onClick={handleTheme}>
        {
          theme ? <FaSun /> : <FaMoon />
        }
    </button>

  )
}

export default ThemeButton;
