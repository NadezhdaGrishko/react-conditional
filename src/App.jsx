import { useState } from 'react'
import Modal from './components/Modal'

const App = () => {

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const modalContent = 'Some modal content'

  return (
    <div className='w-full flex items-center justify-center min-h-screen'>
      <button className='bg-gray-500 rounded-lg p-4 shadow-sm text-white'
        onClick={openModal}
      >
        Show Modal
      </button>

      {showModal && 
      <Modal closeModal={closeModal} content={modalContent} showCloseButton={true}/>
        }
    </div>

  )
}

export default App
