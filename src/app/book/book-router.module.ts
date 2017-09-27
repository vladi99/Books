import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {path: 'books', component: ListComponent},
  {path: 'add', component: AddComponent}
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

