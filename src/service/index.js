import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import HomeYa from "../pages/Home";
import DetailPage from "../pages/Detail";
import Checkout from "../pages/Checkout"
import ProductPage from "../pages/Product";
import { Provider } from "react-redux";
import store from "../store";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeYa />,
        children: [
            {
                index: true,
                element:<ProductPage />,
            },
            {
                path: "detail/:id",
                element:<DetailPage />,
            },
            {
                path: "checkout",
                element:<Checkout />,
            }
        ]
       
    }
])

const RestRouter = () => {
    return <Provider store={store}> 
    <RouterProvider router={router} />
    </Provider> 

};

export default RestRouter;