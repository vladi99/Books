import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: 'books', component: ListComponent},
  {path: 'addBook', component: AddComponent},
  {path: 'books/:id', component: DetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BookRouterModule {
}

