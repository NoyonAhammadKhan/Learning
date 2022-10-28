import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
  const courses=useLoaderData();
    return (
      <>
      <h1 className='text text-5xl'>Explore Our Important Courses</h1>
       <div className='grid grid-cols-4 gap-4 mt-10 mb-10 '>
          
          <div className='ml-3 grid grid-cols-1 gap-4'>
          <div>
           {
             courses.map(course=> <Link to={`/course-details/${course._id}`}>
               <div className="grid mb-3 w-50 h-20 rounded bg-accent text-accent-content place-content-center">{course.courseName}</div> 
             </Link>)
           }
             
           </div>
         </div>   
         <div className='grid  grid-cols-3  col-span-3 gap-3'>
           {
             courses.map(course=><Course key={course._id} course={course}/>)
           }
            
         </div>
         </div>
      </>
       
      
    );
};

export default Courses;