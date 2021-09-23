import React, { useState } from 'react';
//import Hello from './SayHello'
import './App.css'

function Tweet({name, message, likesCount}) {
    const [lCount, setLikes] = useState(() => {return likesCount});
    const AddLike = () => {
        setLikes(prevlCount => prevlCount + 1);
        //setLikes(prevlCount => prevlCount + 1);
    }
    
    return(
        <div className='tweet'>
            <h3>{name.toUpperCase()}</h3>
            <p>{message}</p>
            <h3>{lCount}</h3>
            <button onClick={AddLike}>Like</button>
        </div>
    )
}

export default Tweet;