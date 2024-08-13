import React from 'react'
import { notificacionSweet } from './TablaFila.service'

const TablaFila = ({product, eliminarProducto, setProductoAEditar}) => {
  const handleEliminar = ()=>{
    console.log('hicieron click en eliminar')
    notificacionSweet(product.nombre, ()=>{
      eliminarProducto(product.id)
    })
  }
  const handleEditar = (prod)=>{
    console.log(prod)
    setProductoAEditar(prod)
  }
  return (
  
    <tr>
      <td>{product.nombre}</td>
      <td>{product.categoria}</td>
      <td>{product.precio}</td>
      <td>
        <button className="btn btn-primary me-3" onClick={()=>handleEditar(product)}>Editar</button>
        <button className="btn btn-secondary" onClick={handleEliminar}>Eliminar</button>
      </td>
    </tr>    
    
  )
}

export default TablaFila