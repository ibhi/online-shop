import { Action } from '@ngrx/store';
import { Categories } from '../models/categories';

export const LOAD = '[Categories] Load';
export const LOAD_SUCCESS = '[Categories] Load Success';
export const LOAD_FAILURE = '[Categories] Load Failure';

export class Load implements Action {
    readonly type = LOAD;
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Categories) {  }
}

export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;

    constructor(public payload: any) {  }
}

export type Actions = 
    | Load
    | LoadSuccess
    | LoadFailure;