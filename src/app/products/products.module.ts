import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { ProductsEffects } from './effects/products';

@NgModule({
  imports: [
    CommonModule,
    // EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: []
})
export class ProductsModule { }
