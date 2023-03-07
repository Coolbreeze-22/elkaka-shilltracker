import React, { createContext, useState } from 'react'

export const ShillTrackerContext = createContext();

export const Provider = ({ children }) => {
    const initial = { name: "", amount: "", position: "", date: new Date().toString() };
    
    const [ formData, setFormData] = useState(initial);
    const [ updatedId, setUpdatedId] = useState();
    const [ error, setError ] = useState(false);
    const [ isSearch, setIsSearch ] = useState("");
    const [ userPosition, setUserPosition ] = useState("");
    return(
        <ShillTrackerContext.Provider
        value={{ formData, setFormData, initial, updatedId, setUpdatedId, error, setError, isSearch, setIsSearch, userPosition, setUserPosition }}
        >
            {children}
        </ShillTrackerContext.Provider>
    )
}