import {Link,Outlet} from 'react-router-dom'
import Wrapper from '../../assets/wrapper/Shared'
import { BigSideBar, NavBar, SmallSideBar } from '../../components'


const Shared = () => {
  return (
    <Wrapper>
     <main className='dashboard'>
     <SmallSideBar />
      <BigSideBar />

      <div>
        <NavBar />
        <div className='dashboard-page'>
        <Outlet />
        </div>

      </div>

     </main>
      
    </Wrapper>
  )
}

export default Shared
