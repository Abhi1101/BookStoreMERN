import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import BackButton from '../components/BackButton'
import { enqueueSnackbar, useSnackbar } from 'notistack'



function EditBook() {
 const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAutor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate();

  const [PrevData, setPrevData] = useState([])

  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=> setPrevData(response.data))
    .catch(err => console.log(err))
  },[id])

  const handleCreateBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios.put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        console.log(response);
        setLoading(false);
        enqueueSnackbar("Successfully Edited Book!!!", {variant: 'success'})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened. Please Check Console");
        enqueueSnackbar(`${error.message}`, {variant: 'error'})
        console.log(error);
        console.log(error.message);
      })

  };


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl mb-1'>Edit Book</h1>
      {console.log("param value is : ", id)}
      {
        loading ?

          <Spinner /> : (
            <div className='border flex flex-col items-center gap-5 p-5 text-3xl w-full'>
                <div className='flex flex-col w-1/2 items-start gap-2'>
                  <label  >Title</label>
                  <input
                    type="text"
                    placeholder={PrevData.title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-gray-600 border w-full'
                  />
                </div>
                <div className='flex flex-col w-1/2 items-start gap-2'>
                  <label >Author</label>
                  <input
                    type="text"
                    placeholder={PrevData.author}
                    value={author}
                    onChange={(e) => setAutor(e.target.value)}
                    className='bg-gray-600 border w-full'
                  />
                </div>
                <div className='flex flex-col w-1/2 items-start gap-2'>
                  <label className=''>Publish Year</label>
                  <input
                    type='number'
                    placeholder={PrevData.publishYear}
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    className='bg-gray-600 border w-full'
                  />
                </div>
                
                <button
                 onClick={handleCreateBook} 
                className='border text-center p-2 rounded bg-green-700 '
                 >Save</button>
                
            </div>
          )
      }

    </div>
  )
}


export default EditBook
