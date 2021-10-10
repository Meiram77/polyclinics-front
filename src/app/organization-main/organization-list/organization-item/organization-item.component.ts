import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Organization } from 'src/app/shared/organization.model';

@Component({
  selector: 'app-organization-item',
  templateUrl: './organization-item.component.html',
  styleUrls: ['./organization-item.component.css']
})
export class OrganizationItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() org: Organization;

  @Output() getOrgId = new EventEmitter<number>();

  getPatientByOrg(orgId: number){
    this.getOrgId.emit(orgId);
  }

}
