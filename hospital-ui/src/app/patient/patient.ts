import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../services/patient';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.html',
  styleUrls: ['./patient.css']
})
export class Patient implements OnInit {

  patients: any[] = [];
  patient: any = {};
  editMode = false;

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.service.getPatients().subscribe((data: any) => {
      this.patients = data;
    });
  }

  savePatient() {
    if (this.editMode) {
      this.service.updatePatient(this.patient.id, this.patient)
        .subscribe(() => {
          this.loadPatients();
          this.resetForm();
        });
    } else {
      this.service.addPatient(this.patient)
        .subscribe(() => {
          this.loadPatients();
          this.resetForm();
        });
    }
  }

  editPatient(p: any) {
    this.patient = { ...p };
    this.editMode = true;
  }

  deletePatient(id: number) {
    this.service.deletePatient(id)
      .subscribe(() => {
        this.loadPatients();
      });
  }

  resetForm() {
    this.patient = {};
    this.editMode = false;
  }
}
