import Side from "../Inventarios/Side"
import Usu from "./usuarios"



const Usuarios= () => {
    return (
      <div className='dashboard flex'>
         <div className="dashboardContainer flex">
          <Side/>
          <Usu/>
          
         </div>
      </div>
    )
  }
  
  export default Usuarios