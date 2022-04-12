import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;

    return (
        <div className='border border-slate-400 hover:outline outline-4 outline-indigo-400 rounded-md shadow-lg shadow-slate-400'>
            <div className='p-2'><img className='rounded w-full' src={img} alt={name} /></div>

            <div className='h-24 px-4 py-2'>
                <h4 className='font-medium text-slate-700'>{name}</h4>
                <h5 className='my-2 text-slate-700'>Price: ${price}</h5>
            </div>

            <div className='p-4 text-slate-700'>
                <p className='pt-1 text-xs'>Manufacturer: <span className='mx-2'>{seller}</span></p>
                <p className='pt-1 text-xs'>Ratings: <span className='mx-2'><FontAwesomeIcon className='text-cyan-400' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='text-cyan-400' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='text-cyan-400' icon={faStar}></FontAwesomeIcon> {
                    ratings === 3 ?
                        <span><FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon></span> :
                        ratings === 4 ?
                            <span><FontAwesomeIcon className='text-cyan-400' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon></span> :
                            <span><FontAwesomeIcon className='text-cyan-400' icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon className='text-cyan-400' icon={faStar}></FontAwesomeIcon></span>
                }</span></p>
            </div>

            <button onClick={() => props.handler(props.product)} className='bg-orange-200 hover:bg-orange-300 block border-t border-slate-400 text-sm py-2 rounded-b-md w-full'>Add to Cart <FontAwesomeIcon className='ml-2' icon={faCartPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;