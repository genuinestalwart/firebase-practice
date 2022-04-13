import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../images/error404.png';

const NotFound = () => {
    return (
        <div className='px-80 text-center'>
            <div className='my-8'><img className='w-full' src={error404} alt="not found" /></div>
            <Link to='/'><button className='bg-cyan-400 hover:bg-emerald-400 font-medium p-2 active:ring ring-cyan-400 ring-offset-2 rounded-md text-xl text-white'>Back to Home Page</button></Link>
        </div>
    );
};

export default NotFound;