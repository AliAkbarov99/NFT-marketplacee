import { createBrowserRouter } from "react-router-dom";
import Marketplace from '../Pages/Marketplace'
import Rankings from '../Pages/Rankings'
import AddArtist from '../Pages/AddArtist'
import MainRoot from '../Pages/MainRoot'

export const Routes = createBrowserRouter([
    {
        path:"",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Marketplace/>
            },
            {
                path:"/rankings",
                element:<Rankings/>
            },
            {
                path:"/addartist",
                element:<AddArtist/>
            }
        ]
    }
])


export default Routes








