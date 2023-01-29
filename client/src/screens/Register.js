import { useState,useEffect } from "react"
import {RegForm,Logo,Alert} from '../components/index'
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrapper/RegisterPage"
import reducer from "../context/reducer"



const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
   
}

const Register = () => {
    const [values,setValues] = useState(initialState)
// Global State and Navigate
    const {isLoading,showAlert,displayAlert,registerUser} = useAppContext()

    useAppContext()

const toggleMember = () =>{
        setValues({...values,isMember:!values.isMember})
    }


const handleChange = (e) =>{
   setValues({...values,[e.target.name]:e.target.value})
}

const onSubmit = (e) =>{
    e.preventDefault()
    const {name,email,password,isMember} = values

    if(!email || !password || (!isMember && !name)){
       displayAlert()
       return
     }

}


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

    <button type="submit" className="btn btn-block" disabled={isLoading}>Submit</button>
    
    <p>
        {values.isMember ? 'Not A Member Yet ?' : 'Already Member ?'}

        <button type="submit" onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
    </button>
    </p>
    
    </form>

    </Wrapper>
  )
}

export default Register
