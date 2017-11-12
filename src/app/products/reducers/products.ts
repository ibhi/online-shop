import { Product } from '../../product/models/product';
import { Products } from '../models/products';
import * as fromProducts from '../actions/products';

export interface ProductsState {
    products: Products;
}

const initialState: ProductsState = {
    products: <Products> {}
};

export function productsReducer(state = initialState, action: fromProducts.Actions ): ProductsState {
    switch (action.type) {
        case fromProducts.GET_ALL_SUCCESS: {
            return {
                ...state,
                products: { ...action.payload }
            };
        }

        case fromProducts.GET_ALL_BY_CATEGORY_SUCCESS: {
            return {
                ...state,
                products: { data: action.payload }
            };
        }

        case fromProducts.GET_ALL:
        case fromProducts.GET_ALL_FAILURE:
        case fromProducts.GET_ALL_BY_CATEGORY:
        default:
            return state;
    }
}