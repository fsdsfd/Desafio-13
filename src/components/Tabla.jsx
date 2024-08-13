import TablaFila from './TablaFila'

const Tabla = ({products, eliminarProducto, setProductoAEditar}) => {
  return (
    <>   
     <h2>Tabla de productos</h2>
    <table className="table table-stripped">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Categoría</th>
      <th scope="col">Precio</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
       products && products.map((product, idx) => (
          <TablaFila key={idx} product={product} 
          eliminarProducto={eliminarProducto}
          setProductoAEditar = {setProductoAEditar} />
            ))
    }
  </tbody>
</table>
    </>

  )
}

export default Tabla