import * as actionType from './shoppingType'

export const addToCart = (itemID) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}
export const removeFromCart = (itemID) => {
    return {
        type: actionType.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionType.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}