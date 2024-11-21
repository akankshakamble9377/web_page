import React from 'react'

const TextInput = ({label,name,type,value,onChange,errors}) => {
  return (
    <div className='textInput'>
         <label htmlFor={name}>{label}*</label>
         <input className='form-control' type={type} placeholder={`Enter Your ${label}`} name={name} value={value} onChange={onChange} required />  
         {/* { errors.name && <p style={{ color: "red" }}>{errors.name}</p> }   */}
         {errors}
    </div>
  )
}

export default TextInput
