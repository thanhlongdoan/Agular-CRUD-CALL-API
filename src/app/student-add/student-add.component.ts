import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StudentVM } from '../model/student-vm';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { StudentListComponent } from '../student-list/student-list.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})


export class StudentAddComponent implements OnInit {
  myform: FormGroup;
  constructor(private studentService: StudentService, private dialog: MatDialog, private router: Router) { }
  ngOnInit() {
    this.myform = new FormGroup({
      StudentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      FName: new FormControl('', [Validators.required]),
      MName: new FormControl('', [Validators.required]),
      ContactNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')])
    });
  }

  AddStudent(model) {
    this.studentService.addStudent(model)
      .subscribe(() => {
        this.dialog.closeAll(),
          this.router.navigate(['home']);
      });
  }
}
