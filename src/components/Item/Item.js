import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Item = ({ handler, index, item }) => {
    const { name, price, img, shipping } = item;

    return (
        <div className='border border-slate-400 flex my-8 hover:outline outline-4 outline-indigo-400 rounded-md shadow-md shadow-slate-400'>
            <div className='p-2 w-1/5'><img className='rounded w-full' src={img} alt={name} /></div>

            <div className='text-slate-700 w-3/5'>
                <h4 className='font-medium my-3 text-sm'>{name}</h4>
                <p className='my-1 text-xs'>Price: <span className='ml-1 text-orange-600'>${price}</span></p>
                <p className='my-1 text-xs'>Shipping Charge: <span className='ml-1 text-orange-600'>${shipping}</span></p>
            </div>

            <div className='flex items-center justify-center w-1/5'><button onClick={() => handler(index)} className='bg-red-200 hover:bg-red-400 block px-2 py-2 rounded-full text-2xl text-red-400 hover:text-red-200'><FontAwesomeIcon className='px-1.5' icon={faTrashCan}></FontAwesomeIcon></button></div>
        </div>
    );
};

export default Item;