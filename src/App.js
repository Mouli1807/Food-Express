import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import './index.css';
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import ContactUs from "./components/ContactUs";
import { lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./RTStore/appStore";
import Cart from "./components/Cart";


const About = lazy(() => import("./components/About") );
function Applayout() {
    return (
        <Provider store={appStore}>
            <div >
                <Header />
                <div >
                    <Outlet />
                </div>
                
            </div>
        </Provider>
    );
}



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children : [
          
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestuarantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
        ],
        errorElement: <Error/>,
    },

  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} /> );

