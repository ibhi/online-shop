import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './app.reducer';
import * as productActions from './products/actions/products';
import * as categoriesActions from './categories/actions/categories';
import { Products } from './products/models/products';
import { ProductsState } from './products/reducers/products';
import { visibleProductsSelector } from './app.reducer';
import { FetchInterceptorService } from './core/services/fetch-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  visibleProducts$: Observable<ProductsState>;
  private unregister;

  constructor(private store: Store<AppState>, private fetchInterceptor: FetchInterceptorService) {
    this.unregister = this.fetchInterceptor.register();
  }

  ngOnInit() {
    this.store.dispatch(new productActions.GetAll());
    setTimeout(() => this.store.dispatch(new categoriesActions.SelectAdd('ddbb6ccf-6745-4218-a766-fd9b40276264')), 6000)
    setTimeout(() => this.store.dispatch(new categoriesActions.SelectAdd('0535d2aa-0f3f-4d9d-9fc4-1bfc5d6bbc5a')), 8000);

    setTimeout(() => this.store.dispatch(new categoriesActions.SelectRemove('ddbb6ccf-6745-4218-a766-fd9b40276264')), 9000);
    setTimeout(() => this.store.dispatch(new categoriesActions.SelectRemove('0535d2aa-0f3f-4d9d-9fc4-1bfc5d6bbc5a')), 10000);

    this.store.dispatch(new categoriesActions.Load());
    this.store.dispatch(new productActions.GetAllByCategory('bb6ccf-6745-4218-a766-fd9b40276264'));
    this.visibleProducts$ = this.store.select(visibleProductsSelector);
    this.visibleProducts$.subscribe((visibleProducts) => console.log('Visible products', visibleProducts));
  }

  ngOnDestroy() {
    this.unregister();
  }

}
