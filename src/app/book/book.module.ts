import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {BookRouterModule} from './book-router.module';
import {ListComponent} from './list/list.component';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MdPaginatorModule,
  MdTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    BookRouterModule,
    MdPaginatorModule,
    MdTableModule
  ],
  declarations: [
    BookComponent,
    ListComponent
  ]
})
export class BookModule {
}
