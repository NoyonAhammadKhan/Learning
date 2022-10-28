import React from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from '../../Courses/CourseDetails/CourseDetails';
import './Home.css';
import Background from '../../../image/background/bg-1.jpg';

const Home = () => {
    return (
     <>
     <section className='main-container'>
        <div className='bg-gradient-to-r from-blue-500 to-transparent w-2/4 ml-auto mr-auto mt-44 p-14'>
        <h1 className='text-9xl text-white'>Code.Pro</h1>
            <h1 className='text-6xl text-white'>We are here to provide you the great courses</h1>
        </div>
     </section>
     </> 
    );
};

export default Home;