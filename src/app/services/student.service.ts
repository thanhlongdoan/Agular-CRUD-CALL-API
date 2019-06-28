import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentVM } from '../model/student-vm';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StudentDeleteComponent } from '../student-delete/student-delete.component';
import { StudentAddComponent } from '../student-add/student-add.component';

const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})


export class StudentService {

  url = 'http://5d0c99ae9ab9d80014c261cf.mockapi.io/api/student/';
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getStudents(): Observable<StudentVM[]> {
    return this.http.get<StudentVM[]>(this.url);
  }

  addStudent(model: StudentVM): Observable<StudentVM> {
    return this.http.post<StudentVM>(this.url, model, options);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.url + id, options);
  }

  getStudentById(id: number): Observable<StudentVM> {
    return this.http.get<StudentVM>(this.url + id);
  }

  updateStudent(id: number, model: StudentVM): Observable<StudentVM> {
    return this.http.put<StudentVM>(this.url + id, model, options);
  }

  // showFormDelete(idStudent: number) {
  //   return this.dialog.open(StudentDeleteComponent, {
  //     width: '30%',
  //     panelClass: 'confirm-dialog-container',
  //     disableClose: true,
  //     data: {
  //       id: idStudent
  //     }
  //   });
  // }
  // showFormCreate() {
  //   this.dialog.open(StudentAddComponent, {
  //     width: '40%',
  //     disableClose: true,
  //     autoFocus: true
  //   });
  // }
}
