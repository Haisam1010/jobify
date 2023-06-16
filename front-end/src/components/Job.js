import moment from 'moment'
import {FaLocationArrow,FaCalendarAlt,FaBriefcase} from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrapper/Job'
import  jobInfo from './JobInfo'
import { Link } from 'react-router-dom'
import JobInfo from './JobInfo'

const Job = ({_id,status,jobLocation,company,createdAt,position,jobType}) => {
  const {SeteditJob,deleteJob}= useAppContext()
  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return ( 
  <Wrapper>
    <header>
      <div className='main-icon'>{company.charAt(0)}</div>
      <div className='info'>
        <h4>{position}</h4>
        <p>{company}</p>
      </div>
    </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow/>} Text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt/>} Text={date} />
          <JobInfo icon={<FaBriefcase/>} Text={date} />
          <div className={`status ${status}`}>{status}</div>
        </div>
      </div>
    <footer>
      <div className='actions'>
      <Link to='/add-jobs' onClick={()=> {SeteditJob
      (_id)}} className='btn edit-btn'>
        Edit
      </Link>
      <button type='button' className="btn delete-btn" onClick={()=>{deleteJob(_id)}}>Delete</button>
      </div>
    </footer>
  </Wrapper>
  )
}

export default Job
