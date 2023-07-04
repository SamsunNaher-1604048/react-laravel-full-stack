import {Navigate, createBrowserRouter,} from "react-router-dom";
import Login from '../pages/Login';
import Signup from "../pages/Signup";
import User from "../pages/User";
import Notfound from "../pages/Notfound";
import Defaultlayout from "../components/Defaultlayout";
import Gaustlayout from "../components/Gaustlayout";
import Dashboard from "../pages/Dashboard";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<Defaultlayout/>,

        children:[
            {
                path:"/",
                element:<Navigate to="/user"/>

            },
            {
                path:"/user",
                element:<User/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>

            }
        ]
    },

    {
        path:"/",
        element:<Gaustlayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            }
        ]
    },

    {
        path:"/*",
        element:<Notfound/>
    }

])

export default Route


  