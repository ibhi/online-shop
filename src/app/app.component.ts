import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as productActions from './products/actions/products';
import * as categoriesActions from './categories/actions/categories';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new productActions.GetAll());
    // this.store.dispatch(new categoriesActions.Load());
    // this.store.dispatch(new productActions.GetAllByCategory('ddbb6ccf-6745-4218-a766-fd9b40276264'));
  }
}
