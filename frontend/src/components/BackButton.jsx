import React from 'react'
import { Link } from 'react-router';
import { MdArrowBack, MdImportContacts } from 'react-icons/md';
// or
import { FaArrowLeft } from 'react-icons/fa';



function BackButton() {
  return (
    <div className=' w-max'>
        <Link to={"/"}>
            <MdArrowBack size={54} color="#f0f0f0" className=''/>
        </Link>
    </div>
  )
}

export default BackButton
