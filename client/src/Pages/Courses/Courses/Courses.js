import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
  const courses=useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-4 mt-10 mb-10 '>

         <div className='ml-3 grid grid-cols-1 gap-4'>
         <div>
            <div className="grid w-50 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
          </div>
        </div>   
        <div className='grid  grid-cols-3  col-span-3 gap-3'>
          {
            courses.map(course=><Course key={course._id} course={course}/>)
          }
           
        </div>
        </div>
      
    );
};

export default Courses;