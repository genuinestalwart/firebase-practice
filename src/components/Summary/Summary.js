import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Summary = ({ list, handler }) => {
    let items = 0, price = 0, charge = 0;

    list.forEach(el => {
        items += 1;
        price += el.price;
        charge += el.shipping;
    });

    let tax = parseFloat((price / 10).toFixed(2));
    let total = price + charge + tax;

    return (
        <div className='bg-orange-200 sticky h-screen px-8 py-4 top-0 w-1/4'>
            <h3 className='my-4 text-center text-xl text-slate-700'>Order Summary</h3>

            <div className='my-8 text-sm text-slate-600'>
                <p className='my-4'>Selected Items: {items}</p>
                <p className='my-4'>Total Price: ${price}</p>
                <p className='my-4'>Total Shipping Charge: ${charge}</p>
                <p className='my-4'>Tax: ${tax}</p>
                <h4 className='font-medium my-4 text-base text-slate-700'>Grand Total: ${total}</h4>
            </div>

            <button onClick={handler} className='bg-red-400 hover:bg-red-500 block my-4 py-2 active:ring ring-offset-2 ring-red-400 rounded text-white w-full'>Clear Cart <FontAwesomeIcon className='ml-2' icon={faTrashCan}></FontAwesomeIcon></button>
            <Link to='/orders'><button className='bg-orange-400 hover:bg-orange-500 block my-4 py-2 active:ring ring-offset-2 ring-orange-400 rounded text-white w-full'>Review Orders <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button></Link>
        </div>
    );
};

export default Summary;