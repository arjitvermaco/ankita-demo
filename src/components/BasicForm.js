import React, { useState } from 'react'

export default function BasicForm() {
    let [userName, setUserName] = useState('');
    let [userEmail, setUserEmail] = useState('');

    function handleSubmit(event){
        //Override default html behaviour to refresh the page!!
        event.preventDefault();
        console.log("Form was submitted!!")
        console.log(`User name is ${userName} and email is ${userEmail}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Create a form newsletter sign up */}
                <input type='text' value={userName}
                 onChange={(event) => {setUserName(event.target.value)}}
                 placeholder='Enter Your Name' /> <br />
                <input type='text' value={userEmail} 
                 onChange={(event) => {setUserEmail(event.target.value)}}
                 placeholder='Enter Your Email' /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
