import React from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from '../../Courses/CourseDetails/CourseDetails';
import './Home.css';
import Background from '../../../image/background/bg-1.jpg';

const Home = () => {
    return (
     <>
     <section className='main-container'>
        <div>
            <h1 className='text-6xl'>We are here to provide you the great courses</h1>
        </div>
     </section>
     </> 
    );
};

export default Home;