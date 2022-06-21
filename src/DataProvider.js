import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {    
    
    const [user,setUser] = useState({
        email :'',
        password:''});
    
    const value = {
        user  :user,
         setUser  : setUser};

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}