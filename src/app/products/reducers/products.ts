import { Product } from '../../product/models/product';
import { Products } from '../models/products';
import * as products from '../actions/products';

export interface ProductsState {
    loaded: boolean;
    loading: boolean;
    products: Products;
}

const initialState: ProductsState = {
    loaded: false,
    loading: false,
    products: <Products> {} 
};

export function reducer(state = initialState, action: products.Actions): ProductsState {
    switch (action.type) {
        case products.LOAD: {
            return {
                ...state,
                loading: true
            };
        }

        case products.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                products: action.payload
            };
        }

        case products.LOAD_FAILURE: {
            return {
                ...state,
                loaded: false,
                loading: false,
            };
        }
        default:
            return state;
    }
}