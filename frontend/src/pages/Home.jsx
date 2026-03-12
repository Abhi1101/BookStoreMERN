import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'
import BooksCard from '../components/home/BooksCard'
import BooksTable from '../components/home/BooksTable'

function Home() {

    const [books, setbooks] = useState([]);
    const [loading, setloading] = useState(false)
    const [showType , setShowType] = useState('table');

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
        <div className='flex justify-center items-center gap-1'>
            
            <button 
            className='bg-transparent border rounded p-2'
            onClick={ ()=> setShowType('table')}
            >Table
            </button>
            
            <button 
            className='bg-transparent border rounded p-2'
            onClick={ ()=> setShowType('card')}
            >Card
            </button>

        </div>
        <div className='flex items-center text-center w-full justify-around '>
            <h1 className='text-4xl m-8'>Books List</h1>
            
            <Link to={`/books/create`} className=' p-3 rounded text-1xl border font-bold  ' >Create Book</Link>

        </div >
        {
            loading ? ( <Spinner/> ): showType == 'table' ? <BooksTable books={books}/> :  <BooksCard books={books} /> 
             
        } 



    </div>
  )
}

export default Home
