import { FaReact } from 'react-icons/fa'
import React from 'react'
import { useState } from 'react'

export const Ex1 = () => {
  const [agree, setAgree] = useState(false)

  const handleArgeeCheckbox = (e) => {
    setAgree(e.target.checked)
  }

  return (
    <div className='w-full min-h-screen flex gap-4 items-center justify-center select-none'>
      <label >
        <input
          id="check"
          type="checkbox"
          className='mr-2 cursor-pointer'
          // checked={agree}
          onChange={handleArgeeCheckbox}
        />
        I agree to sold my soul
      </label>
      <h1>{agree ? 'true' : "false"}</h1>
      <button
        disabled={!agree}
        className='bg-rose-500 text-white rounded-full px-6 py-3 flex items-center gap-x-2 hover:bg-rose-600 '>
        <FaReact />
        Register
      </button>

    </div>
  )
}

export default Ex1