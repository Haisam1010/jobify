import { useState,useEffect } from "react"
import {RegForm,Logo,Alert} from '../components/index'
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrapper/RegisterPage"


const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
   
}



const Register = () => {

// Global State and Navigate
    const [values,setValues] = useState(initialState)

    const {isLoading,showAlert} = useAppContext()

const handleChange = (e) =>{
    console.log(e.target)
}

const toggleMember = () =>{
    setValues({...values,isMember:!values.isMember})
}

const onSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target)
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

    <button type="submit" className="btn btn-block">Submit</button>
    
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
