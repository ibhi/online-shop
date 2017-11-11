import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { ProductsEffects } from './products/effects/products';
import { CategoriesEffects } from './categories/effects/categories';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ProductsEffects, CategoriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
