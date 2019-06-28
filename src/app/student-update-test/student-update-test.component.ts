import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StudentVM } from '../model/student-vm';
import { MatDialogConfig, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-update-test',
  templateUrl: './student-update-test.component.html',
  styleUrls: ['./student-update-test.component.css']
})
export class StudentUpdateTestComponent implements OnInit {

  student: StudentVM;
  constructor(private studentService: StudentService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
    this.GetStudentById(this.data.id);
  }

  GetStudentById(id) {
    this.studentService.getStudentById(id)
      .subscribe(data => this.student = data);
  }

  Update(id, form) {
    console.log(form);
    this.studentService.updateStudent(id, form)
      .subscribe(() => this.dialog.closeAll());
  }
}
