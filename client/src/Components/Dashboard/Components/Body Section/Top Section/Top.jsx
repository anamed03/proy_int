import React from 'react'
import './top.css'

// Imported Icons ===========>
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

// Imported Image =========>
import img from '../../../Assets/user (3).png'
import img2 from '../../../Assets/image (2).png'
import video from '../../../Assets/video.mp4'
import fondo2 from '../../../Assets/fond.webp'
import fondo3 from '../../../Assets/fondo3.jpg'


const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido a tu sistema automatizado.</h1>
          <p>¡Te estabamos esperando!</p>
        </div>

        <div className="searchBar flex">
           <input type="text"  placeholder='Search Dashboard'/>
           <BiSearchAlt className="icon"/>
        </div>

      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Una visión al futuro</h1>
          <p className='blanco'> ¡El mundo esta cambiando y tú con el!</p>

         

          <div className="videoDiv">
            <img src={fondo3}></img>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

             <div className="textDiv">
              <h1>My Stat</h1>
             </div>

            <div className="imgDiv">
              <img src={fondo2} alt="Image Name" />
            </div>

           
          </div>

           {/* We shall use this card later .... */}
            <div className="sideBarCard">
              <BsQuestionCircle className="icon"/>
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Planti, please contact us from for more questions.</p>

                <button className='btn'>Go to help center</button>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Top