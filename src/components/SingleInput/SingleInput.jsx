// import {useState} from 'react'
import PropTypes from 'prop-types'
import '../Register/validationErrors.css'

const SingleInput = (props) => {
    // const [focused, setFocused] = useState(false)
    const {onChange, id, label, errorMessage, register, ...input } = props

    const handleFocus = () => {
        // setFocused(true)
    }

  return (
    <div className="input-frame">
      <label htmlFor={id}>{label}</label>
      <input 
         {...input}
         id ={id}
         onChange={onChange}
         onBlur={handleFocus}
         value={register[id]} 

        //  focused={focused.toString()}
         required
      />
      <span className='error-message'>{errorMessage}</span>
  </div>
  )
}

SingleInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    input: PropTypes.object,
    errorMessage: PropTypes.string,
    register: PropTypes.object
} 

export default SingleInput