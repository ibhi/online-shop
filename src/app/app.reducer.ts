import { ProductsState, productsReducer } from './products/reducers/products';
import { CategoriesState, categoriesReducer } from './categories/reducers/categories';

export interface AppState {
    products: ProductsState;
    categories: CategoriesState;
}

export const appReducer = {
    products: productsReducer,
    categories: categoriesReducer
};
