import React, { useEffect } from 'react'

const Inicio = () => {
  useEffect(() => {
    document.title = 'Educacion IT - Inicio'
  }, [])
  return (
    <div className="container">
    <div className='display-1 text-danger'>Inicio</div>
    </div>
    
  )
}

export default Inicio