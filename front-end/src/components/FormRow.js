import React from 'react'

const FormRow = ({handleChange,value,name,type,labelText}) => {
  return (
    <div className='form-row'>
    <label htmlFor={name} className='form-label'>
      {labelText || name}
    </label>
    <input 
     type={type}
     value={value} 
     name={name} 
     onChange={handleChange} 
     className="form-input">
    </input>
  </div>
  )
}

export default FormRow
