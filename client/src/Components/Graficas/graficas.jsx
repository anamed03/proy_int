
import GraficaProductos from './lines'

import './graficas.css'

function Grafi (){
return(
    <div>
            <h1 className="textt"> Optimización de Inventario </h1>
            <div >
            <GraficaProductos />
            </div>
           
             <div className="recuadro-texto">
                 <p> La categorias que manejamos se clasifican por numeros:
                    Categoria 1 es igual a limpieza del hogar, que tiene que ver con detergentes, cloro, ect.
                    </p>
                    <p>Categoria 2 es igual a Comida, que tiene que ver con comida enlatada, salsas, ect.</p>
              </div>
        
    </div>
)
}
export default Grafi

