import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  confirmDelete() {
    this.studentService.deleteStudent(this.data.id)
      .subscribe(() => this.closeDialog());
  }
}
