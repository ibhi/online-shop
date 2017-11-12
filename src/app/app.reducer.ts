import { ActionReducerMap, MetaReducer, ActionReducer, createSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import { ProductsState, productsReducer } from './products/reducers/products';
import { CategoriesState, categoriesReducer } from './categories/reducers/categories';
import { environment } from '../environments/environment'; // Angular CLI environment
import { Product } from './product/models/product';

export interface AppState {
    products: ProductsState;
    categories: CategoriesState;
}

export const appReducer: ActionReducerMap<AppState> = {
    products: productsReducer,
    categories: categoriesReducer
};

// console.log all actions
// export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
//     return function (state: AppState, action: any): AppState {
//         console.log('state', state);
//         console.log('action', action);

//         return reducer(state, action);
//     };
// }

export function logger(reducer: ActionReducer<AppState>): any {
    // default, no options
    return storeLogger()(reducer);
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

    const filteredProducts: Product[] = productsState.products.data.reduce((filteredProducts, product) => {
        product.relationships.categories.data.forEach((category) => {
            selectedCategories.forEach((selectedCategory) => {
                if(selectedCategory === category.id) {
                    if(filteredProducts.indexOf(product) === -1) {
                        filteredProducts.push(product)
                    }
                }
            })
        })
        return filteredProducts;
    }, []);

    // const filteredProducts = productsState.products.data.filter((product) => product.relationships.categories.data[0].id === selectedCategories[selectedCategories.length-1]);

        return {
            ...productsState,
            products: {
                ...productsState.products,
                data: filteredProducts
            }
        }
}

export const visibleProductsSelector = createSelector(selectedCategoriesSelector, productsSelector, visibleProductsBySelectedCategory);
