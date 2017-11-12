import { Action } from '@ngrx/store';

export const REQUEST_START = '[Request] Start';
export const REQUEST_SUCCESS = '[Request] Success';
export const REQUEST_FAILURE = '[Request] Failure';

export class RequestStart implements Action {
    readonly type = REQUEST_START;
}

export class RequestSuccess implements Action {
    readonly type = REQUEST_SUCCESS;
    constructor(public payload: string) { }
}

export class RequestFailure implements Action {
    readonly type = REQUEST_FAILURE;
    constructor(public payload: string) { }
}

export type Actions = 
    | RequestStart
    | RequestSuccess
    | RequestFailure;
