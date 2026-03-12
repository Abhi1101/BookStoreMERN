import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";



function BookModel({ book, onClose }) {
    return (
        <div
            className='fixed bg-black shadow-2xl z-10 top-0 left-0 right-0 bottom-0  flex justify-center items-center  '
            onClick={onClose}
            >
            <div 
            onClick={(e) => e.stopPropagation()}
            className=' h-[500px] w-[500px] relative z-20 bg-white opacity-100  text-black p-1 text-xl rounded-xl'>

                <AiOutlineClose 
                className='text-2xl absolute right-0 '
                onClick={onClose}                
                />

                <div className=' flex items-center justify-center'>

                    <HiOutlineCalendarDateRange  />
                    <h2 className=' px-4 '>
                        {book.publishYear}
                    </h2>
                </div>

                <h4 className='my-2 text-gray-500 pt-1 '>{book._id}</h4>

                <div className=' flex justify-center items-center mt-3 gap-1'>
                    <PiBookOpenTextLight />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className=' flex justify-center items-center mt-3 gap-1'>
                    <BiUserCircle />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <div className='pt-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi fugiat ab assumenda minima consequatur, quod architecto cupiditate ratione porro corrupti tempore id, esse magnam ipsa consequuntur officiis dolores ullam atque nemo a? Tempore quo atque dolorem numquam earum ut.</p>
                </div>

            </div>
        </div>
    )
}

export default BookModel





// // ==============================================================
// import { AiOutlineClose } from 'react-icons/ai';
// import { PiBookOpenTextLight } from 'react-icons/pi';
// import { BiUserCircle } from 'react-icons/bi';

// const BookModal = ({ book, onClose }) => {
//   return (
//     <div
//       className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
//       onClick={onClose}
//     >
//       <div
//         onClick={(event) => event.stopPropagation()}
//         className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
//       >
//         <AiOutlineClose
//           className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
//           onClick={onClose}
//         />
//         <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
//           {book.publishYear}
//         </h2>
//         <h4 className='my-2 text-gray-500'>{book._id}</h4>
//         <div className='flex justify-start items-center gap-x-2'>
//           <PiBookOpenTextLight className='text-red-300 text-2xl' />
//           <h2 className='my-1'>{book.title}</h2>
//         </div>
//         <div className='flex justify-start items-center gap-x-2'>
//           <BiUserCircle className='text-red-300 text-2xl' />
//           <h2 className='my-1'>{book.author}</h2>
//         </div>
//         <p className='mt-4'>Anything You want to show</p>
//         <p className='my-2 text-black'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
//           voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
//           necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
//           nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
//           dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
//           vitae voluptate sequi repellat!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookModal;
