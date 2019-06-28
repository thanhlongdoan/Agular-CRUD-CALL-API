import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StudentVM } from '../model/student-vm';
import { Observable } from 'rxjs';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentDeleteComponent } from '../student-delete/student-delete.component';
import { StudentUpdateTestComponent } from '../student-update-test/student-update-test.component';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
// import Swal from 'sweetalert2';k

const Swal = require('sweetalert2');
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  allStudent: StudentVM[];
  student: StudentVM;

  constructor(private studentService: StudentService, private dialog: MatDialog) { }
  Id: number;
  StudentName: string;
  FName: string;
  MName: string;
  ContactNo: string;
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getStudents()
      .subscribe(data => {
        this.allStudent = data;
      });
  }

  AddStudent(model) {
    this.studentService.addStudent(model)
      .subscribe(() => {
        this.dialog.closeAll(),
          this.getStudents();
      });
  }

  // Update(id) {
  //   this.studentService.getStudentById(id)
  //     .subscribe(res => this.student = res);

  //   this.showFormUpdate();
  // }

  UpdateConfirm(model, id) {
    this.studentService.updateStudent(id, model)
      .subscribe(() =>
        this.getStudents()
      );
  }

  // delete(id) {
  //   this.studentService.showFormDelete(id);

  //   // this.studentService.deleteStudent(id)
  //   //   .subscribe(() => {
  //   //     this.getStudents();
  //   //   });
  // }

  showFormCreate() {
    const diaglogConfig = new MatDialogConfig();
    diaglogConfig.autoFocus = true;
    diaglogConfig.disableClose = false;
    diaglogConfig.width = '40%';
    this.dialog.open(StudentAddComponent, diaglogConfig);
  }

  showFormUpdate(idStudent) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = {
      id: idStudent
    };
    this.dialog.open(StudentUpdateComponent, dialogConfig);
    // this.dialog.open(StudentUpdateTestComponent, dialogConfig);
  }

  showFormInfor(idStudent) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = {
      id: idStudent
    };
    this.dialog.open(StudentDetailComponent, dialogConfig);
  }

  showFormDelete(idStudent) {
    const dialogRef = this.dialog.open(StudentDeleteComponent, {
      width: '30%',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        id: idStudent
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('da dong');
    });
  }

  deleteFile(id: number) {
    this.studentService.deleteStudent(id);
    this.getStudents();
    console.log('idididi:  ', id);
  }

  showalert(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudent(id)
          .subscribe(() => {
            this.getStudents(),
              Swal.fire(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              );
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }
}
