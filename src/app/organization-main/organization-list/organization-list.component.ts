import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { OrganizationService } from '../../services/organization.service';
import { Organization } from '../../shared/organization.model';
import { Patient } from '../../shared/patient.model';
@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  orgList: Organization[];
  patientList: Patient[];

  constructor(private organizationService: OrganizationService, private patientService: PatientService) { }

  ngOnInit(): void {
    this.organizationService.getOrgs().subscribe(orgList => {
      this.orgList = orgList;
      console.log(orgList);  
    });

    this.patientService.getPatients().subscribe(patients=>{
      this.patientList = patients;
      console.log(patients);  
    });
  }



  @Output() sendOrgList = new EventEmitter<Patient[]>();

  getOrgId(event: number){
    this.organizationService.getPatientsByOrg(event).subscribe(data => {
      this.sendOrgList.emit(data);
    });
  }

}
