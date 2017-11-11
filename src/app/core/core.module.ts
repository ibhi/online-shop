import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moltinProvider } from './moltin/provider/moltin.provider';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    moltinProvider
  ]
})
export class CoreModule { }
