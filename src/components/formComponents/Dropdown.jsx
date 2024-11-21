import React from 'react'

const Dropdown = ({label,name,value,options=[],onChange}) => {
  return (
    <div className='dropdownDiv mt-3'>
    <label htmlFor='{name}'>{label}</label>
    <select id={name} value={value} onChange={onChange} className='form-control'>
        <option value="">-- Select Your Ans --</option>

        {options.map((option,index)=>(
            <option key={index} value={option.value}>{option.label}</option>
        ))}
        
    </select>
</div>
  )
}

export default Dropdown