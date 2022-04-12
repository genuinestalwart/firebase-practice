import logo from '../../images/logo.svg';
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header className='bg-slate-800 flex h-20 items-center justify-between px-32'>
            <div>
                <h1 className='font-medium text-3xl text-white'>Ema-John</h1>
                <div className='flex justify-center text-center'><img className='w-1/2' src={logo} alt="ema john" /></div>
            </div>

            <nav className='flex justify-between text-white w-2/5'>
                <CustomLink to='/products'>Products</CustomLink>
                <CustomLink to='/orders'>Orders</CustomLink>
                <CustomLink to='/login'>Sign in</CustomLink>
                <CustomLink to='/register'>Sign up</CustomLink>
            </nav>
        </header>
    );
};

export default Header;