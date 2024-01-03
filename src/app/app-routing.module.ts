import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ClientComponent } from './client/client.component';
import { NouvelleTacheComponent } from './nouvelle-tache/nouvelle-tache.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  { path: 'secure', component: SecureComponent },
  { path: 'public', component: PublicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrer', component: RegistrerComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'client', component: ClientComponent },
  { path: 'nouvelle-tache', component: NouvelleTacheComponent },
  { path: 'profile', component: ProfileComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
