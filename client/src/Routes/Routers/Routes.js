import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Login from '../../Pages/Authentication/Login/Login';
import Register from '../../Pages/Authentication/Register/Register';
import Blogs from '../../Pages/Blog/Blogs/Blogs';
import Courses from '../../Pages/Courses/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home/Home';
import NotFound from '../../Pages/Shared/NotFound/NotFound';

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/courses',
                element:<Courses/>,
                loader:()=>fetch('https://education-noyonahammadkhan.vercel.app/courses')
            },
            {
                path:'/faq',
                element:<FAQ/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
])
export default router;