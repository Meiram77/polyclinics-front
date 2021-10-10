import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Organization } from "../shared/organization.model";
import {Patient} from "../shared/patient.model";

@Injectable({
    providedIn: "root"
})
export class OrganizationService{
    constructor(private http: HttpClient) {}

    getOrgs(): Observable<Organization[]>{
        return this.http.get<Organization[]>(`http://localhost:8080/org`);
    }

    getPatientsByOrg(id: number): Observable<Patient[]>{
        return this.http.get<Patient[]>(`http://localhost:8080/patient/org/` + encodeURIComponent(id));
    }
}
