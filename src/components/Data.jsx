import React, { useEffect, useState } from 'react';

const Data = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [about , setAbout] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(req => req.json())
        .then(data=> setAbout(data))
    },[])
    console.log(about)
    return (
        <div>
            
        </div>
    );
};

export default Data;