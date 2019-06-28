import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentVM } from '../model/student-vm';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-detail-navigate',
  templateUrl: './student-detail-navigate.component.html',
  styleUrls: ['./student-detail-navigate.component.css']
})
export class StudentDetailNavigateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }
  student: StudentVM;
  ngOnInit() {
    this.studentService.getStudentById(this.route.snapshot.params.id)
      .subscribe(data => this.student = data);
  }

}
