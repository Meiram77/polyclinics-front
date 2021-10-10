import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Organization } from 'src/app/shared/organization.model';
import { Patient } from 'src/app/shared/patient.model';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  @Input() filteredPatients: Patient[]; 

}
