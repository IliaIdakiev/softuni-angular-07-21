import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user-list'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-detail',
    component: UserDetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);