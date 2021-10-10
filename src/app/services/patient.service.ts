import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Patient } from "../shared/patient.model";

@Injectable({
    providedIn: "root"
})
export class PatientService{
    constructor(private http: HttpClient) {}

    //вывод всех пациентов
    getPatients(): Observable<Patient[]>{
        return this.http.get<Patient[]>(`http://localhost:8080/patient/all`);
    } 

    //вывод пациентов закрепленных к мед.учреждению
    savePatient(patient: Patient, id: number){
        const body = patient;
        return this.http.post(`http://localhost:8080/patient/org/` + encodeURIComponent(id), body);
    }

    //прослушивается
    getPatientsbyIin(iin: string): Observable<Patient>{
        return this.http.get<Patient>('http://localhost:8080/patient/byIIN/' +   encodeURIComponent(iin));
    }


    deletePatientbyIin(iin: string): Observable<any> {
        return this.http.delete('http://localhost:8080/patient/delbyIIN/' + encodeURIComponent(iin));
    }
}
