import{
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS 
    ,REGISTER_USER_ERROR,
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
    START_EDIT_BEGIN,
    START_EDIT_SUCCESS,
    START_EDIT_ERROR,

    } from "./action"
import { initialState } from "./appContext"

const reducer = (state,action) => {

    if(action.type === DISPLAY_ALERT){
        return{
            ...state,
            showAlert : true,
            alertType: 'danger',
            alertText: 'Please Provide All Values '

        }
    }

    if(action.type === CLEAR_ALERT){
        return{
            ...state,
            showAlert : false,
            alertType: '',
            alertText: '',
            isUserSet:false

        }
    }

    if(action.type === REGISTER_USER_BEGIN){
        return {
            ...state,
            isLoading:true
        }
    }
    if(action.type === REGISTER_USER_SUCCESS){
        return{
            ...state,
            isLoading: false,
            token:action.payload.token,
            user:action.payload.user,
            userLocation: action.payload.location,
            jobLocation:action.payload.location,
            showAlert:true,
            alertType: 'success',
            alertText: 'User Created! Redirecting...'
        }
    }
    if(action.type === REGISTER_USER_ERROR){
        return{
            ...state,
            isLoading: false,
            showAlert:true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }

    if(action.type === LOGIN_USER_BEGIN){
        return {
            ...state,
            isLoading:true
        }
    }
    if(action.type === LOGIN_USER_SUCCESS){
        return{
            ...state,
            isLoading: false,
            token:action.payload.token,
            user:action.payload.user,
            userLocation: action.payload.location,
            jobLocation:action.payload.location,
            showAlert:true,
            alertType: 'success',
            alertText: 'Login Successful! Redirecting...'
        }
    }

    if(action.type === LOGIN_USER_ERROR){
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType: 'danger',
            alertText: 'Login Failed..'
        }
    }
    if(action.type ===  TOGGLE_SIDEBAR ){
        return{
            ...state,
            showSidebar : !state.showSidebar 
        }
    }
    if(action.type === LOGOUT_USER){
        return{
            ...initialState,
            token:null,
            user:null,
            userLocation:null,
            jobLocation:null
        }
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true };
      }
      if (action.type === UPDATE_USER_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          user: action.payload.user,
          userLocation: action.payload.location,
          jobLocation: action.payload.location,
          showAlert: true,
          alertType: 'success',
          alertText: 'User Profile Updated!',
        };
      }
      if (action.type === UPDATE_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
      }
      if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            [action.payload.name]: action.payload.value
            
        }
      }

      if (action.type === CLEAR_VALUES){
        const initialState = {
            isEditing : false,
            editJobId : '',
            position: '',
            company: '',
            jobType : 'full-time',
            status: 'pending',
            jobLocation: state.userLocation || '',
        }
        return {
            ...state,
            ...initialState,
        } 
      }

    if(action.type === CREATE_JOB_BEGIN){
        return {
            ...state,isLoading:true
        }
    }

    if(action.type === CREATE_JOB_SUCCESS){
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType: 'success',
            alertText: 'New Job Created'
        }
    }
    
    if(action.type === CREATE_JOB_ERROR){

        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }

    if(action.type === GET_JOBS_BEGIN){

        return{
            ...state,
            isLoading:true,
            showAlert: false
        }
    }

    if(action.type === GET_JOBS_SUCCESS){
        return{
            ...state,
            isLoading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages : action.payload.numOfPages
        }
    }

    if(action.type === SET_EDIT_JOB){
        const job = state.jobs.find((job)=> job._id === action.payload.id)
        const {_id,position,company,jobLocation,jobType,status} = job
        return{
            ...state,
            isEditing : true,
            editJobId : _id,
            position,
            company,
            jobType ,
            status,
            jobLocation
        }
    }

    if(action.type === DELETE_JOB_BEGIN) {
        return{
            ...state,
            isLoading: true
        }
    }

    if(action.type === START_EDIT_BEGIN){
       
        return {
            ...state,
            isLoading : true,
          
        }
    }
    
    if(action.type === START_EDIT_SUCCESS){
       
        return {
            ...state,
            isLoading : false,
            showAlert: true ,
            alertType: 'success',
            alertText: 'Job Updated !'
        }
    }

    if(action.type === START_EDIT_ERROR){
        return {
            ...state,
            showAlert : true,
            alertType: 'danger',
            alertText : action.payload.msg
        }
    }

    throw new Error(`No Action Available:${action.type}`)
}

export default reducer