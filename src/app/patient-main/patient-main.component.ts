import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Patient } from '../shared/patient.model';
import {PatientService} from "../services/patient.service";


@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent implements OnInit {

  patientList: Patient[] = [];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  canShowForm: boolean = false;

  response: string;


  getNewElements(event){
    this.response = event;
    this.patientService.getPatients().subscribe(patients => {
      this.patientList = patients;
    });
  }

  getNewElem(event: Patient){
    this.patientList = [];
    this.patientList.push(event);
  }

  getDeleteResponse(event: string){
    if (event === "success") {this.patientService.getPatients().subscribe(patients => {
      this.patientList = patients;
    });}
  }

  mode: string = '';

  getMode(mode: string) {
    this.mode = mode;
  }

}
