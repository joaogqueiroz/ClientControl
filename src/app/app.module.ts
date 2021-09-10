import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ClientsReportComponent } from './clients-report/clients-report.component';
import { ClientsConsultComponent } from './clients-consult/clients-consult.component';
import { ClientsRegisterComponent } from './clients-register/clients-register.component';

//importing forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importing routes
import { Routes, RouterModule } from '@angular/router';

//importing http client for integrate with API 
import{HttpClientModule} from '@angular/common/http';

//importing class to use data pagination
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: 'client-register', component: ClientsRegisterComponent },
  { path: 'client-consult', component: ClientsConsultComponent },
  { path: 'client-report', component: ClientsReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsReportComponent,
    ClientsConsultComponent,
    ClientsRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
