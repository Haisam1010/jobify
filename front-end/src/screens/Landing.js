import React, { useEffect } from 'react'
import Wrapper from '../assets/wrapper/Landing'
import main from '../assets/images/main.svg'
import Logo from '../components/Logo'


const Landing = () => {
  return (
    <Wrapper>
     <nav className='nav'>
       <Logo />
    </nav>
    <div className='container page'>
    <div className='info'>
        <h1>
             Manage <span>Jobs</span>
        </h1>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum turpis nec turpis facilisis lacinia. 
            Quisque rhoncus porta dignissim. Sed non dapibus quam, eget fringilla lectus. Cras et risus a augue hendrerit posuere. 
            Donec posuere nisi dui, ut molestie nisi facilisis cursus. Nulla pretium aliquet finibus. 
            Donec iaculis volutpat dui, at aliquet nulla fermentum eget.
        </p>



        <button className='btn btn-hero'>
            Login / Register 
        </button>
    </div>
        <img src={main} alt='main' className='img main-img'/>
    </div>
    </Wrapper>
  )
}

export default Landing