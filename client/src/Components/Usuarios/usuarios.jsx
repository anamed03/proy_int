import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './usarios.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import { MdCancel } from "react-icons/md";


function Usu() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({
    email: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    axios.get('http://192.168.16.172:5000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener users:', error);
      });
  }, []);

  const handleDeleteUser = (id) => {
    axios.delete(`http://192.168.16.172:5000/api/users/${userid}`)
      .then(response => {
        console.log(response.data.message);
        setUsers(users.filter(usuario => usuario.id !== id));
      })
      .catch(error => {
        console.error('Error al eliminar usuario:', error);
      });
  };

  const handleEditUser = (id) => {
    setEditUserId(id);
    const selectedUser = users.find(usuario => usuario.id === id);
    setEditedUser({
      email: selectedUser.email,
      username: selectedUser.username,
      password: selectedUser.password
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitEdit = () => {
    axios.put(`http://192.168.16.172:5000/api/users/${editid}`, editedUser)
      .then(response => {
        console.log(response.data.message);
        setEditUserId(null);
      })
      .catch(error => {
        console.error('Error al editar usuario:', error);
      });
  };

  return (
    <div >
     <div >
     <h1 className='textt'>Lista de Usuarios</h1>
    
      <table className='user-table'>
        <thead>
          <tr>
            <th>ID Usuario</th>
            <th>Email</th>
            <th>Username</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>
              <td className='button-container'>
             
                {editUserId === usuario.id ? (
                  < >
                   <button onClick={() => handleEditUser(usuario.id)} className='iconn'>  < FaRegEdit className="iconn "/> Editar</button>
                    <button onClick={() => handleDeleteUser(usuario.id)} className='iconn'> < MdDeleteForever className="iconn "/> Eliminar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditUser(usuario.id)} className='iconn'>  < FaRegEdit className="iconn "/> Editar</button>
                    <button onClick={() => handleDeleteUser(usuario.id)} className='iconn'> < MdDeleteForever className="iconn "/> Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editUserId && (
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
          <h2 style={{ marginBottom: '20px' }}>Editar Usuarios</h2>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Email:</label>
              <input
                type="text"
                name="Nombre"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Username:</label>
              <input
                type="text"
                name="Categoria"
                value={editedUser.username}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
  <label style={{ marginRight: '10px' }}>Contraseña:</label>
  <input
    type="number"
    name="Cantidad"
    value={editedUser.password}
    onChange={handleInputChange}
  />
</div >
<div className='button-container'>
            <button onClick={handleSubmitEdit} className='iconn' > < BiSave className="iconn "/> Guardar</button>
            <button onClick={() => setEditUserId(null)} className='iconn'>  < MdCancel className="iconn "/>Cancelar</button>
  </div>    
          </form>
        </div>
      )}
      </div> 
    </div>
  );
}
export default Usu
