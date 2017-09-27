import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MdPaginatorModule,
  MdTableModule,
  MatInputModule,
  MdButtonModule,
} from '@angular/material';

import {BookRouterModule} from './book-router.module';

import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {BookComponent} from './book.component';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    BookRouterModule,
    MdPaginatorModule,
    MdTableModule,
    MatInputModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    ListComponent,
    AddComponent
  ],
})
export class BookModule {
}
