import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckLoginComponent } from './components/check-login/check-login.component';
import { HomeComponent } from './components/home/home.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CheckLoginComponent,
    HomeComponent,
    ListClientsComponent,
    DetailClientComponent,
    DeleteClientComponent,
    NewClientComponent,
    UpdateClientComponent,
    ListUsersComponent,
    DetailUserComponent,
    DeleteUserComponent,
    NewUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
