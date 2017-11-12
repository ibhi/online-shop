import * as coreActions from '../actions/core';
import { stagger } from '@angular/core/src/animation/dsl';

export interface LoadingState {
    loading: boolean;
    hasError: string;
    hasMessage: string;
}

export const defaultLoadingState: LoadingState = {
    loading: false,
    hasError: null,
    hasMessage: null
}

export const loadingReducer = (state: LoadingState = defaultLoadingState, action: coreActions.Actions) : LoadingState => {
    switch (action.type) {
        case coreActions.REQUEST_START: {
            return {
                ...state,
                loading: true
            };
        }

        case coreActions.REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasMessage: action.payload,
                hasError: null
            };
        }

        case coreActions.REQUEST_FAILURE: {
            return {
                ...state,
                loading: false,
                hasMessage: null,
                hasError: action.payload
            };
        }

        default:
            return state;
    }
    
}
