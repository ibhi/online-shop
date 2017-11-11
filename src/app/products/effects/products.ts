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

@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, @Inject(moltinToken) private moltin) {}
    
    @Effect()
    loadProducts$: Observable<Action> = this.actions$
        .ofType(actions.LOAD)
        .switchMap(() => fromPromise(this.moltin.Products.All())
            .map((products: Products) => { console.log(products); return new actions.LoadSuccess(products); })
            // .map((products: Product[] ) => )
            .catch((error) => of(new actions.LoadFailure(error)))
        );
}