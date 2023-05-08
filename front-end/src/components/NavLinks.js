import React from 'react'
import links from '../Utils/links'
import { NavLink } from "react-router-dom"


const NavLinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links">
    {links.map((Links)=>{
      const {title,path,id,icon} = Links

      return (
      <NavLink to={path} 
      key={id} onClick={toggleSidebar} 
      className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
      <span className="icon">{icon}</span>
          {title}
      </NavLink>
      )
    })}
 
    
  </div>
  )
}

export default NavLinks
