import React, { useEffect, useState } from 'react'

const Formulario = ({agregarProducto, productoAEditar, editarProducto }) => {
  const formInicial = {
    id: null,
    nombre: '',
    categoria: '',
    precio: '',
  }
  const [form, setForm] = useState(formInicial)
  const handleReset = ()=>{
    setForm(formInicial)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (form.id === null) {
      agregarProducto(form)
    }else{
      editarProducto(form)
    }

      handleReset()
  }
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
      
  }
  useEffect(() => {
    console.log('cambió el producto')
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar])
  
  return (
    <div>
          <h2>Formulario de { productoAEditar ? 'edición' : 'creación'}</h2>
    <form className='w-75 border bg-body-secondary border-danger rounded-3 p-4' onSubmit={handleSubmit}>
        <div className="mb-3">
            {/* Campo nombre */}
            <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
            <input 
            type="text" 
            className="form-control" 
            id="lbl-nombre" 
            placeholder="Ingrese el nombre" 
            name='nombre'
            value = {form.nombre} 

            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
            {/* Campo categoria */}
            <label htmlFor="lbl-categoria" className="form-label">categoria</label>
            <input 
            type="text"
             className="form-control" 
             id="lbl-categoria" 
             placeholder="Ingrese el categoria" 
             name='categoria'
             value={form.categoria} 
             onChange={handleChange}/>
        </div>

        <div className="mb-3">
            {/* Campo precio */}
            <label htmlFor="lbl-precio" className="form-label">precio</label>
            <input type="text" 
            className="form-control" 
            id="lbl-precio" 
            placeholder="Ingrese el precio" 
            name='precio'
            value={form.precio}
            onChange={handleChange}/>
        </div>
        <div className="align-middle d-flex justify-content-around">
        <button type="submit" className="btn btn-dark me-3 " >{productoAEditar ? 'Editar' : 'Enviar'}</button>
        <button type="reset" className="btn btn-danger " onClick={handleReset}>Resetear</button>
        </div>

    </form>
    
    </div>
  )
}

export default Formulario