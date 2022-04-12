import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useStorage from '../../hooks/useStorage';
import Item from '../Item/Item';

const Orders = () => {
    let items = 0, price = 0, charge = 0;
    const [list, setList] = useStorage();

    const handleClearCart = () => {
        setList([]);
        localStorage.removeItem('selectedProducts');
    };

    const handleDeleteProduct = index => {
        const newList = [];

        list.forEach(el => {
            if (list.indexOf(el) !== index) {
                newList.push(el);
            }
        });

        setList(newList);
        localStorage.setItem('selectedProducts', JSON.stringify(newList));
    };

    list.forEach(el => {
        items += 1;
        price += el.price;
        charge += el.shipping;
    });

    let tax = parseFloat((price / 10).toFixed(2));
    let total = price + charge + tax;

    return (
        <div className='flex justify-between px-32 py-16'>
            <div className='w-1/2'>
                {
                    list.map(item => <Item handler={handleDeleteProduct} index={list.indexOf(item)} item={item}></Item>)
                }
            </div>

            <div className='bg-orange-200 px-8 py-4 rounded-md sticky h-screen top-0 w-2/5'>
                <h2 className='my-4 text-center text-3xl text-slate-700'>Order Summary</h2>

                <div className='my-8 text-sm text-slate-600'>
                    <p className='my-4'>Selected Items: {items}</p>
                    <p className='my-4'>Total Price: ${price}</p>
                    <p className='my-4'>Total Shipping Charge: ${charge}</p>
                    <p className='my-4'>Tax: ${tax}</p>
                    <h4 className='font-medium my-4 text-lg text-slate-700'>Grand Total: ${total}</h4>
                </div>

                <button onClick={handleClearCart} className='bg-red-400 hover:bg-red-500 block my-4 py-2 active:ring ring-offset-2 ring-red-400 rounded text-white w-full'>Clear Cart <FontAwesomeIcon className='ml-2' icon={faTrashCan}></FontAwesomeIcon></button>
                <Link to='/orders'><button className='bg-orange-400 hover:bg-orange-500 block my-4 py-2 active:ring ring-offset-2 ring-orange-400 rounded text-white w-full'>Proceed <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button></Link>
            </div>
        </div>
    );
};

export default Orders;