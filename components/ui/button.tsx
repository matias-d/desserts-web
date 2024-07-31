import React from 'react'

interface ButtonProps {
    title : string
    handleClick? : () => void
}

export default function Button({ handleClick, title } : ButtonProps) {
  return (
    <button onClick={handleClick} className='rounded-full w-full text-white bg-primary py-3 hover:bg-primary/90 transition-colors font-semibold text-sm'>{title}</button>
  )
}
