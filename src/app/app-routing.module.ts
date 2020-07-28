import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add.component';
import { IndexComponent } from './index.component';
import { EditComponent } from './edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'index', component: IndexComponent },
  { path: 'index/add', component: AddComponent },
  { path: 'index/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
