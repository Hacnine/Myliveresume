import React from 'react'

const Education = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-white">My Education</h3>
      <p className="text-gray-400 mb-4">Please take a look about my educational background.</p>
      <div className=' gap-4 center  flex-col md:flex-row min-w-full'>
                        <div className=" bg-[#283240] w-fit p-4 rounded">
                            <p className=' text-yellow-500 text-sm font-semibold'>2010 - 2011</p>
                            <p className=' text-gray-100 mt-1 font-semibold text-sm'>SSC in Science</p>
                            <li className=' text-gray-400 text-sm mt-2'>Shandhani School and College</li>
                        </div>

                        <div className=" bg-[#283240] w-fit p-4 rounded">
                            <p className=' text-yellow-500 text-sm font-semibold'>2012 - 2014</p>
                            <p className=' text-gray-100 mt-1 font-semibold text-sm'>HSC in Science</p>
                            <li className=' text-gray-400 text-sm mt-2'>Shandhani School and College</li>
                        </div>



                        <div className=" bg-[#283240] w-fit p-4 rounded">
                            <p className=' text-yellow-500 text-sm font-semibold'>2015 - 2019</p>
                            <p className=' text-gray-100 mt-1 font-semibold text-sm'>BSc in Computer Science</p>
                            <li className=' text-gray-400 text-sm mt-2'>Northern University Bangladesh</li>
                        </div>
                    </div >

    </div>
  )
}

export default Education
