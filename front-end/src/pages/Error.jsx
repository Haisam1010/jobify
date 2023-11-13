import { Link  } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../wrappers/Error'

const Error = () => {

    return (
      <Wrapper className='full-page'>
      <div>
      <img src={img} alt='error' />
      <h3>Ohh ! Page Not Found </h3>
      <p>We Cant See Any </p>
      <Link to='/'> Bach To Dashboard </Link> 
      </div>
    </Wrapper>
    )

  }

export default Error
