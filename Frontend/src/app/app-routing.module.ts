import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component page
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashClientComponent } from './pages/dash-client/dash-client.component';
 
// Components dash
import { ClientEditComponent } from './components/dashboard/client-edit/client-edit.component';
import { ClientAddComponent } from './components/dashboard/client-add/client-add.component';
import { ClientLocationComponent } from './components/dashboard/client-location/client-location.component';
import { ClientRepresentativesComponent } from './components/dashboard/client-representatives/client-representatives.component';


// Security
import { authGuard } from './utils/auth.guard';

LoginComponent

const routes: Routes = [
  // Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'dashboard/client', component: DashClientComponent, canActivate: [authGuard] },
  { path: 'dashboard/client/edit', component: ClientEditComponent, canActivate: [authGuard] },
  { path: 'dashboard/client/add', component: ClientAddComponent, canActivate: [authGuard] },
  { path: 'dashboard/client/local', component: ClientLocationComponent, canActivate: [authGuard] },
  { path: 'dashboard/client/repres', component: ClientRepresentativesComponent, canActivate: [authGuard] },

  /* { path: '**', redirectTo: 'login', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
