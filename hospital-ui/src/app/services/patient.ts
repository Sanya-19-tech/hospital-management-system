import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'https://localhost:7173/api/Patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addPatient(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updatePatient(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}

