import { useState,useEffect } from "react"
import {RegForm,Logo,Alert} from '../components/index'
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrapper/RegisterPage"
import reducer from "../context/reducer"
import { useNavigate } from "react-router-dom";


const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,

}

const Register = () => {
    //** UseNavigate */
    const navigate = useNavigate()
    const [values,setValues] = useState(initialState)

    //** Global State */
    const {user,isLoading,showAlert,displayAlert,registerUser} = useAppContext()


const toggleMember = () =>{
        setValues({...values,isMember:!values.isMember})
    }


const handleChange = (e) =>{
   setValues({...values,[e.target.name]:e.target.value})
}

const onSubmit = (e) =>{

    const {name,email,password,isMember} = values

    if(!email || !password || (!isMember && !name)){
       displayAlert()
       return 
     }
    const currentUser = {email,name,password}
    if(isMember){
        console.log('Already Member...');
    }
    else{
        registerUser(currentUser)
    }
}

    useEffect(()=>{
        if(user){
            setTimeout(() => {
                navigate('/')
            },3000)
        }
    },[user,navigate])


  return (
    <Wrapper className='full-page'>

    <form className="form" onSubmit={onSubmit}>
    <Logo />
    <h3>{values.isMember ? 'Login' : 'Register'}</h3>

    {showAlert && <Alert />}
    {/* Name input */}

    {!values.isMember &&(
    <RegForm type='text' 
    name="name" 
    value={values.name} 
    handleChange={handleChange} />

    )}

    {/*Email input */}
    <RegForm type='email' 
    name="email" 
    value={values.email} 
    handleChange={handleChange} />

    {/*Password input */}
    <RegForm type='password' 
    name="password" 
    value={values.password} 
    handleChange={handleChange} />

    <button type='submit' className="btn btn-block" onClick={onSubmit} disabled={isLoading}>Submit</button>
    
    <p>
        {values.isMember ? 'Not A Member Yet ?' : 'Already Member ?'}

        <button type="button" onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
    </button>
    </p>
    
    </form>

    </Wrapper>
  )
}

export default Register
