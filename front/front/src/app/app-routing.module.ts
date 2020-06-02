import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio/:tipousuario', component: HomeComponent },
  { path: 'inicio/:tipousuario/listclients', component: ListClientsComponent },
  { path: 'inicio/:tipousuario/detailclient/:id', component: DetailClientComponent },
  { path: 'inicio/:tipousuario/deleteclient/:id', component: DeleteClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
