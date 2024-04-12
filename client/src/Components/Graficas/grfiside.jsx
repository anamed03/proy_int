
import Side from "../Inventarios/Side"
import Grafi from "./graficas"


const Graficas= () => {
    return (
      <div className='dashboard flex'>
         <div className="dashboardContainer flex">
          <Side/>
       <Grafi/> 
          
         </div>
      </div>
    )
  }
  
  export default Graficas