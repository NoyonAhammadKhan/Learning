import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Login from '../../Pages/Authentication/Login/Login';
import Register from '../../Pages/Authentication/Register/Register';
import Blogs from '../../Pages/Blog/Blogs/Blogs';
import Checkout from '../../Pages/Checkout/Checkout';
import CourseDetails from '../../Pages/Courses/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home/Home';
import NotFound from '../../Pages/Shared/NotFound/NotFound';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

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
              
                loader:()=>fetch('https://education-noyonahammadkhan.vercel.app/courses'),
                element:<Courses/>,
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
                path:'/course-details/:id',
                loader:({params})=>fetch(`https://education-noyonahammadkhan.vercel.app/course/${params.id}`),
                element:<CourseDetails/>,
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><Checkout/></PrivateRoutes>,
                loader:({params})=>fetch(`https://education-noyonahammadkhan.vercel.app/course/${params.id}`),
            },
            {
                path:"*",
                element:<NotFound/>
            }

        ]
    }
])
export default router;