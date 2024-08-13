import React, { useEffect } from 'react'

const NoEncontrada = () => {
  useEffect(() => {
    document.title = 'Educacion IT - No Encontrada'
  }, [])
  return (
    <div className='alert alert-danger p-5 mt-4'>NoEncontrada - 404</div>
  )
}

export default NoEncontrada