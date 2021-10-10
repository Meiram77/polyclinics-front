import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientMainComponent } from './patient-main/patient-main.component';
import { OrganizationMainComponent } from './organization-main/organization-main.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
    {
        path: 'patients',
        component: PatientMainComponent
    },
    {
        path: 'organizations',
        component: OrganizationMainComponent
    },
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }