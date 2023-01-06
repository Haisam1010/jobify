import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (

    <Wrapper>
    <nav>
        <img src={logo} alt='logo' className='main-logo' />
    </nav>
    <div className='container page'>
        <div className='info'>
            <h1> 
                Job <span>Tracking </span> App
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

        <img src={main} alt='main' className='img img-main' />
    </div>

    
    </Wrapper>
  )
}

const Wrapper = styled.main`

   nav{
    width : var(--fluid-width)
    max-width: var(--max-width)
    margin: 0 auto
    height: var(--nav-height)
    display:flex
    align-items : center
   }

`


export default Landing






