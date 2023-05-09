import { useState,useEffect } from 'react'
import Wrapper from '../assets/wrapper/RegisterPage'
import {Logo,FormRow,Alert} from '../components'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'



const initalState = {
  name : '',
  email: '',
  password : '',
  isMember: true
}



const Register = () => {
  const navigate = useNavigate()
  const [values,setValues] = useState(initalState)
  const {user,isLoading,showAlert,displayAlert,RegisterUser,LoginUser} = useAppContext()


  const toggleMember = () =>{
    setValues({...values,isMember:!values.isMember})
}

  const handleChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value}) 
 }

  const onSubmit = (e) =>{
    e.preventDefault()
    const {name,email,password,isMember,lastname} = values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return
    }

    const currentUser = {name,email,password}
    if(isMember){
      LoginUser(currentUser)
    }
    else{
      RegisterUser(currentUser)
    }
  
  }

  useEffect(()=>{
      if(user){
        setTimeout(()=>{
          navigate('/')
        },3000)
        
      }
  },[user,navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
      <Logo />
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      {showAlert && <Alert />}

      {/* name input */}
     {!values.isMember &&(
      <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>
      
      
     )}

      {/* lastname input */}
     

      {/* email input */}
      <FormRow type='email' name='email' value={values.email}  handleChange={handleChange}/>


      {/* password input */}
      <FormRow type='password' name='password' value={values.password}  handleChange={handleChange}/>


      <button type='submit' className='btn btn-block'disabled={isLoading}>
        Submit
      </button>
      <p>
      {values.isMember ? 'NotYet Member ? ' : 'Already Member ? '}
        <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
        </button>
      </p>
      </form>
    </Wrapper>
  )
}

export default Register
