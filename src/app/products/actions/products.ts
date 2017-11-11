import { Action } from '@ngrx/store';
import { Products } from '../models/products';
import { Product } from '../../product/models/product';

export const GET_ALL = '[Products] Get All';
export const GET_ALL_SUCCESS = '[Products] Get All Success';
export const GET_ALL_FAILURE = '[Products] Get All Failure';
export const VISIBILITY_FILTER = '[Products] Visibility Filter';
export const GET_ALL_BY_CATEGORY = '[Products] Get All By Category';
export const GET_ALL_BY_CATEGORY_SUCCESS = '[Products] Get All By Category Success';
export const GET_ALL_BY_CATEGORY_FAILURE = '[Products] Get All By Category Failure';


export class GetAll implements Action {
    readonly type = GET_ALL;
}

export class GetAllSuccess implements Action {
    readonly type = GET_ALL_SUCCESS;

    constructor(public payload: Products) {  }
}

export class GetAllFailure implements Action {
    readonly type = GET_ALL_FAILURE;

    constructor(public payload: any) {  }
}

export class VisibilityFilter implements Action {
    readonly type = VISIBILITY_FILTER;

    constructor(public payload: string[]) { }
}

export class GetAllByCategory implements Action {
    readonly type = GET_ALL_BY_CATEGORY;

    constructor(public payload: string) { }
}

export class GetAllByCategorySuccess implements Action {
    readonly type = GET_ALL_BY_CATEGORY_SUCCESS;

    constructor(public payload: Product[]) { }
}

export class GetAllByCategoryFailure implements Action {
    readonly type = GET_ALL_BY_CATEGORY_FAILURE;

    constructor(public payload: any) { }
}

export type Actions = 
    | GetAll
    | GetAllSuccess
    | GetAllFailure
    | VisibilityFilter
    | GetAllByCategory
    | GetAllByCategorySuccess
    | GetAllByCategoryFailure;
