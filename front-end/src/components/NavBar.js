import Wrapper from "../assets/wrapper/NavBar"
import {FaUserCircle,FaAlignLeft,FaCaretDown} from 'react-icons/fa'
import { useAppContext } from "../context/appContext"
import { useState } from "react"
import Logo from "./Logo"


const NavBar = () => {
  const [showLogout,setShowLogout] = useState()
  const {user,toggleSidebar,LogoutUser} = useAppContext()
  return (
    <Wrapper>
    <div className="nav-center">
      <button className="toggle-btn" onClick={toggleSidebar}>
      <FaAlignLeft /> 
      </button>
      
      <div>
      <Logo />
        <h3 className="logo-text">
          DashBoard
        </h3>
      </div>
        <div className="btn-container">
          <button type='button' className='btn' onClick={()=> setShowLogout(!showLogout)} >
          <FaUserCircle />
            {user?.name}
          <FaCaretDown />  
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={LogoutUser}>
              LogOut
            </button>
          </div>
        </div>
      
    </div>
      
    </Wrapper>
  )
}

export default NavBar
