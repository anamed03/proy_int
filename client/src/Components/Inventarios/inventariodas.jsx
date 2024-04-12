
import Side from "./Side"
import Inven from "./inventario"

const Inventario = () => {
    return (
      <div className='dashboard flex'>
         <div className="dashboardContainer flex">
          <Side/>
          <Inven/>
          
         </div>
      </div>
    )
  }
  
  export default Inventario