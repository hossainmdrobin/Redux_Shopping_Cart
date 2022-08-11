import * as actionType from './shoppingType'
import car1 from './../../assets/car1.jpg'
import car2 from './../../assets/car2.jpg'
import car3 from './../../assets/car3.jpg'
import car4 from './../../assets/car4.jpg'

const INITIAL_STATE = {
    products: [
        {
            id: '1',
            name: 'BMW',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
            photo: car1,
            price: 1200
        },
        {
            id: '2',
            name: 'FERARI',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
            photo: car2,
            price: 1300
        },
        {
            id: '3',
            name: 'AUDY',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
            photo: car3,
            price: 1100
        },
        {
            id: '4',
            name: 'RR',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
            photo: car4,
            price: 1800
        }
    ],
    cart: [],
    currentItem: null
}

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            //get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            //Check the item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart 
                ? state.cart.map((item) => 
                item.id === action.payload.id
                ? {...item, qty: item.qty+1} 
                : item
                ) : [...state.cart, {...item, qty: 1}]
            }

        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case actionType.ADJUST_QTY:
            console.log(action)
            return {
                ...state,
                cart: state.cart.map((item)=>
                item.id === action.payload.id 
                ? {...item, qty: +action.payload.value} 
                : item)
            }
        case actionType.LOAD_CURRNET_ITEM:
            return {
                ...state, currentItem: action.payload
            }
        default:
            return state
    }
}

export default shoppingReducer;