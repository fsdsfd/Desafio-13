import React, { useEffect } from 'react'

const Contacto = () => {
  useEffect(() => {
    document.title = 'Educacion IT - Contacto'
  }, [])
  return (
    <div className='display-1 text-danger'>Contacto</div>
  )
}

export default Contacto