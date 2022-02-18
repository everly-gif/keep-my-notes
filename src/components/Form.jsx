import { sdk } from '../config';
import React from 'react'


const Form = () => {



  const handleSubmit= (e) =>{
        

        const {title, content } = e.target.elements;

        
        let promise=sdk.database.createDocument('620ed1e9320a4','unique',{"title":title.value,"content":content.value});
        
        promise.then(function (response) {
            console.log(response);
            document.getElementById('title').value="";
            document.getElementById('content').value=""; // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }
    
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter Title' id='title'/>
    <textarea placeholder='Enter Text' id='content'></textarea>    
    <button type="submit" className='add-note'>Add Note + </button>
    </form>
    </div>
  )
}

export default Form