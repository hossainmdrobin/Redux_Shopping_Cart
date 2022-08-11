import React from 'react';
import Card from '../../components/card';
import { connect, Connect } from 'react-redux';

const Home = ({products}) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='md:w-4/5'>
                {
                    products.map(product => <Card product={product} key={product.id} />)
                }
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        products: state.shop.products
    }

}

export default connect(mapStateToProps)(Home);
