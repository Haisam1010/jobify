import axios from "axios";
import React,{useState,useReducer,useContext} from "react";
import reducer from "./reducer";


import {
  DISPLAY_ALERT,CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
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
    jobLocation: userLocation || '',
    isEditing : false,
    editJobId : '',
    position: '',
    company: '',
    jobTypeOptions : ['full-time','part-time','remote','internship'],
    jobType : 'full-time',
    statusOptions: ['interview','declined','pending'],
    status: 'pending',
    showSidebar : false,
    jobs : [],
    totalJobs : 0,
    numOfPages : 1,
    page:1
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {


  const [state,dispatch] = useReducer(reducer,initialState)

  const authFetch = axios.create({
    baseURL: '/api/v1',
    headers: {
      'Authorization': `Bearer ${state.token}`
    }
  })

  // Request 
 authFetch.interceptors.request.use((config)=>{
    config.headers['Authorization'] = `Bearer ${state.token}`
    return config 
 },
  (error) => {
    return Promise.reject(error)
  }
 )

// Response 
 authFetch.interceptors.request.use((response)=>{
  return response 
},
(error) => {

  if(error.response.status === 401){
    LogoutUser()
  }
  return Promise.reject(error)
}
)



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
    localStorage.setItem('token',token)
    localStorage.setItem('location',location)
  }
  const removeStorage = () =>{
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

  const toggleSidebar = ()=> {
    dispatch({type:TOGGLE_SIDEBAR})
  }

  const LogoutUser = ()=> {
    dispatch({type:LOGOUT_USER})
    removeStorage()
  }

  const updateUser = async (currentUser)=>{
    dispatch({type:UPDATE_USER_BEGIN})
    try {
      const {data} = await authFetch.patch('/auth/update',currentUser )


      const {user,location,token} = data
 
      dispatch({
        type:UPDATE_USER_SUCCESS,
        payload: {user,location,token}
      })
      addUserLocalStorage({user,location,token})
    } catch (error) {

     if(error.response.data !== 401){
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: {msg:error.response.data.msg}
      })
     }

    }
    clearAlert()
    
  }

  const handleChange = ({name,value}) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: {name,value}
    })
  }

  const clearValues = () =>{
    dispatch({
      type:CLEAR_VALUES
    })
  }

  const createJob = async () => {
    dispatch({type: CREATE_JOB_BEGIN})
    try {
      const {position,company,jobLocation,jobType,status} = state
      await authFetch.post('/jobs',{
        position,
        company,
        jobLocation,
        jobType,
        status
      })
      dispatch({type:CREATE_JOB_SUCCESS})
      dispatch({type:CLEAR_VALUES})
    } catch (error) {
      if(error.response.status === 401) return
      dispatch({type:CREATE_JOB_ERROR,payload:{msg:error.response.data.msg}})
    }
    clearAlert()
  }

  const getJobs = async () => {
    const url = `/jobs`
    dispatch({type:GET_JOBS_BEGIN})
   try {
    const {data} = await authFetch(url)
    const {jobs,numOfPages,totalJobs} = data
    dispatch({
      type:GET_JOBS_SUCCESS,
      payload:{
      totalJobs,
      numOfPages,
      jobs
     }
    })
   } catch (error) {
    LogoutUser()
    console.log(error.response)
   }
   clearAlert()
  }

  const SeteditJob = (id) => {
    dispatch({type:SET_EDIT_JOB,payload:{id}})
    console.log(`Edit Job :${id}`)
  }
  const editJob = () => {
    console.log('Edit Job')
  }
  const deleteJob = async(jobId) => {
    dispatch({type:DELETE_JOB_BEGIN})
    try {
      await authFetch.delete(`/jobs/${jobId}`)
      getJobs() 
    } catch (error) {
      console.log(error.msg)
     // LogoutUser()
    }
  }
  return <AppContext.Provider value={
    {...state,displayAlert,RegisterUser,LoginUser,toggleSidebar,LogoutUser,updateUser,handleChange,clearValues,createJob,getJobs,SeteditJob,editJob,deleteJob}
    }>
    {children}
  </AppContext.Provider>

}

const useAppContext = () => {
  return useContext(AppContext)
}

export {initialState,AppProvider,useAppContext}