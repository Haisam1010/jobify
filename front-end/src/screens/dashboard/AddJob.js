import React from 'react'
import {FormRow,Alert,FormRowSelect} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrapper/DashBoardPage'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    console.log('create Job')
  }

  const handleChangeinput = (e) => {
    const name = e.target.name
    const value = e.target.value

    console.log(`${name}: ${value}`)
  }
  return (
    <Wrapper>
        <form className='form'>
          <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
          {showAlert && <Alert />}
          <div className='form-center'>
            <FormRow text="text" name="Position" value={position} handleChange={handleChangeinput} ></FormRow>
            <FormRow text="text" name="company" value={company} handleChange={handleChangeinput} ></FormRow>
            <FormRow text="text" labelText='Job Location' name="jobLocation" value={jobLocation} handleChange={handleChangeinput} ></FormRow> 
          
          {/* Job Type */}
          <div className='form-row'>
              <label htmlFor='jobType' className='form-label'>
                Job Type
              </label>
          <select name='jobType' value={jobType} onChange={handleChangeinput} className='form-select'>
            {jobTypeOptions.map((itemValue,index)=>{
              return(
                <option key={index} value={itemValue}>
                  {itemValue}
                </option>
              )
            })}
          </select>
          </div>
          
          <div className='btn-container'>
              <button type='submit' onClick={handleSubmit} className='btn btn-block submit-btn'>
              Submit Button
              </button>
          </div>
          </div>
        </form>

    </Wrapper>
  )
}

export default AddJob
