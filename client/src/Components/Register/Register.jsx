import React, {useState}from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

// Import our assets
import video from '../../LoginAssets/fond.webp'
import logo from '../../LoginAssets/logoo.png'

//IMported Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";


const Register = () => {
  // UseState to hold our inputs
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
 
  const navigateTo = useNavigate()

  // Onclick let us get what the user has entered
  const createUser = (e)=>{
    e.preventDefault()
    // We shall require Axios to create an API that connects to the server - lets install that 
    Axios.post('https://athom-back.onrender.com/register', {
      // create variable to send to the server through the route
      Email: email,
      UserName: userName, 
      Password: password
    }).then(()=>{
      // On register let us redirect the user to the login page
      navigateTo('/')

      // Let us clear the fields too
      setEmail('')
      setUserName('')
      setUserName('')

    })
  }


  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
        <img src={video}></img>

        <div className="textDiv">
          <h2 className='title'>Una visión al futuro </h2>
          <p>!Se diferente, se único!</p>
        </div>

        <div className="footerDiv flex">
          <span className="text">¿Ya tienes cuenta? ¡Inicia Sesión!</span>
          <Link to={'/'}>
          <button className='btn'>Iniciar Sesión</button>
          </Link>
        </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>¡Se parte de nosotros!</h3>
          </div>

          <form action="" className='form grid'>






            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type="email" id='email' placeholder='Ingresa tu Email' onChange={(event)=>{
                  setEmail(event.target.value)
                }}/>
              </div>
            </div>


            <div className="inputDiv">
              <label htmlFor="username">Usuario</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Ingresa tu usuario'  onChange={(event)=>{
                  setUserName(event.target.value)
                }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Ingresa tu contraseña'   onChange={(event)=>{
                  setPassword(event.target.value)
                }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
              <span>Registro</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

           

          </form>
        </div>

      </div>
    </div>
  )
}

export default Register