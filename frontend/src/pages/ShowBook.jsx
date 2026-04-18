import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'

function ShowBook() {

    const [book, setbook] = useState([])
    const [loading, setloading] = useState(false)
    const { id } = useParams();

    useEffect(()=>{
            // axios.get(`http://localhost:5555/books/${id}`)
            axios.get(`https://bookstoremern-asct.onrender.com/books/${id}`)
            .then(response => {
                console.log(response.data);
                setbook(response.data);
                setloading(false);
            })
            .catch(error => {
                setloading(false);
                console.log(error);
                }
            )

    },[])


  return (
    <div className='p-4  '>
      <BackButton/>
      {
        loading ? 
          <Spinner/>
          : 
        ( 
          <div className='flex flex-col border rounded-2xl  border-gray-500 gap-3 p-2   '>
            <div className='text-3xl border-gray-500  mb-2 border-b p-0.5'>Book Detail</div>
            <div className='text-2xl '>
              <span>ID :- </span>
              <span>{book._id}</span>
            </div>
            <div className='text-2xl '>
              <span>TITLE :- </span>
              <span>{book.title}</span>
            </div>
            <div className='text-2xl '>
              <span>AUTHER :- </span>
              <span>{book.author}</span>
            </div>
            <div className='text-2xl '>
              <span>PUBLISH YEAR :- </span>
              <span>{book.publishYear}</span>
            </div>
            <div className='text-2xl '>
              <span>CREATED AT :- </span>
              <span>{new Date(book.createdAt).toLocaleString()}</span>
            </div>
            <div className='text-2xl '>
              <span>LAST UPDATED :- </span>
              <span>{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        )
        
      }
        
    </div>
  )
}

export default ShowBook
