import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/block/LayOut"
import HomeScreen from "../pages/HomeScreen"

export const mainRoutes = createBrowserRouter([
    {
     path: "/",
     element: <LayOut />,
     children: [
        {
            index: true,
            element: <HomeScreen />
        }
     ]   
    }
])