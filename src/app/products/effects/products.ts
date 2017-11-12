import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as productActions from '../actions/products';
import * as categoriesActions from '../../categories/actions/categories';
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
        .ofType(productActions.GET_ALL)
        .switchMap(() => fromPromise(this.moltin.Products.All())
            .map((products: Products) => { console.log(products); return new productActions.GetAllSuccess(products); })
            // .map(() => new categoriesActions.Select('ddbb6ccf-6745-4218-a766-fd9b40276264'))
            .catch((error) => of(new productActions.GetAllFailure(error)))
        );

    @Effect()
    loadProductsByCategory$: Observable<Action> = this.actions$
        .ofType(productActions.GET_ALL_BY_CATEGORY)
        .switchMap((action: productActions.GetAllByCategory) => fromPromise(this.moltin.Categories.Get(action.payload))
            .map((category: CategoryResponse) => { console.log(category); return new productActions.GetAllByCategorySuccess(category.data.relationships.products.data); })
            .catch((error) => of(new productActions.GetAllByCategoryFailure(error))
        )
    );

}