import { Link } from 'react-router-dom'
import Wrapper from '../wrappers/RegisterLogin'
import {Logo,FormRows} from '../components'


const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
      <Logo />
      <h4>Register</h4> 
       <FormRows type='text' name='first Name' defaultValue='' />
       <FormRows type='text' name='Last Name' defaultValue='' />
       <FormRows type='email' name='Email' defaultValue='' />
       <FormRows type='password' name='Password' defaultValue='' />
        <button type='submit' className='btn btn-block'>
          Register
        </button>

        <p>
            Already Member ? <Link to="/login" className='member-btn'> Login </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
