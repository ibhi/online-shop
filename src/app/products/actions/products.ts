import { Action } from '@ngrx/store';
import { Products } from '../models/products';

export const LOAD = '[Products] Load';
export const LOAD_SUCCESS = '[Products] Load Success';
export const LOAD_FAILURE = '[Products] Load Failure';

export class Load implements Action {
    readonly type = LOAD;
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Products) {  }
}

export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;

    constructor(public payload: any) {  }
}

export type Actions = 
    | Load
    | LoadSuccess
    | LoadFailure;