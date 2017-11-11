import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProducts from './products/reducers/products';
import * as actions from './products/actions/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<fromProducts.ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new actions.Load());
  }
}
