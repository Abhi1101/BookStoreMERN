import React from 'react'
import { BiShow } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";



function BooksCard({books}) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-gray-500 '>
        {
            books.map( (item)=>(
                <div
                 key={item._id}
                 className='border-2 border-gray-500 rounded-xl m-4 p-4 shadow-gray-700 shadow-xl  relative '
                 >

                    <div className=' '>

                        <HiOutlineCalendarDateRange className='absolute top-2 right-16 bg-transparent ' />
                        <h2 className='absolute top-1 right-2 px-4 '>
                            {item.publishYear}
                        </h2>
                    </div>

                    <h4 className='my-2 text-gray-500 pt-1 '>{item._id}</h4>
                    
                    <div className=' flex justify-start items-center mt-3 gap-1'>
                        <PiBookOpenTextLight />
                        <h2 className='my-1'>{item.title}</h2>
                    </div>
                    <div className=' flex justify-start items-center mt-3 gap-1'>
                        <BiUserCircle/>
                        <h2 className='my-1'>{item.author}</h2>
                    </div>
                    
                    <div className='flex justify-between items-center gap-2 mt-4 p-4'>
                        <Link to={`/books/details/${item._id}`}>
                            <BiInfoCircle className='text-xl text-blue-400' />
                        </Link>
                        <Link to={`/books/edit/${item._id}`} >
                            <FaRegEdit className='text-xl text-green-400' />
                        </Link>
                        <Link to={`/books/delete/${item._id}`} >
                            <MdDelete className='text-xl text-red-500' />
                        </Link>

                    </div>
                    
                </div>                

            ))
        }
      
    </div>
  )
}

export default BooksCard
