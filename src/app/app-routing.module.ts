import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    component : AddRestoComponent,
    path:'add'
  },
  {
    component : ListRestoComponent,
    path:'list'
  },
  {
    component : UpdateRestoComponent,
    path:'update'
  },
  {
    component : LoginComponent,
    path:'login'
  },
  {
    component : RegisterComponent,
    path:'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
