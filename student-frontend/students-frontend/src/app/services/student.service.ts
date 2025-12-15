import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8085/stuApp/v1/students';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/allStu`);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/StuById/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/addStu`, student);
  }

  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/updateStu/${id}`, student);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteStu/${id}`);
  }
}
