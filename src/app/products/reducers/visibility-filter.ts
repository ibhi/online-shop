import * as productActions from '../actions/products';

const initialState: string[] = [];

export const visibilityFilterReducer = (state = initialState, action:  productActions.Actions): string[] => {
    switch (action.type) {
        case productActions.VISIBILITY_FILTER: {
            return action.payload;
        }
        default:
            return state;
    }
}