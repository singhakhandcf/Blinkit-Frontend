import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OtpVerification from "../pages/OtpVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import UserMenuMobile from "../pages/userMenuMobile";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"search",
                element:<SearchPage/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"otp-verification",
                element:<OtpVerification/>
            },
            {
                path:"forgot-password",
                element:<ForgotPassword/>
            },
            {
                path:"reset-password",
                element:<ResetPassword/>
            },
            {
                path:"user",
                element:<UserMenuMobile/>
            },
            {
                path:"/dashboard/profile",
                element:<Profile/>
            }
        ]
    }
])

export default router