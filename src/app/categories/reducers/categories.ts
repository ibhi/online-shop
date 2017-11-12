import { Category } from '../../category/models/category';
import { Categories } from '../models/categories';
import * as fromCategories from '../actions/categories';

export interface CategoriesState {
    categories: Categories;
    selectedCategories: string[];
    
}

const initialState: CategoriesState = {
    categories: <Categories> {},
    selectedCategories: [] 
};

export function categoriesReducer(state = initialState, action: fromCategories.Actions): CategoriesState {
    switch (action.type) {

        case fromCategories.LOAD_SUCCESS: {
            return {
                ...state,
                categories: action.payload
            };
        }

        case fromCategories.SELECT: {
            return {
                ...state,
                selectedCategories: [...state.selectedCategories, action.payload]
            }
        }

        case fromCategories.LOAD:
        case fromCategories.LOAD_FAILURE:
        default:
            return state;
    }
}