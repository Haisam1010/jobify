/* eslint-disable no-unused-vars */
import Styled  from "styled-components"
import Wrapper from "../wrappers/Landing"
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='logo' className='logo' />
      </nav>

      <div className="container page">
        <div className='info'>
          <h1>Job <span> Tracking </span> </h1> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum turpis nec turpis facilisis lacinia. 
            Quisque rhoncus porta dignissim. Sed non dapibus quam, eget fringilla lectus. Cras et risus a augue hendrerit posuere. 
            Donec posuere nisi dui, ut molestie nisi facilisis cursus. Nulla pretium aliquet finibus. 
            Donec iaculis volutpat dui, at aliquet nulla fermentum eget. 
          </p>
          <Link to='/login' className="btn"> Login / Demo User </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Landing
