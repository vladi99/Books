import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MdPaginatorModule,
  MdTableModule,
  MatInputModule,
  MdButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import {RatingModule} from 'ng2-rating';

import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {BookComponent} from './book.component';
import {DetailsComponent} from './details/details.component';
import {LoaderComponent} from './loader/loader.component';
import {BookService} from '../services/book.service';
import {LoaderService} from '../services/loader.service';

import {bookRouter} from './book.router';

@NgModule({
  imports: [
    bookRouter,
    MatCardModule,
    FlexLayoutModule,
    CommonModule,
    MdPaginatorModule,
    MdTableModule,
    MatInputModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    BookComponent,
    ListComponent,
    AddComponent,
    DetailsComponent,
    LoaderComponent
  ],
  providers: [
    BookService,
    LoaderService
  ],
})
export class BookModule {
}
