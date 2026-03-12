import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router'


const BooksTable = ({ books }) => {
  return (
     <table className='w-full '>
                        {/* <thead className='w-full'> */}
                           <tr className='w-full border-b  border-gray-500  '>
                                <th>No</th>
                                <th>Title</th>
                                <th>Auther</th>
                                <th>Publish Year</th>
                                <th>Options</th>   
                            </tr>
                        {/* </thead> */}
                        <tbody className=''>
                            {
                                books.map( (book, index)=> (
                                    <tr key={book._id} className='' >
                                        <td>{index+1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publishYear}</td>
                                        <td>
                                            <div className=' flex justify-center gap-2 p-2 '>
                                                <Link to={`/books/details/${book._id}`} className='bg-blue-400 border p-2 rounded-xl ' >View Detail</Link>
                                                <Link to={`/books/edit/${book._id}`} className='bg-green-400 border p-2 rounded-xl '>Edit</Link>
                                                <Link to={`/books/delete/${book._id}`} className='bg-red-500 border p-2 rounded-xl '>Delete</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                
                            }
                        </tbody>
                    </table>
  ) 
}

export default BooksTable
