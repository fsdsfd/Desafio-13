import React, { useEffect, useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'

const Alta = () => {
  const url = import.meta.env.VITE_API_PRODUCTOS
  const [products, setProducts] = useState(null)
  console.log(products)
  const [productoAEditar, setProductoAEditar] = useState(null)
  useEffect(() => {
    document.title = 'Desafio 13 - Productos'
    obtenerTodoslosProductos()
  }, [])
  
  const obtenerTodoslosProductos = async ()=>{
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error('El producto no se pudo enviar', res.status)
        }
        const data = await res.json()
        console.log(data)
        setProducts(data)
      } catch (error) {
       console.log('obtenerTodosLosProductos', error) 
      }
  }
  const agregarProducto = async (producto) =>{
    try {
      const options = {
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(producto)
      }
      const res = await fetch(url,options)
      if (!res.ok) {
        throw new Error('No se pudo enviar el producto', res.status)
      }
      const dataNuevoEstadoProductos = await res.json()
      const nuevoEstadoProductos = [...products, dataNuevoEstadoProductos]
      setProducts(nuevoEstadoProductos)
    } catch (error) {
      console.log('agregarProducto', error)
    }
  }
  const editarProducto = async (productoEditado) =>{
      try {
        const options = {
          method : 'PUT',
          headers : {'content-type' : 'application/json'},
          body : JSON.stringify(productoEditado)
        }
        console.log(productoEditado)
        const urlEditada = url + productoEditado.id
        const res = await fetch(urlEditada, options)
        if (!res.ok) {
          throw new Error('Error al enviar el producto', res.status)
        }
        const dataEdicion = await res.json()
        console.log(dataEdicion)
        const nuevoEstadoProductos = products.map(prod=>
         (prod.id === productoEditado.id)? productoEditado : prod)
          setProducts(nuevoEstadoProductos)
      } catch (error) {
        console.log('editarProducto', error)
      }
  }
  const eliminarProducto = async (id)=>{
      try {
        const options = {
          method: 'DELETE'
        }
        const urlEliminar = url + id
        const res = await fetch(urlEliminar, options)
        if (!res.ok) {
          throw new Error('Problema al eliminar el producto', res.status)
        }
        const dataEliminado = await res.json()
        
        const data = {
          id: id,
          producto: dataEliminado
        }
        const nuevoEstadoProductos = products.filter(prod => prod.id !== data.id)
        setProducts(nuevoEstadoProductos)
      } catch (error) {
        console.log('eliminarProducto', error)
      }
  }
  return (
    <div>
      <Formulario agregarProducto={agregarProducto}
      productoAEditar={productoAEditar}
      setProductoAEditar={setProductoAEditar}
      editarProducto={editarProducto}></Formulario>
      <Tabla 
        products={products} 
        eliminarProducto={eliminarProducto}
        setProductoAEditar={setProductoAEditar}
      />
    </div>
  )
}

export default Alta