import React from 'react'
import { IoClose } from 'react-icons/io5'

const Modal = (props) => {
    const {closeModal, content, showCloseButton} = props
    return (
        <div id="modal-container" className='fixed top-0 left-0 w-full h-full items-center flex justify-center'>
          <div 
          id="modal-shadow" 
          onClick={closeModal}
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40'></div>
          <div 
          id='modal' 
          className='bg-gray-200 shadow-lg p-4 relative rounded-lg z-50'
          >
            {content}
            {showCloseButton && <button 
            onClick={closeModal}
            className='absolute -top-2 -right-2 bg-gray-800 rounded-full w-6 h-6 text-white items-center justify-center flex'
            >
              <IoClose />
            </button>}
          </div>
        </div>
    )
}

export default Modal
