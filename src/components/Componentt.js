import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";


export default function Componentt(){
    const darkTheme =useTheme();
    const toggleTheme=useThemeUpdate();
    const themeStyles={
        
            backgroundColor: darkTheme? "#333" : "#ccc",
            color:darkTheme?"#ccc":"#333",
            padding:"2rem",
            margin:"2rem"
    }

    
    return(
        <>
            <button onClick={toggleTheme}>Toggle</button>
            <div style={themeStyles}>Functional Theme</div>
        </>
    )
    


}