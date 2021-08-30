import { Component, OnInit } from '@angular/core';
import {PatientModel} from "../../shared/patient.model";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: PatientModel[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.findAll().subscribe(data =>{
      this.patients = data;
    })
  }

}
