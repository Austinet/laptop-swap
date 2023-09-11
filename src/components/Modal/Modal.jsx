import {useEffect} from 'react'
import PropTypes from 'prop-types'
import checkmark from './checkmark.png'
import './modal.css'

const Modal = ({handleModal}) => {
  useEffect(() => {
      setTimeout(() => handleModal(false), 3000)
  }, [handleModal])

  return (
    <div className="modalContainer">
        <div className='modal'>
          <div className='message'>
             <p>Registration Successful</p>
             <img src={checkmark} alt="Green Checkmark" />
          </div>
          <div className='line'>
            <p></p>
          </div>
        </div>
    </div> 
  )
}
 
Modal.propTypes = {
  handleModal: PropTypes.func
}

export default Modal