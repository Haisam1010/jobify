import React,{useState,useReducer,useContext} from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DISPLAY_ALERT,CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
  }
  from "./action"
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {
    isLoading : false,
    showAlert : false,
    alertType: '',
    alertText: '',
    user:user ? JSON.parse(user) : null,
    token:token,
    userLocation:userLocation || '',
    jobLocation: userLocation || ''
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  const displayAlert = () => {
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
  }

  // Clear Alert 
  const clearAlert = () =>{
    setTimeout(()=>{
      dispatch({type:CLEAR_ALERT})
    },3000)
  }

  const addUserLocalStorage = ({user,token,location}) =>{
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('toke',token)
    localStorage.setItem('location',location)
  }
  const removeStorage = ({user,token,location}) =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }

  // Register 

  const RegisterUser = async (currentUser)=> {
  
      dispatch({type:REGISTER_USER_BEGIN})
    
      try {
        const response = await axios.post('/api/v1/auth/register',currentUser)
        console.log(response)

        const {user,token,location} = response.data
        dispatch({
          type:REGISTER_USER_SUCCESS,
          payload: {user,token,location}
        })
        addUserLocalStorage({user,token,location})
      } catch (error) {
        console.log(error.response)
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: {msg:error.response.data.msg}
        })
      }
      clearAlert()
  }

  const LoginUser = async (currentUser)=> {
    dispatch({type:LOGIN_USER_BEGIN})
    
    try {
      const {data} = await axios.post('/api/v1/auth/login',currentUser)
     //  console.log(data)

      const {user,token,location} = data
      dispatch({
        type:LOGIN_USER_SUCCESS,
        payload: {user,token,location}
      })
      addUserLocalStorage({user,token,location})
    } catch (error) {
      
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {msg:error.response.data.msg}
      })
    }
    clearAlert()
  }

  return <AppContext.Provider value={{...state,displayAlert,RegisterUser,LoginUser}}>
    {children}
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext)
}

export {initialState,AppProvider,useAppContext}