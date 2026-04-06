import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css'],
})
export class CourseList implements OnInit{
  constructor(private courseService :CourseService){
  }
  Courses:Course[]=[];
  loading:boolean = true; // hide loading
  ngOnInit(): void {
    this.loadCourses();
  }
  loadCourses():void{
    this.courseService.getCourses().subscribe({
      next:(data)=>{
        this.Courses=data;
        console.log(this.Courses);
        this.loading = false; // hide loading
      },
      error:(err)=>{
        console.error("Error fetching courses :",err);
        this.loading=false;
      }
    })
  }
}