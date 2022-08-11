import { combineReducers } from "redux";
import shopReducer from './Shopping/shoppingReducer'

const rootReducer = combineReducers({
    shop:shopReducer
});
export default rootReducer