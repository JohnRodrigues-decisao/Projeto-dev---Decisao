import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardBodyComponent } from './components/dashboard/dashboard-body/dashboard-body.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ClientListComponent } from './components/dashboard/client-list/client-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashClientComponent } from './pages/dash-client/dash-client.component';
import { ClientEditComponent } from './components/dashboard/client-edit/client-edit.component';
import { ClientAddComponent } from './components/dashboard/client-add/client-add.component';
import { ClientLocationComponent } from './components/dashboard/client-location/client-location.component';
import { ClientRepresentativesComponent } from './components/dashboard/client-representatives/client-representatives.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardBodyComponent,
    SpinnerComponent,
    ClientListComponent,
    FooterComponent,
    DashClientComponent,
    ClientEditComponent,
    ClientAddComponent,
    ClientLocationComponent,
    ClientRepresentativesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
