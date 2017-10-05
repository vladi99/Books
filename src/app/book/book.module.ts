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
  MdIconModule,
  MatDialogModule,
  MatSnackBarModule
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
import {DeleteComponent, DeleteNotificationComponent} from './delete/delete.component';
import {AddDialogComponent} from './add/add-dialog.component';

@NgModule({
  imports: [
    bookRouter,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MdIconModule,
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
    LoaderComponent,
    DeleteComponent,
    DeleteNotificationComponent,
    AddDialogComponent
  ],
  providers: [
    BookService,
    LoaderService
  ],
  entryComponents: [
    DeleteComponent,
    DeleteNotificationComponent,
    AddDialogComponent
  ]
})
export class BookModule {
}
