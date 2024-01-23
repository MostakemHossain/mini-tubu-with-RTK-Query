import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingleVideos from "../pages/singleVideos/SingleVideos";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/videos/:videoId',
                element:<SingleVideos/>
            }
        ]
    },
]);

export default router;