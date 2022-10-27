import React from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from '../../Courses/CourseDetails/CourseDetails';

const Home = () => {
    return (
        <div>
         <div className='bg-emerald-300 w-3/4 mr-auto ml-auto mb-auto mt-20' >
            <h1 className='text-9xl'>Welcome to<br></br>{`</>`} Code.Pro</h1>
            <h1 className='text-9xl'>Please Browse Our Courses</h1>
            <Link to={`/courses`}><button className='btn btn-info text-5xl mt-5 mb-5'>Browse Courses</button></Link>
        </div>
        </div>
      
    );
};

export default Home;