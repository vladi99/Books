import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MdPaginatorModule,
  MdTableModule,
  MatInputModule,
  MdButtonModule,
  MatCardModule
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BookRouterModule} from './book-router.module';
import {RatingModule} from 'ng2-rating';

import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {BookComponent} from './book.component';
import {DetailsComponent} from './details/details.component';

@NgModule({
  imports: [
    MatCardModule,
    FlexLayoutModule,
    CdkTableModule,
    CommonModule,
    BookRouterModule,
    MdPaginatorModule,
    MdTableModule,
    MatInputModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ],
  declarations: [
    BookComponent,
    ListComponent,
    AddComponent,
    DetailsComponent
  ],
})
export class BookModule {
}
