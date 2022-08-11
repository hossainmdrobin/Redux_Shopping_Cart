import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux'
import { 
    addToCart, 
    adjustQty, 
    removeFromCart 
} from '../../src/redux/Shopping/shoppingAction'

const Card = ({ product, addToCart,removeFromCart, action }) => {
    const [count, setCount] = useState(product.qty)
    useEffect(()=>{
        adjustQty(product.id, count)
        // console.log(adjustQty(product.id, count))
        // console.log(count)
        
        // console.log('1')

    },[count,product.id, setCount])

    return (
        <div className="z-0 card lg:card-side bg-base-100 shadow-xl my-4">
            <figure><img src={product.photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <div className='flex justify-between'>
                    <p className='w-4/5 mr-4'>{product.desc}.</p>
                    {!action && <button className="btn btn-outline btn-primary">View Item</button>}
                    {action && <div className='flex p-2 bg-gray-300 h-10 rounded-xl'>
                        <p onClick={() => setCount(count + 1)} className='font-bold text-gray-500 active:text-gray-800 cursor-pointer h-6 w-6 text-center rounded shadow-xl bg-gray-200 mx-1 active:bg-white'>+</p>
                        <p className='h-6 w-8 text-center rounded shadow-inner bg-white mx-1'>{count}</p>
                        <p onClick={() => setCount(count - 1)} className='font-bold text-gray-500 active:text-gray-800 cursor-pointer h-6 w-6 text-center rounded shadow-xl bg-gray-200 mx-1 active:bg-white'>-</p>
                    </div>}
                </div>
                <div className="card-actions justify-end">
                    <p className='text-success font-bold'>$ {product.price}</p>
                    {!action && <button onClick={() => addToCart(product.id)} className="btn btn-primary">Add to Cart</button>}
                    {action && <button onClick={()=>removeFromCart(product.id)} className="btn btn-error text-white">Delete Item</button>}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
            addToCart: (id) => dispatch(addToCart(id)),
            removeFromCart: (id) => dispatch(removeFromCart(id)),
            adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(Card);
