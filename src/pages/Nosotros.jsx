import React, { useEffect } from 'react'

const Nosotros = () => {
  useEffect(() => {
    document.title = 'Educacion IT - Nosotros'
  }, [])
  return (
    <div className='display-1 text-danger'>Nosotros</div>
  )
}

export default Nosotros