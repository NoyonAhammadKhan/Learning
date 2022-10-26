import React from 'react';
import IMG1 from '../../../test_image/courseImage/img-1.png';
import InsImg from '../../../test_image/instructorImage/img-2.jpg'
const CourseDetails = () => {
  return (
    <div className='w-3/4 mr-auto ml-auto'>
    <div className="border-8 border-indigo-600 ">
    <div className="p-10">
    {/* <!--Card 1--> */}
    <div className=" w-full lg:max-w-full lg:flex min-h-full">
      <img src={IMG1} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt="" />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={InsImg} alt="Avatar of Writer"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">John Smith</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
};

export default CourseDetails;