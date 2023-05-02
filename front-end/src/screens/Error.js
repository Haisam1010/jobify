import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {error} from '../assets/images/index'
import Wrapper from '../assets/wrapper/ErrorPage'


const Error = () => {

const fetcdata = async ()=> {
    try {
        const fetchdata = await fetch('/api/v1')
        const data = await fetchdata.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    fetcdata()
},[])
    
    return (
       <Wrapper className='full-page'>
            <div>
                <img src={error} alt='error-not-found' />
                <h4>Oh! Page Not Found</h4>
                <p> We Can't Seem To Find The Page You'r Looking For !</p>
                <Link to='/'> Back To Home </Link>
            </div>
       </Wrapper>
    )
}

export default Error