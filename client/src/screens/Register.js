import { useState,useEffect } from "react"
import {RegForm,Logo} from '../components/index'

import Wrapper from "../assets/wrapper/RegisterPage"


const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true
}



const Register = () => {

// Global State and Navigate
    const [values,setValues] = useState(initialState)

const handleChange = (e) =>{
    console.log(e.target)
}

const onSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target)
}

  return (
    <Wrapper className='full-page'>

    <form className="form" onSubmit={onSubmit}>
    <Logo />
    <h3>Login</h3>

    {/* Name input */}
    <RegForm type='text' 
    name="name" 
    value={values.name} 
    handleChange={handleChange} />

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

    </form>

    </Wrapper>
  )
}

export default Register
