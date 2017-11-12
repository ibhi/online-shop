import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

import * as productActions from './products/actions/products';
import * as categoriesActions from './categories/actions/categories';
import { Products } from './products/models/products';
import { ProductsState } from './products/reducers/products';
import { visibleProductsSelector } from './app.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  visibleProducts$: Observable<ProductsState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new productActions.GetAll());
    setTimeout(
      () => this.store.dispatch(new categoriesActions.Select('ddbb6ccf-6745-4218-a766-fd9b40276264')),
      10000
    );
    this.store.dispatch(new categoriesActions.Load());
    // this.store.dispatch(new productActions.GetAllByCategory('ddbb6ccf-6745-4218-a766-fd9b40276264'));
    this.visibleProducts$ = this.store.select(visibleProductsSelector);
    this.visibleProducts$.subscribe((visibleProducts) => console.log('Visible products', visibleProducts));
  }

}
