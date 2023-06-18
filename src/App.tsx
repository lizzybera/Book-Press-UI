import {RouterProvider} from "react-router-dom"
import { mainRoutes } from "./routes/mainRoutes"

const App = ()=>{
  return(
    <div>
      <RouterProvider router={mainRoutes} />
    </div>
  )
}

export default App