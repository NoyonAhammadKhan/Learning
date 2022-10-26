import React from 'react';

const Course = ({course}) => {
    const{courseDuration,courseName,alreadyEnrolled,price}=course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{courseName}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div>
         </div>
    </div>
        </div>
    );
};

export default Course;