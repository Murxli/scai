import React from 'react'

const Button = ({className,onClick, children}) => {
  return (
    <button 
    onClick={onClick}
    className={`bg-[#7F00FF] hover:bg-[#8F00FF] inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}>
        {children}
    </button>
  )
}

export default Button