import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {BookRouterModule} from './book-router.module';
import {ListComponent} from './list/list.component';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MdPaginatorModule,
  MdTableModule,
  MatCardModule,
} from '@angular/material';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    BookRouterModule,
    MdPaginatorModule,
    MdTableModule,
    MatCardModule
  ],
  declarations: [
    BookComponent,
    ListComponent,
    CardListComponent
  ]
})
export class BookModule {
}
