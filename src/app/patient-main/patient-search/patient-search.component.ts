import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

import { PatientService } from "../../services/patient.service";
import {Patient} from "../../shared/patient.model";

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  @ViewChild("iin") iin: ElementRef;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  personIIN: string;

  //
  @Output() sendPatientFoundByIIN = new EventEmitter<Patient>();

  searchPatient(){
    //получаем значение ИИН
    this.personIIN = this.iin.nativeElement.value;
    if(this.personIIN !== null && this.personIIN !== undefined) {
      //отправляется ИИН в бэкенд через подписку на асинхронный запрос
      this.patientService.getPatientsbyIin(this.personIIN).subscribe(data => {
        //вывод ИИН найденного пациента
        this.sendPatientFoundByIIN.emit(data);
      });
    }
  }

}
