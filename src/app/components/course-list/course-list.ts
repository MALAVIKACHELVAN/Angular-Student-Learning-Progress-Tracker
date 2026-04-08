import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
})
export class CourseList implements OnInit{
  courses$!: Observable<Course[]>;
  constructor(private courseService :CourseService)
  {
    
  }
  ngOnInit(): void {
    this.courses$=this.courseService.getCourses();
  }
  
}