import logo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slate-800 flex h-20 items-center justify-between px-32'>
            <div>
                <h1 className='font-medium text-3xl text-white'>Ema-John</h1>
                <div className='flex justify-center text-center'><img className='w-1/2' src={logo} alt="ema john" /></div>
            </div>

            <nav className='flex justify-between text-white w-2/5'>
                <Link className='hover:text-amber-400' to='/products'>Products</Link>
                <Link className='hover:text-amber-400' to='/orders'>Orders</Link>
                <Link className='hover:text-amber-400' to='/login'>Sign in</Link>
                <Link className='hover:text-amber-400' to='/register'>Sign up</Link>
            </nav>
        </header>
    );
};

export default Header;