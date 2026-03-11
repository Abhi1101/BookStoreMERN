import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'



function Home() {

    const [books, setbooks] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
      setloading(true)
        axios
        .get("http://localhost:5555/books")
        .then((response)=>{
            setbooks(response.data.data);
            setloading(false);
            console.log(response.data.data);     //test code
        })
        .catch( (error)=>{
            console.log(error);
            setloading(false)
        } )
    
    }, [])
    


  return (
    <div className='p-4 border  border-gray-500 rounded-xl w-full '>
        {/* <BackButton/> */}
        <div className='flex items-center text-center w-full justify-around '>
            <h1 className='text-4xl m-8'>Books List</h1>
            
            <Link to={`/books/create`} className=' p-3 rounded text-1xl border font-bold  ' >Create Book</Link>

        </div >
        {
            loading ? ( <Spinner/> ):(
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



    </div>
  )
}

export default Home
