import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseDetails=useLoaderData();
    const {courseName,courseDetail, price,instructorName,courseDuration }=courseDetails;
    return (
        <>
        <h1 className='text-5xl'>CheckOut This Course</h1>
        <div className='grid grid-rows-1 border border-indigo-600 w-2/4 mr-auto ml-auto'>
            <div className='mt-10'> 
                <h1 className='text-3xl'>Course Name:{courseName}</h1>
                <h2 className='text-3xl'>Instructor Name:{instructorName}</h2>
                <h2 className='text-3xl'>Course Duration:{courseDuration} Hours</h2>
                <h2 className='text-3xl'>Course Price:{price}</h2>
                <button onClick={()=>alert('You Get The Access Of The Course')} className="ml-auto mr-1 btn btn-outline btn-info">Buy Now</button>
            </div>
        </div>
        </>
        
    );
};

export default Checkout;