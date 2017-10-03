import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {DetailsComponent} from './details/details.component';

const BOOK_ROUTER: Routes = [
  {path: 'all', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: ':id', component: DetailsComponent}
];

export const bookRouter = RouterModule.forChild(BOOK_ROUTER);
