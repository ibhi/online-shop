import { Injectable } from '@angular/core';
import fetchIntercept from 'fetch-intercept';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as coreActions from '../actions/core';

@Injectable()
export class FetchInterceptorService {

  constructor(private store: Store<AppState>) { }

  register() {
    fetchIntercept.register({
      request: (url, config) => {
        // Modify the url or config here
        this.store.dispatch(new coreActions.RequestStart());
        console.log('fetch-intercept -> request');
        return [url, config];
      },

      requestError: (error) => {
        // Called when an error occurred during another 'request' interceptor call
        return Promise.reject(error);
      },

      response: (response) => {
        // Modify the response object
        console.log('fetch-intercept -> response', response);
        if(response.ok) {
          this.store.dispatch(new coreActions.RequestSuccess('Success'));
        } else {
          this.store.dispatch(new coreActions.RequestFailure(response.statusText));
        }
        return response;
      },

      responseError: (error) => {
        // Handle an fetch error
        console.log('fetch-intercept -> responseError');
        this.store.dispatch(new coreActions.RequestFailure(error.errors[0].detail));
        return Promise.reject(error);
      }
    });
  }

}
