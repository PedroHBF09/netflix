import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Movie from "../pages/movie/Movie";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },   
    {
        path: "/movie/:id",
        element: <Movie /> 
    },
])
export default Router