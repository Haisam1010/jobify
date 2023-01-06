import { Link } from 'react-router-dom'
import {error} from '../assets/images/index'
import Wrapper from '../assets/wrapper/ErrorPage'

const Error = () => {
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