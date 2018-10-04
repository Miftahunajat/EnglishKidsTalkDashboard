import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { ItemsComponent }      from './items/items.component';
import { UserDetailComponent }      from './user-detail/user-detail.component';
import { ItemDetailComponent }      from './item-detail/item-detail.component';
import { UserShowComponent }      from './user/user-show/user-show.component';

const routes: Routes = [
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // untuk menambahkan default routing pada saat dibuka pertama kali
  { path: 'items', component: ItemsComponent },
  { path: 'users', component: UserShowComponent },
  { path: 'itemdetail/:id', component: ItemDetailComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}