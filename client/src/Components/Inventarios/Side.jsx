import React from 'react'
import './side.css'

// Imported Images ==========>
import logoo from '../../../src/LoginAssets/logoo.png'

// imported Icons ===========>
import {IoMdSpeedometer} from 'react-icons/io'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import { AiFillDashboard } from "react-icons/ai";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { AiFillSetting } from "react-icons/ai";
import { AiFillFileExcel } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import App from '../../App'
const Side = () => {

  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logoo} alt="Image Name" />
        <h2>Authomstic Logistic.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          Menú Rápido
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/dashboard" className='menuLink flex'>
                <AiFillDashboard className="icon"/>
                <span className="smallText">
                  Dashboard
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="/graficas" className='menuLink flex'>
                <AiOutlinePieChart className="icon"/>
                <span className="smallText">
                  Graficas
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="/inventario" className='menuLink flex'>
                <AiFillFileExcel className="icon"/>
                <span className="smallText">
                  Inventario
                </span>
            </a>
          </li>

        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          Herramientas
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/usuarios" className='menuLink flex'>
                <FaUserCog  className="icon"/>
                <span className="smallText">
                  Usuarios
                </span>
            </a>
          </li>
    
          <li className="listItem">
            <a href='#' className='menuLink flex'>
                <AiFillSetting className="icon"/>
                <span className="smallText">
                  Configuración Usuario
                </span>
            </a>
          </li>

        </ul>
      </div>

        </div>
  )
}

export default Side