import React from 'react'

const FormField = ({ tag, label, type, name, value, onChange}) => {
    return (
        <div>
          <label>
            {label}:
            {tag === 'input' ?
                <input type={type} name={name} value={value} onChange={onChange}/>
                : <textarea type={type} name={name} value={value} onChange={onChange}/>
            }
          </label>
        </div>
    )
}

export default FormField
