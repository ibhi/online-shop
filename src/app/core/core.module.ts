import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moltinProvider } from './moltin/provider/moltin.provider';
import { FetchInterceptorService } from './services/fetch-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    moltinProvider,
    FetchInterceptorService
  ]
})
export class CoreModule { }
