import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import IMG1 from '../../../image/courseImage/img-1.png';
import InsImg from '../../../test_image/instructorImage/img-2.jpg';
import {FaRegFilePdf} from 'react-icons/fa';
// import {PDFDownloadLink} from '@react-pdf/renderer';
// import PDFFile from '../PDFFile/PDFFile';

const CourseDetails = () => {
  const courseDetails=useLoaderData();
  console.log(courseDetails)
  const {courseName, price,courseDetail,_id,instructorName,courseDuration,instructor,picture}=courseDetails;
  return (
    <div>
    {/* <div className='w-3/4 mr-auto ml-auto'>
      <div className="border-8 border-indigo-600 ">
        <div className="p-10">
      
          <div className=" w-full lg:max-w-full lg:flex min-h-full">
            <img src={IMG1} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt="" />
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={InsImg} alt="Avatar of Writer" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">John Smith</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div> */}

    <div className='grid grid-rows-1 border border-indigo-600 w-2/4 mr-auto ml-auto bg-gray-200'>
        <div className='grid grid-cols-1'>
          <h1 className='text-5xl inline-block'>{courseName}(<button className="btn text-3xl btn-info ml-3"><p>Download</p> <FaRegFilePdf/></button>)</h1>
           {
         
            //   {
            //     ({loading})=> loading ? :
            //   }
            

          }
          <div className='mt-9 mb-9'>
            <span className='mr-3 text-xl border border-indigo-300 p-2 bg-fuchsia-400'>Course Instructor:{instructorName}</span>
            <span className='mr-3 text-xl border border-indigo-300 p-2 bg-fuchsia-400'>Course Duration:{courseDuration}Hours</span>
            <span  className='mr-3 text-xl border border-indigo-300 p-2 bg-fuchsia-400'>Price:{price}</span>
            <span  className='mr-3 text-xl border border-indigo-300 p-2 bg-fuchsia-400'>Rating:{instructor[0].rating}</span>
          </div>
          <div className='grid grid-cols-2'>
          <div>
            <img src={'https://postimg.cc/mcmtnVdD'} style={{width:'400px'}} alt="" />
          </div>
          <div>
            <p>{courseDetail}</p>
          </div>
        </div>
        <div>
        <div className='ml-20 mr-1 mt-5'>
           <Link to={`/checkout/${_id}`}><button className="ml-auto mr-1 btn  btn-info">Get Premium Access</button></Link>
       </div>
        </div>
        </div>
        

    </div>
  
   </div>
  );
};

export default CourseDetails;