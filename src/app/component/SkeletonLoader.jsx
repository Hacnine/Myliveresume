import React from 'react';
import { contactMethods } from '../constant';

const SkeletonLoader = () => {
    return (
        <div className="min-h-fit flex flex-wrap items-center flex-col justify-center bg-slate-900 p-4">
            {/* Header Skeleton */}
            <div className="min-h-screen container w-full max-w-[700px] mx-auto animate-pulse bg-slate-900 text-white flex flex-col items-center justify-center">
                <nav className="w-full flex justify-end p-4 space-x-2 md:space-x-4">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="bg-gray-700 rounded h-3 w-6 md:w-10"></div>
                    ))}
                </nav>

                <div className="flex gap-2 md:gap-4 animate-pulse">
                    <div className="bg-gray-700 rounded h-[40px] md:h-[50px] w-1/3 md:w-[120px]"></div>
                    <div className="bg-gray-700 rounded h-[40px] md:h-[50px] w-1/4 md:w-[80px]"></div>
                    <div className="bg-gray-700 rounded h-[40px] md:h-[50px] w-1/3 md:w-[120px]"></div>
                </div>

                <div className="flex flex-col items-center justify-center mt-8 w-full">
                    <div className="text-center p-4 w-full">
                        <div className="bg-gray-700 h-8 md:h-10 w-3/4 mx-auto rounded"></div>
                        <div className="mt-4 flex space-x-2 md:space-x-4">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="bg-gray-700 rounded h-5 md:h-6 w-20 md:w-24"></div>
                            ))}
                        </div>
                        <div className="mt-4 px-4 py-2 bg-gray-700 rounded w-full h-12 md:h-14 mx-auto"></div>
                    </div>

                    <div className="text-center p-4 w-full">
                        <div className="bg-gray-700 h-5 md:h-6 w-1/2 mx-auto rounded"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-4 w-full">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="bg-gray-700 h-12 md:h-14 w-full rounded"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Methods */}
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-wrap justify-center md:mb-4">
                        {contactMethods.slice(0, 3).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center mx-2 md:mx-4 my-2 bg-gray-700 px-3 py-2 md:py-3 rounded-md w-20 md:w-24 h-8 md:h-10"
                            >
                                <span className="ml-1 md:text-base text-gray-700 text-xs w-16"></span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        {contactMethods.slice(3, 5).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center mx-2 md:mx-4 my-2 bg-gray-700 px-3 py-2 md:py-3 rounded-md w-20 md:w-24 h-8 md:h-10"
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
