

const RegForm = ({value,handleChange,name,type,labelText}) => {
  return (
    <div className="form-row">
    <label htmlFor={name} className="form-label" >
        {labelText || name}
    </label>
    <input 
     type={type} 
     value={value.name}
     onChange={handleChange} 
     name={name} 
     className='form-input' />
</div>
  )
}

export default RegForm
