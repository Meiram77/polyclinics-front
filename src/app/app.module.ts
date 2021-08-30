import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientService } from './patient/services/patient.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [PatientService]
})
export class AppModule { }
