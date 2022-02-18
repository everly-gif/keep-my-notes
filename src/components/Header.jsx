import React from 'react'
import { sdk } from '../config';

const Header = () => {
const createSession =(e)=>{
    let session = sdk.account.createAnonymousSession();
    
    session.then(function (response) {
         console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
    }
  return (
    <div className='navbar'>
    <h1>Keep My Notes</h1>
    <button  className='create-session' onClick={createSession}>Create Session + </button>
    </div>
  )
}

export default Header