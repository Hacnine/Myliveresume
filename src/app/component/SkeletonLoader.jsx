import React from 'react';
import { contactMethods } from '../constant';

const SkeletonLoader = () => {
    return (
        <div className="min-h-fit flex flex-wrap items-center flex-col justify-center  bg-slate-900   ">
            {/* Header Skeleton */}
            <div className="min-h-screen container w-[700px] mx-auto animate-pulse  bg-slate-900 text-white flex flex-col items-center justify-center  ">
                <nav className="w-full flex justify-end p-4 space-x-4 animate-pulse ">
                    <div className="bg-gray-700 rounded h-3 w-10"></div>
                    <div className="bg-gray-700 rounded h-3 w-10"></div>
                    <div className="bg-gray-700 rounded h-3 w-10"></div>
                    <div className="bg-gray-700 rounded h-3 w-10"></div>
                    <div className="bg-gray-700 rounded h-3 w-10"></div>
                </nav>

                <div className=' flex gap-4 animate-pulse'>
                    <div className="bg-gray-700 rounded  h-[50px] w-[120px]"></div>
                    <div className="bg-gray-700 rounded  h-[50px] w-[80px]"></div>
                    <div className="bg-gray-700 rounded  h-[50px] w-[120px]"></div>

                </div>
                <div className="flex flex-col  items-center justify-center mt-8 w-full " >
                    <div className="text-center md:text-left p-4">
                        <div className="bg-gray-700 h-10 w-3/4 mx-auto rounded animate-pulse"></div>
                        <div className="mt-4 flex space-x-4 animate-pulse">
                            <div className="bg-gray-700 rounded h-6 w-24"></div>
                            <div className="bg-gray-700 rounded h-6 w-24"></div>
                            <div className="bg-gray-700 rounded h-6 w-24"></div>
                        </div>
                        <div className="mt-4 px-4 py-2 bg-gray-700 rounded w-full h-14 mx-auto animate-pulse"></div>
                    </div>
                    <div className="text-center md:text-left  p-4 w-full">
                        <div className="bg-gray-700 h-6 mx-auto rounded animate-pulse"></div>
                        <div className="flex items-center between gap-4 w-full -2">
                            <div className="bg-gray-700 size-12 w-full  mt-4 rounded animate-pulse"></div><div className="bg-gray-700 size-12 w-full mt-4 rounded animate-pulse"></div><div className="bg-gray-700 size-12 w-full mt-4 rounded animate-pulse"></div><div className="bg-gray-700 size-12 w-full mt-4 rounded animate-pulse"></div>
                        </div>
                       
                    </div>
                </div>

                <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center md:mb-4">
                    {contactMethods.slice(0, 3).map((method, index) => (
                        <div
                            key={index}
                           
                            className="flex items-center mx-4 my-2 bg-gray-700  px-3 py-3 text-yellow-500 rounded-md"
                        >
                        
                            <span className="ml-1 md:text-base text-gray-700 text-xs w-16"></span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    {contactMethods.slice(3, 5).map((method, index) => (
                        <div
                            
                            className="flex items-center mx-4 my-2 bg-gray-700  px-3 py-3 text-yellow-500 rounded-md"
                        >
                          
                             <span className="ml-1 md:text-base text-gray-700 text-xs w-16"></span>
                        </div>
                    ))}
                </div>
            </div>
            </div>


        </div>
    );
};

export default SkeletonLoader;
