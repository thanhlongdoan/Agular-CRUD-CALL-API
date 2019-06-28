import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from '../services/student.service';
import { StudentVM } from '../model/student-vm';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: StudentVM;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.GetStudentById(this.data.id);
    this.load();
  }

  GetStudentById(id) {
    this.studentService.getStudentById(id)
      .subscribe(data => this.student = data);
  }

  load() {
    console.log('a');
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}
