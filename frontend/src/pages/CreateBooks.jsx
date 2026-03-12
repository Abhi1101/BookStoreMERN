import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router'
import BackButton from '../components/BackButton'
import { enqueueSnackbar, useSnackbar } from 'notistack'

function CreateBooks() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAutor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const navigate = useNavigate();

  const {enqueueSnackbar} = useSnackbar()


  const handleCreateBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios.post('http://localhost:5555/books', data)
      .then((response) => {
        console.log(response);
        setLoading(false);
        enqueueSnackbar('book created successfully', {variant: "success"})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened. Please Check Console");
        enqueueSnackbar(`${error.message}`, {variant: "error"})
        console.log(error);
        console.log(error.message);
      })

  };


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl mb-1'>Create Book</h1>
      {
        loading ?

          <Spinner /> : (
            <div className='border flex flex-col items-center gap-5 p-5 text-3xl w-full'>
                <div className='flex flex-col w-1/2 items-start gap-2'>
                  <label  >Title</label>
                  <input
                    type="text"
                    placeholder='Enter Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-gray-600 border w-full'
                  />
                </div>
                <div className='flex flex-col w-1/2 items-start gap-2'>
                  <label >Auther</label>
                  <input
                    type="text"
                    placeholder='Enter Author'
                    value={author}
                    onChange={(e) => setAutor(e.target.value)}
                    className='bg-gray-600 border w-full'
                  />
                </div>
                <div className='flex flex-col w-1/2 items-start gap-2'>
                  <label className=''>Publish Year</label>
                  <input
                    type='number '
                    placeholder='Enter Publish Year'
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    className='bg-gray-600 border w-full'
                  />
                </div>
                
                <button
                 onClick={handleCreateBook} 
                className='border text-center p-2 rounded bg-blue-700 '
                 >Create</button>
                
            </div>
          )
      }

    </div>
  )
}

export default CreateBooks





// const CreateBooks = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [publishYear, setPublishYear] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSaveBook = () => {
//     const data = {
//       title,
//       author,
//       publishYear,
//     };
//     setLoading(true);
//     axios
//       .post('http://localhost:5555/books', data)
//       .then(() => {
//         setLoading(false);
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert('An error happened. Please Chack console');
//         console.log(error);
//       });
//   };

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>Create Book</h1>
//       {loading ? <Spinner /> : ''}
//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Title</label>
//           <input
//             type='text'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'
//           />
//         </div>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Author</label>
//           <input
//             type='text'
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
//           <input
//             type='number'
//             value={publishYear}
//             onChange={(e) => setPublishYear(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateBooks