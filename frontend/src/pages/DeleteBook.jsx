import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'


function DeleteBook() {

  const [loader, setloader] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate();


  const handleDeleteBook = () => {
    setloader(true)
    axios.delete(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setloader(false);
        console.log(res);
        navigate('/')
      })
      .catch(err => {
        // setLoading(false);
        alert("An error happened while deleting the book. Please Check Console");
        console.log(err);
      })

  }

  return (
    <div className='p-4'>
      <BackButton />
      {
        loader ? <Spinner />
          : (
            <div className=' border text-4xl flex flex-col gap-5 p-5 items-center m-2'>
              <h1>Are You Sure You Want To Delete This Book?</h1>
              <button
                onClick={handleDeleteBook}
                className='bg-red-500 w-max p-2 rounded'
              >Yes Delete it!</button>
            </div>
          )
      }
    </div>
  )
}

export default DeleteBook
