import fashion from '../../images/fashion.jpg';
import React from 'react';

const Home = () => {
    return (
        <div className='flex items-center px-32 py-20'>
            <div className='w-3/5'>
                <p className='text-amber-500'>Sale up to 70% off</p>

                <div className='my-12'>
                    <h1 className='font-medium text-5xl text-slate-700'>New Collection for Fall</h1>
                    <h4 className='my-4 text-xl text-slate-500'>Discover all the new arrivals of ready-to-wear collection.</h4>
                </div>

                <button className='bg-amber-500 hover:bg-amber-400 px-4 py-2 active:ring ring-offset-2 ring-orange-500 rounded text-slate-800'>SHOP NOW</button>
            </div>

            <div className='w-2/5'>
                <img className='rounded-lg w-full' src={fashion} alt="fashion" />
            </div>
        </div>
    );
};

export default Home;