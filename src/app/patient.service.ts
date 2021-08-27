import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PatientModel} from "./shared/patient.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientUrl: string;
  
  constructor(private http: HttpClient) {
    this.patientUrl='http://localhost:8080/patient/all';
  }
  
  public findAll(): Observable<PatientModel[]>{
    return this.http.get<PatientModel[]>(this.patientUrl);
  }
}
