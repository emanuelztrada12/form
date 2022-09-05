import React, {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    }); 

    const getValues = () => {
        const item = window.localStorage.getItem(key)
        // console.log(item)
        return JSON.parse(item)
    }

    const setValue = (value)=> {
        try{    
            setStoredValue(value); 
            window.localStorage.setItem(key, JSON.stringify(value))
        }catch{
            console.log(error); 
        }
    }
    
    return [getValues, setValue]
}
