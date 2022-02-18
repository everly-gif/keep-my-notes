import React, { useEffect, useState } from 'react'
import Note from './Note'
import { sdk } from '../config'

const Display = () => {
  
  const[documents,setDocuments]=useState();

  const getDocuments = async()=>{
      const promise= await sdk.database.listDocuments('620ed1e9320a4');
      setDocuments(promise.documents);
      console.log(documents);
  }

  useEffect(()=>{
      getDocuments();
  },[]);
  return (
   
    <div className='note-list'>
    { documents && documents.map((document)=>{
        return(
            <Note key={document.$id} id={document.$id} title={document.title} content={document.content}/>
        )
    })}
    </div>
  )
}

export default Display