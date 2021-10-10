import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../shared/patient.model";

@Component({
  selector: 'app-patient-del',
  templateUrl: './patient-del.component.html',
  styleUrls: ['./patient-del.component.css']
})
export class PatientDelComponent implements OnInit {

  @ViewChild("iin") iin : ElementRef;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  personIIN: string;

  @Output() sendPatientDeleteByIIN = new EventEmitter<string>();

  deletePatient(){
        this.personIIN = this.iin.nativeElement.value;
        if(this.personIIN !== null && this.personIIN !== undefined){
          this.patientService.deletePatientbyIin(this.personIIN).subscribe(data =>{
              this.sendPatientDeleteByIIN.emit(data);
          })
        }
  }

}
