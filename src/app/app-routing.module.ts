import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './main/acceuil/acceuil.component';
import { CompteComponent } from './main/compte/compte.component';
import { LocalisationComponent } from './main/localisation/localisation.component';
import { FlotteComponent } from './main/flotte/flotte.component';
import { FinanceComponent } from './main/finance/finance.component';
import { MessagerieComponent } from './main/messagerie/messagerie.component';
import { ParametreComponent } from './main/parametre/parametre.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'flotte', component: FlotteComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'parametre', component: ParametreComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
