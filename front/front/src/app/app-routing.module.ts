import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio/:tipousuario', component: HomeComponent },
  { path: 'inicio/:tipousuario/listclients', component: ListClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
