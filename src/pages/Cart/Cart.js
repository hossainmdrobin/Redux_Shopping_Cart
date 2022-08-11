import React,{useState, useEffect} from 'react';
import Card from '../../components/card';
import {connect} from 'react-redux'

const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItem, setTotalItem] = useState(0)

    useEffect(()=> {
        let items = 0;
        let prices = 0;
        cart.forEach(item => {
            items = item.qty;
            prices += item.qty*item.price
        })
        setTotalPrice(prices)
        setTotalPrice(prices)
    },[cart, totalItem, totalPrice, setTotalItem, setTotalPrice])
    return (
    <div className="flex p-8">        
        <div className='w-3/5'>
        {cart.map(item =><Card action='cart' product={item} key={item.id} />)}
        </div>

        <div className='h-48 rounded-xl bg-white m-4 p-2 w-2/5 shadow-lg'>
            <h3 className='text-xl font-bold my-4'>Cart Summary</h3>
            <div className="flex justify-between">
                <p>Total:{`(${totalItem} items)`}</p>
                <p className="font-bold">$ {totalPrice}</p>
            </div>
            <button className='w-full btn btn-success my-4'>Proced to order</button>
        </div>
    </div>
    );
}
const mapStateToProps = state => {
    return{
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart);
