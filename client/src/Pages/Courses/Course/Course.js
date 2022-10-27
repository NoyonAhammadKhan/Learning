import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const{courseDuration,courseName,alreadyEnrolled,price,instructorName,instructor,courseDetail,_id}=course;
    console.log(course)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{courseName}</h2>
            <p>{courseDetail.slice(0,150)}</p>
            <div className="card-actions">
            <span>Course Duration:{courseDuration}</span>
            <span>Rating:{instructor[0].rating}</span>
            <span>Instructor Name:{instructorName}</span>
        </div>
        <div>
        <Link to={`/course-details/${course._id}`}> <button className='btn btn-info'>Course Details</button> </Link>
        </div>
         </div>
    </div>
        </div>
    );
};

export default Course;