import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientMainComponent } from './patient-main/patient-main.component';
import { PatientListComponent } from './patient-main/patient-list/patient-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PatientAddComponent } from './patient-main/patient-add/patient-add.component';
import { OrganizationMainComponent } from './organization-main/organization-main.component';
import { OrganizationListComponent } from './organization-main/organization-list/organization-list.component';
import { OrganizationDetailComponent } from './organization-main/organization-detail/organization-detail.component';
import { OrganizationItemComponent } from './organization-main/organization-list/organization-item/organization-item.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PatientSearchComponent } from './patient-main/patient-search/patient-search.component';
import { PatientDelComponent } from './patient-main/patient-del/patient-del.component';
// do not add ts, webpack would do this for you

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientMainComponent,
    PatientListComponent,
    PatientAddComponent,
    OrganizationMainComponent,
    OrganizationListComponent,
    OrganizationItemComponent,
    OrganizationDetailComponent,
    MainComponent,
    PatientSearchComponent,
    PatientDelComponent
    // here U register new component, for angular to know this is part of our app
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule // simply allows us to add other modules into our module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }