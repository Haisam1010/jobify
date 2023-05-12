import { useState } from 'react'
import Wrapper from '../../assets/wrapper/DashBoardPage'
import {FormRow,Alert} from '../../components'
import { useAppContext } from '../../context/appContext'


const Profile = () => {
    const {showAlert,user,displayAlert,updateUser,isLoading} = useAppContext()

    const [name,setName] = useState(user?.name)
    const [email,setEmail] = useState(user?.email)
    const [lastName,setLastname] = useState(user?.lastName)
    const [location,setLocation] = useState(user?.location)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name || !email || !lastName || !location){
          displayAlert()
          return 
        }
        updateUser({name,email,lastName,location})
    }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit} >
        <h3>Profile</h3>
        {showAlert && <Alert />}
      <div className='form-center'>
        <FormRow 
        type='text'
        name='name' 
        value={name}
        handleChange={(e)=>setName(e.target.value)} 
        />
        <FormRow 
        type='text'
        name='lastName' 
        value={lastName}
        handleChange={(e)=>setLastname(e.target.value)} 
        />
        <FormRow 
        type='text'
        name='location' 
        value={location}
        handleChange={(e)=>setLocation(e.target.value)} 
        />
        <FormRow 
        type='email'
        name='email' 
        value={email}
        handleChange={(e)=>setEmail(e.target.value)} 
        />

      <button className='btn btn-block' type='submit' disabled={isLoading}> 
      {isLoading ? 'Please Wait...' : 'save changes'}
      </button>

      </div>
     
      </form>
    </Wrapper>
  )
}

export default Profile
