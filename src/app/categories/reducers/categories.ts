import { Category } from '../../category/models/category';
import { Categories } from '../models/categories';
import * as fromCategories from '../actions/categories';

export interface CategoriesState {
    loaded: boolean;
    loading: boolean;
    categories: Categories;
}

const initialState: CategoriesState = {
    loaded: false,
    loading: false,
    categories: <Categories> {} 
};

export function categoriesReducer(state = initialState, action: fromCategories.Actions): CategoriesState {
    switch (action.type) {
        case fromCategories.LOAD: {
            return {
                ...state,
                loading: true
            };
        }

        case fromCategories.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                categories: action.payload
            };
        }

        case fromCategories.LOAD_FAILURE: {
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