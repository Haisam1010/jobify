import React from 'react'
import Wrapper from '../assets/wrapper/JobInfo'

const JobInfo = ({icon,Text}) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{Text}</span>
    </Wrapper>
  )
}

export default JobInfo
