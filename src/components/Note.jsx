import React from 'react'
import { sdk } from '../config';

const Note = (props) => {

  const deleteNote= async(e,id)=>{
  await sdk.database.deleteDocument('620ed1e9320a4', id);
  console.log("Delete Successfully");
  window.location.reload();
  }
  return (
    <div className='note'>
        <h3>{props.title}</h3><br/>
        <p>{props.content}</p>
        <div className='btn-cont'>
        <button className='delete-btn' onClick={(e)=>deleteNote(e,props.id)}> Delete</button>
        </div>
    </div>
  )
}

export default Note;