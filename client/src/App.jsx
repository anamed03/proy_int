import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Graficas from './Components/Graficas/grfiside'
import Inventario from './Components/Inventarios/inventariodas'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Usuarios from './Components/Usuarios/usuadash'



// Import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


// lets create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }, 
  {
    path: '/usuarios',
    element: <div><Usuarios/></div>
  },
  {
    path: '/graficas',
    element: <div><Graficas/></div>
  },
  {
    path: '/inventario',
    element: <div><Inventario/></div>
  }
 
  

])

function App() {
  return (
   <div>
     <RouterProvider router={router}/>
   </div>
  )
}

export default App
