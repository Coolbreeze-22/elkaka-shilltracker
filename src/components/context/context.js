import React, { createContext, useState } from 'react'

export const ShillTrackerContext = createContext();

export const Provider = ({ children }) => {
    const initial = { name: "", amount: "", position: "", date: new Date().toString() };
    
    const [ formData, setFormData] = useState(initial);
    const [ updatedId, setUpdatedId] = useState();
    const [ error, setError ] = useState(false);
    const [ isSearch, setIsSearch ] = useState("");
    const [ userPosition, setUserPosition ] = useState("");
    const [ formError, setFormError ] = useState("");
    const [ deleteWarning, setDeleteWarning ] = useState();
    const [ activeEditButton, setActiveEditButton ] = useState();
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ snackBar, setSnackBar ] = useState("");

    return(
        <ShillTrackerContext.Provider
        value={{ formData, setFormData, initial, updatedId, setUpdatedId, error, setError, isSearch, setIsSearch, userPosition, setUserPosition, formError, setFormError, deleteWarning, setDeleteWarning, activeEditButton, setActiveEditButton, currentPage, setCurrentPage, snackBar, setSnackBar }}
        >
            {children}
        </ShillTrackerContext.Provider>
    )
}