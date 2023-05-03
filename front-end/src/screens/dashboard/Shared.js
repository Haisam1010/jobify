import {Link,Outlet} from 'react-router-dom'
import Wrapper from '../../assets/wrapper/Shared'

const Shared = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-jobs">add-job</Link>
        <Link to="all-jobs">all-job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  )
}

export default Shared
