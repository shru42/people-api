import { Routes } from '@angular/router';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleEditComponent } from './pages/people-edit/people-edit.component';
import { PeopleDeleteComponent } from './pages/people-delete/people-delete.component';

export const appRoutes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit/:id', component: PeopleEditComponent },
  { path: 'delete/:id', component: PeopleDeleteComponent },
];
