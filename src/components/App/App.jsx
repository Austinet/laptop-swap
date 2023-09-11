import { useState, createContext } from 'react'
import Modal from '../Modal/Modal'
import Register from '../Register/Register'
import './App.css'

export const ModalContext = createContext()

function App() {
  const [modal, setModal] = useState(false)

  const handleModal = (value) => {
    setModal(value)
  }
  
  return (
    <main>
      {modal && <Modal handleModal={handleModal}/>}
      <ModalContext.Provider value={handleModal}>
        <Register />
      </ModalContext.Provider>
    </main>
  )
}

export default App
