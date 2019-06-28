import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StudentVM } from '../model/student-vm';
import { MatDialogConfig, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  student: StudentVM;
  myform: FormGroup;
  constructor(private studentService: StudentService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
    this.myform = new FormGroup({
      StudentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      // FName: new FormControl('', [Validators.required]),
      // MName: new FormControl('', [Validators.required]),
      // ContactNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')])
    });
    this.GetStudentById(this.data.id);
  }

  GetStudentById(id) {
    this.studentService.getStudentById(id)
      .subscribe(data => {
        this.student = data;
      });
    console.log(this.myform);
  }

  Update(id, form) {
    this.studentService.updateStudent(id, form)
      .subscribe(() => this.dialog.closeAll());
  }
}
