import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Patient } from 'src/app/shared/patient.model';
import { Organization } from 'src/app/shared/organization.model';
import { OrganizationService } from 'src/app/services/organization.service';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  constructor(private orgService: OrganizationService, private patientService: PatientService) { }

  organizations: Organization[];

  ngOnInit(): void {
    this.orgService.getOrgs().subscribe(orgs => {
      this.organizations = orgs;
    });
  }

  @ViewChild("patientName") name: ElementRef;
  @ViewChild("patientIIN") iin: ElementRef;
  @ViewChild("orgId") orgId: ElementRef;

  patientName: string;
  patientIIN: string;
  org: string;

  @Output() newPatient = new EventEmitter<String>();

    selected: any;

  addPatient(){
     this.patientName = this.name.nativeElement.value;
     this.patientIIN = this.iin.nativeElement.value;
     this.org = this.selected;
     this.patientService.savePatient(new Patient(this.patientName, this.patientIIN, Number.parseInt(this.org)), Number.parseInt(this.org)).subscribe(data=>{
         this.newPatient.emit("success");
     }, error => {
         this.newPatient.emit("error");
     });

  }

}
