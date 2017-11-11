import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as actions from '../actions/categories';
import { moltinToken } from '../../core/moltin/provider/moltin.provider';
import { Categories } from '../models/categories';
import { Category } from '../../category/models/category';

@Injectable()
export class CategoriesEffects {

    constructor(private actions$: Actions, @Inject(moltinToken) private moltin) {}
    
    @Effect()
    loadCategories$: Observable<Action> = this.actions$
        .ofType(actions.LOAD)
        .switchMap(() => fromPromise(this.moltin.Categories.All())
            .map((categories: Categories) => { console.log(categories); return new actions.LoadSuccess(categories); })
            .catch((error) => of(new actions.LoadFailure(error)))
        );
}