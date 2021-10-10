import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { PatientService } from 'src/app/services/patient.service';
import { Organization } from 'src/app/shared/organization.model';
import { Patient } from 'src/app/shared/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
      console.log(patients);
    });
  }


  @Input() res: Patient[];


}
