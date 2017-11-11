import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as actions from '../actions/products';
import { moltinToken } from '../../core/moltin/provider/moltin.provider';
import { Products } from '../models/products';
import { Product } from '../../product/models/product';
import { Category } from '../../category/models/category';
import { Links } from '../models/links/links';

export interface CategoryResponse {
    data: Category;
    included?: { products: Product[]};
    links?: Links
}

@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, @Inject(moltinToken) private moltin) {}
    
    @Effect()
    loadProducts$: Observable<Action> = this.actions$
        .ofType(actions.GET_ALL)
        .switchMap(() => fromPromise(this.moltin.Products.All())
            .map((products: Products) => { console.log(products); return new actions.GetAllSuccess(products); })
            .catch((error) => of(new actions.GetAllFailure(error)))
        );

    @Effect()
    loadProductsByCategory$: Observable<Action> = this.actions$
        .ofType(actions.GET_ALL_BY_CATEGORY)
        .switchMap((action: actions.GetAllByCategory) => fromPromise(this.moltin.Categories.Get(action.payload))
            .map((category: CategoryResponse) => { console.log(category); return new actions.GetAllByCategorySuccess(category.data.relationships.products.data); })
            .catch((error) => of(new actions.GetAllByCategoryFailure(error))
        )
    );

}