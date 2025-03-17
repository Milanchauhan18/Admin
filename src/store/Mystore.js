import { applyMiddleware, combineReducers, createStore } from 'redux';
import CategoryReducer from '../reducer/CategoryReducer';
import { thunk } from 'redux-thunk';
import SubcategoryReducer from '../reducer/SubcategoryReducer';
import ProductReducer from '../reducer/ProductReducer';


const  rootReducer = combineReducers({
    "category" : CategoryReducer,
    "subcategory" : SubcategoryReducer,
    "product" : ProductReducer,
});

const mystore = createStore(rootReducer,applyMiddleware(thunk));
export default mystore; 
