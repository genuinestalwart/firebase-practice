import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,23}$/;

    const handleUserEmail = event => {
        setEmail(event.target.value);

        if (event.target.value.match(regexEmail)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }

        console.log(email);
    };

    const handleUserPass = event => {
        setPassword(event.target.value);

        if (event.target.value.match(regexPass)) {
            setValidPass(true);
        } else {
            setValidPass(false);
        }

        console.log(password);
    };

    const validate = () => {
        if (email && password && validEmail && validPass) {
            signInWithEmailAndPassword(auth, email, password)
                .then((credentials) => {
                    navigate(location.state?.from?.pathname || '/', { replace: true });
                    setEmail('');
                    setPassword('');
                });
        }
    };

    return (
        <div className='flex justify-center py-8'>
            <div className='bg-slate-100 border-4 border-slate-200 divide-y rounded-lg w-2/5'>
                <h1 className='font-medium my-2 text-center text-2xl text-indigo-400'>Sign In</h1>

                <div className='py-2'>
                    <div className='px-4'>
                        <div className='my-2'>
                            <label className='font-medium text-slate-600' htmlFor="userEmail">Email <span className='text-red-500'>*</span></label>
                            <input onBlur={handleUserEmail} className='outline-indigo-300 my-2 p-2 rounded-md w-full' type="email" name="userEmail" id="userEmail" />

                            <p className={validEmail ? 'hidden' : 'mb-4 text-xs text-red-500'}>Please enter a valid email address</p>

                            <label className='font-medium text-slate-600' htmlFor="userPass">Password <span className='text-red-500'>*</span></label>
                            <input onBlur={handleUserPass} className='outline-indigo-300 my-2 p-2 rounded-md w-full' type="password" name="userPass" id="userPass" />

                            <p className={validPass ? 'hidden' : 'mb-4 text-xs text-red-500'}>Password must contain at least a digit, an uppercase letter, a lowercase letter, a special character and must be within 8 to 23 characters.</p>
                        </div>

                        <div className='text-right'><button onClick={validate} className='bg-indigo-400 hover:bg-indigo-500 my-2 px-4 py-2 active:ring ring-indigo-400 ring-offset-2 rounded-md text-white'>Sign in</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;