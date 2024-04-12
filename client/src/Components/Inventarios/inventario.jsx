import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './inventario.css';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

function Inven() {
  const [productos, setProductos] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    QR: '',
    Nombre: '',
    Categoria: '',
    Cantidad: ''
  });

  useEffect(() => {
    axios.get('https://athom-back.onrender.com/api/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    axios.delete(`https://athom-back.onrender.com/api/productos/${id}`)
      .then(response => {
        console.log(response.data.message);
        setProductos(productos.filter(producto => producto.IdProducto !== id));
      })
      .catch(error => {
        console.error('Error al eliminar producto:', error);
      });
  };

  const handleEditProduct = (id) => {
    setEditProductId(id);
    const selectedProduct = productos.find(producto => producto.IdProducto === id);
    setEditedProduct({
      QR: selectedProduct.QR,
      Nombre: selectedProduct.Nombre,
      Categoria: selectedProduct.Categoria,
      Cantidad: selectedProduct.Cantidad
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitEdit = () => {
    axios.put(`https://athom-back.onrender.com/api/productos/${editProductId}`, editedProduct)
      .then(response => {
        console.log(response.data.message);
        setEditProductId(null);
      })
      .catch(error => {
        console.error('Error al editar producto:', error);
      });
  };

  return (
    <div>
      <h1 className='textt'>Lista de Productos</h1>
      <table className='user-table'>
        <thead>
          <tr>
            <th>ID Producto</th>
            <th>QR</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.IdProducto}>
              <td>{producto.IdProducto}</td>
              <td>{producto.QR}</td>
              <td>{producto.Nombre}</td>
              <td>{producto.Categoria}</td>
              <td>{producto.Cantidad}</td>
              <td className='button-container'>
                {editProductId === producto.IdProducto ? (
                  <>
                    <button onClick={() => handleEditProduct(producto.IdProducto)} className='iconn'> <FaRegEdit className="iconn" /> Editar</button>
                    <button onClick={() => handleDeleteProduct(producto.IdProducto)} className='iconn'> <MdDeleteForever className="iconn" /> Eliminar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditProduct(producto.IdProducto)} className='iconn'> <FaRegEdit className="iconn" /> Editar</button>
                    <button onClick={() => handleDeleteProduct(producto.IdProducto)} className='iconn'> <MdDeleteForever className="iconn" /> Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProductId && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          zIndex: '999'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Editar Producto</h2>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>QR:</label>
              <input
                type="text"
                name="QR"
                value={editedProduct.QR}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Nombre:</label>
              <input
                type="text"
                name="Nombre"
                value={editedProduct.Nombre}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Categoría:</label>
              <input
                type="text"
                name="Categoria"
                value={editedProduct.Categoria}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Cantidad:</label>
              <input
                type="number"
                name="Cantidad"
                value={editedProduct.Cantidad}
                onChange={handleInputChange}
              />
            </div>
            <div className='button-container'>
              <button onClick={handleSubmitEdit} className='iconn'> <BiSave className="iconn" /> Guardar</button>
              <button onClick={() => setEditProductId(null)} className='iconn'> <MdCancel className="iconn" /> Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Inven;
