import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const ROUTER: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'books',
    loadChildren: 'app/book/book.module#BookModule'
  },
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(ROUTER);
