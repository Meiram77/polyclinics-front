import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Organization } from '../shared/organization.model';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.component.html',
  styleUrls: ['./organization-main.component.css']
})
export class OrganizationMainComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  filteredPatients: Patient[];

  getOrgList(event){
    this.filteredPatients = event;
  }

}
