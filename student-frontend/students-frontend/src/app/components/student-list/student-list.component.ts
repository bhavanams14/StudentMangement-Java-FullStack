import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentListComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  newStudent: Student = {
    stuName: '',
    avgOutOfMarks: 0,
    passedOutYear: 2024,
    isSelected: false,
    emails: '',
    mobileNumber: '',
    address: ''
  };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAll().subscribe(data => this.students = data);
  }

  addStudent(): void {
    this.studentService.create(this.newStudent).subscribe(() => {
      this.newStudent = {
        stuName: '',
        avgOutOfMarks: 0,
        passedOutYear: 2024,
        isSelected: false,
        emails: '',
        mobileNumber: '',
        address: ''
      };
      this.loadStudents();
    });
  }

  deleteStudent(id: number): void {
    this.studentService.delete(id).subscribe(() => this.loadStudents());
  }
}
