import React,{ useState,useReducer,useContext } from "react";
import reducer from "./reducer";
import axios from 'axios'

import { DISPLAY_ALERT,CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS 
    ,REGISTER_USER_ERROR  } from "./action"

const token = localStorage.getItem('token')    
const userLocation = localStorage.getItem('location')    
const user = localStorage.getItem('user')    


const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',
    user:user?JSON.parse(user):null,
    token: null,
    userLocation:Location || '',
    jobLocation :Location || '',
    
}

const AppContext = React.createContext()
const AppProvider = ({children}) =>{

    const [state,dispatch,]= useReducer(reducer,initialState)

    const displayAlert = ()=>{

        dispatch({type:DISPLAY_ALERT})
        clearAlert()

    }

    const clearAlert = () =>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },2000)
    }

    const addUserToLocalStorage = ({user,token,location}) => {

        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token',token)
        localStorage.setItem('location',location)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('location')
    }

    const registerUser = async (currentUser)=>{

        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const response = await axios.post('/api/v1/auth/register',currentUser)

            const {user,token,userLocation} = response.data
            dispatch({
                type:REGISTER_USER_SUCCESS,
                payload: {user,token,userLocation}
            })
            
            addUserToLocalStorage({user,token,Location})
        } catch (error) {
            
            dispatch({
                type: REGISTER_USER_ERROR, payload: {msg:error.response.data.msg}
            })
        }
        clearAlert()
    }

    return(
        <AppContext.Provider value={{...state,displayAlert,registerUser}}>
        {children}
        </AppContext.Provider>
    )
}

const useAppContext = () =>{
    return useContext(AppContext)
}

export {initialState,useAppContext,AppProvider}