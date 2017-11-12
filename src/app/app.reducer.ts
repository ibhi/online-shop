import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { ProductsState, productsReducer } from './products/reducers/products';
import { CategoriesState, categoriesReducer } from './categories/reducers/categories';
import { environment } from '../environments/environment'; // Angular CLI environment
import { createSelector } from '@ngrx/store/src/selector';

export interface AppState {
    products: ProductsState;
    categories: CategoriesState;
}

export const appReducer: ActionReducerMap<AppState> = {
    products: productsReducer,
    categories: categoriesReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger, storeFreeze] : [];

const categoriesSelector = (state: AppState) => state.categories;
const selectedCategoriesSelector = createSelector(categoriesSelector, (categoriesState: CategoriesState) => categoriesState.selectedCategories);
const productsSelector = (state: AppState) => state.products;

const visibleProductsBySelectedCategory = (selectedCategories: string[], productsState: ProductsState): ProductsState => {
    if (!selectedCategories || selectedCategories.length === 0) {
        return productsState;
    }
    if(!productsState.products.data) {
        return productsState;
    }

    const filteredProducts = productsState.products.data.filter((product) => product.relationships.categories.data[0].id === selectedCategories[0]);

        return {
            ...productsState,
            products: {
                ...productsState.products,
                data: filteredProducts
            }
        }
}

export const visibleProductsSelector = createSelector(selectedCategoriesSelector, productsSelector, visibleProductsBySelectedCategory);

