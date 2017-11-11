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

export function productsReducer(state = initialState, action: products.Actions): ProductsState {
    switch (action.type) {
        case products.GET_ALL: {
            return {
                ...state,
                loading: true
            };
        }

        case products.GET_ALL_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                products: action.payload
            };
        }

        case products.GET_ALL_FAILURE: {
            return {
                ...state,
                loaded: false,
                loading: false,
            };
        }

        case products.GET_ALL_BY_CATEGORY: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }

        case products.GET_ALL_BY_CATEGORY_SUCCESS: {
            return {
                products: { data: action.payload },
                loaded: true,
                loading: false
            }
        }

        default:
            return state;
    }
}